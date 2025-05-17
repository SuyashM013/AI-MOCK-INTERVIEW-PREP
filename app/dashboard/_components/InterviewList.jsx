'use client'

import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import InterviewCard from './InterviewCard';

function InterviewList() {

    const { user } = useUser();
    const [interviewList, setInterviewList] = useState([]);
    const [preInterview, setPreInterview] = useState([]);

    useEffect(() => {
        GetInterviewList();
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

    return interviewList && (
        <div className='mt-12 '>
            <div className='mb-10'>
                <h2 className='font-bold font-montserrat text-xl mb-5'>Practice Mock Interviews</h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
                    {preInterview && preInterview.map((interview, index) => {

                        return <InterviewCard interview={interview} key={index} />

                    })}

                </div>

            </div>


            <div>
                <h2 className='font-bold font-montserrat text-xl mb-5'>Previous Interviews</h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
                    {interviewList && interviewList.map((interview, index) => {

                        return <InterviewCard interview={interview} key={index} />

                    })}

                </div>

            </div>

            
        </div>
    )
}

export default InterviewList