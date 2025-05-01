'use client'
import React, { useState } from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

import { v4 as uuidv4 } from 'uuid';
import moment from 'moment/moment';
import { LoaderCircle } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';


import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { chatSession } from '@/utils/GeminiAiModel';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';

function AddnewInterview() {

    const [openDialog, setOpenDialog] = useState(false);
    const [jobPosition, setJobPosition] = useState();
    const [jobDesc, setJobDecs] = useState();
    const [jobExp, setJobExp] = useState();
    const [loading, setLoading] = useState();
    const [jsonResp, setJsonResp] = useState([]);

    const router = useRouter();



    const { user } = useUser();

    const onSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        console.log(jobPosition, jobDesc, jobExp);

        const inpPrompt = "Job Position" + jobPosition + "Job Description" + jobDesc + "Job Experience" + jobExp + ". Based on the details provided craft 5 interview questions and answers in json format. the question and answer should be in json format.";

        const result = await chatSession.sendMessage(inpPrompt);

        const MockJsonResp = (result.response.text().replace('```json', '').replace('```', ''))

        console.log(JSON.parse(MockJsonResp));
        setJsonResp(MockJsonResp)

        if (MockJsonResp) {
            // const resp = await db.insert(MockInterview).values({
            //     mockId: uuidv4(),
            //     jsonMockResp: MockJsonResp,
            //     jobPosition: jobPosition,
            //     jobDescription: jobDesc,
            //     jobExperience: jobExp,
            //     createdBy: user?.primaryEmailAddress?.emailAddress,
            //     createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
            // }).returning({mockId:MockInterview.mockId})

            // console.log("Inserted ID:", resp)

            // if(resp){
            //     setOpenDialog(false);
            //     router.push('/dashboard/interview/'+resp[0]?.mockId);

            // }


            const resp_mongo = await fetch('/api/interviews', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    MockJsonResp,
                    jobPosition,
                    jobDesc,
                    jobExp,
                    userEmail: user?.primaryEmailAddress?.emailAddress,
                }),

            })

            const data = await resp_mongo.json();

            if (resp_mongo) {
                setOpenDialog(false);
                router.push('/dashboard/Interview/'+data.mockId);

            }


            if (!resp_mongo.ok) {
                const error = await resp_mongo.text();
                console.log("Server Retruned Eror: ", error)
                return;
            }

            if (data.success) {
                console.log('Inserted Id: ', data.mockId);
            }
            else {
                console.log('Error: ', data.error);
            }

        }

        else {
            console.log('ERRORRRRRRRRRR')
        }

        setLoading(false);
    }

    return (
        <div>

            <div onClick={() => setOpenDialog(true)} className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all'>
                <h2 className=' text-lg text-center'>+ Add New</h2>
            </div>

            <Dialog open={openDialog}>

                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle className='text-2xl'>  Tell us more about your job interviewing
                        </DialogTitle>

                        <DialogDescription>
                            Add details about your Job Position/role, Job description, and years of Experience
                        </DialogDescription>


                        <form onSubmit={onSubmit}>
                            <div className='flex flex-col gap-3 pt-5'>
                                <label className='text-black'>Job Role/Job Position</label>
                                <Input placeholder='Full stack Developer' required onChange={(e) => setJobPosition(e.target.value)} />

                                <label className='text-black'> Job Description/ Tech Stack</label>
                                <Textarea placeholder='React, Angular, Node, Express, Mongo, .NET' required onChange={(e) => setJobDecs(e.target.value)} />

                                <label className='text-black'>Years of Experience</label>
                                <Input placeholder='5' type='number' max='50' required onChange={(e) => setJobExp(e.target.value)} />
                            </div>

                            <div className='flex justify-end gap-5 pt-5'>

                                <Button type="button" onClick={() => setOpenDialog(false)} variant='ghost' className='border border-gray-500'> Cancel</Button>

                                <Button variant='default' type="submit" disabled={loading}>
                                    {loading ?
                                        <>
                                            <LoaderCircle className='animate-spin' />Generating Questions </> : 'Start Interview'}
                                </Button>

                            </div>
                        </form>



                    </DialogHeader>
                </DialogContent>
            </Dialog>





        </div>
    )
}

export default AddnewInterview