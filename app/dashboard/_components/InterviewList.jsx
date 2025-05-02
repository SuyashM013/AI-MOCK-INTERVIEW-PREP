'use client'

import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import InterviewCard from './interviewCard';

function InterviewList() {

    const { user } = useUser();
    const [interviewList, setInterviewList] = useState([]);

    useEffect(() => {
        GetInterviewList();
    }, [user])

    const GetInterviewList = async () => {

        try {
            const res = await fetch(`/api/FetchAllInterview?email=${user?.primaryEmailAddress?.emailAddress}`);

            const data = await res.json();
            // console.log("Interviews:", data);
            setInterviewList(data);


        } catch (error) {
            console.error("Error fetching interviews:", error);
        }
    }

    return interviewList && (
        <div className='mt-12'>
            <h2 className='font-medium text-xl mb-5'>Previous Mock Interview</h2>

            <div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
                    {interviewList && interviewList.map((interview, index) => {
                
                        return  <InterviewCard interview={interview} key={index} />
                            
                    })}

                </div>


            </div>
        </div>
    )
}

export default InterviewList