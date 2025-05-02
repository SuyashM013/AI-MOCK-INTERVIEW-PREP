'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';


function Feedback() {

  const [feedback, setFeedback] = useState([]);
  const { interviewid } = useParams();
  const router = useRouter();

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {

    try {
      const res = await fetch(`/api/feedback?interviewid=${interviewid}`);
      const data = await res.json();
      setFeedback(data);
      // console.log("Fetched feedback:", data);
    } catch (err) {
      console.error("Error fetching feedback:", err);
    }
  };

  const averageRating =
  feedback.length > 0
    ? feedback.reduce((acc, item) => acc + item.rating, 0) / feedback.length
    : 0;

  return (
    <div className='p-10'>
      <h2 className='text-5xl mb-2 font-bebas text-green-500'>
        Congratulation!
      </h2>
      <h2 className='font-montserrat text-2xl'>Here is your Interview Feedback</h2>

      <div>
        {feedback.length > 0 ?

          <>
            <h2 className='text-lg my-3 font-montserrat text-primary'>Your Overall Interview Rating: <strong>{averageRating.toFixed(1)}</strong></h2>

            <h2 className='text-sm font-montserrat text-gray-600'>Find below interview question with correct answer, Your answer and feedback for improvement</h2>

            {feedback.map((item, idx) => (
              <Collapsible key={idx} className='mt-7'>
                <CollapsibleTrigger className='p-2 flex font-montserrat justify-between bg-secondary rounded-lg my-3 text-left w-full'>{item.question} <ChevronsUpDown /></CollapsibleTrigger>
                <CollapsibleContent>
                  <div className='flex font-montserrat flex-col gap-2 '>
                    <h2 className='p-2 border rounded-lg text-red-500'>Rating: {item.rating}</h2>
                    <p className='p-2 border rounded-lg bg-red-100 text-sm text-red-900'> <strong>Correct Answer: </strong> {item.corrAns}</p>
                    <p className='p-2 border rounded-lg bg-green-100 text-sm text-green-900'><strong>Your Answer: </strong> {item.userAnswer}</p>
                    <p className='p-2 border rounded-lg bg-blue-100 text-sm text-primary'><strong>Feedback: </strong> {item.feedback}</p>

                  </div>

                </CollapsibleContent>
              </Collapsible>
            ))
            }
          </> : (
            <p className='mt-5 text-red-500'>No feedback available for this interview. Please Retake the Interview</p>
          )}

      </div>

      <Button className="mt-5 w-48" onClick={() => router.replace('/dashboard')}>Go Home</Button>

    </div>
  )
}

export default Feedback