'use client'

import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import InterviewCard from './InterviewCard';
import { CircleAlert, Loader } from 'lucide-react';

function InterviewList() {

    const { user } = useUser();
    const [interviewList, setInterviewList] = useState([]);
    const [preInterview, setPreInterview] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        GetInterviewList();
        setTimeout(() => {
            setLoading(false); // After loading is complete
        }, 5000);
    }, [user])

    const GetInterviewList = async () => {

        try {
            const res = await fetch(`/api/FetchAllInterview?email=${user?.primaryEmailAddress?.emailAddress}`);

            const data = await res.json();

            // console.log("Interviews:", data);
            setInterviewList(data);

            const pre_res = await fetch('api/FetchProvidedInterview');

            const pre_data = await pre_res.json();

            console.log("Pre Interviews:", pre_data);
            setPreInterview(pre_data);


        } catch (error) {
            console.error("Error fetching interviews:", error);
        }
    }

    return (
        <div className='mt-12 '>

            <div className='mb-10'>
                <h2 className='font-bold font-montserrat text-xl mb-5'>Practice Mock Interviews</h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>

                    {
                        preInterview && preInterview.length == 0 &&
                        <h2>
                            <Loader className='animate-spin' width={40} height={40} />
                        </h2>
                    }
                    {preInterview && preInterview.map((interview, index) => {

                        return <InterviewCard interview={interview} key={index} />

                    })}

                </div>

            </div>


            <div>
                <h2 className='font-bold font-montserrat text-xl mb-5'>Previous Interviews</h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
                    {/* {
                        interviewList.length != 0 &&
                        <h2 className=''>
                            <Loader className='animate-spin' width={40} height={40} />
                        </h2>
                    }
                    {
                        interviewList && interviewList.length == 0 &&
                        <h2 className='text-red-500 flex items-center gap-3'>
                            <CircleAlert className='text-red-500' width={20} height={20} /> No Interviews Found, Start a New One
                        </h2>
                    }
                    {interviewList && interviewList.map((interview, index) => {

                        return <InterviewCard interview={interview} key={index} />

                    })} */}
                    {loading && (
                        <h2 className='flex items-center justify-center'>
                            <Loader className='animate-spin' width={40} height={40} />
                        </h2>
                    )}

                    {!loading && interviewList.length === 0 && (
                        <h2 className='text-red-500 flex items-center gap-3'>
                            <CircleAlert className='text-red-500' width={20} height={20} />
                            No Interviews Found, Start a New One
                        </h2>
                    )}

                    {!loading && interviewList.length > 0 && (
                        <>
                        
                            {interviewList.map((interview, index) => (
                                <InterviewCard interview={interview} key={index} />
                            ))}
                        </>
                    )}

                </div>

            </div>


        </div>
    )
}

export default InterviewList