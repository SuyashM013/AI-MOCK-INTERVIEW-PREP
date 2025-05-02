'use client'

import React, { useEffect, useState } from 'react'
import QuestionsSection from './_components/QuestionsSection';
import RecordAns from './_components/RecordAns';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function page({ params }) {

  const { interviewid } = React.use(params);

  const [interviewData, setInterviewData] = useState();
  const [MockInterviewQuestion, setMockInterviewQuestion] = useState();
  const [activeQuestion, setActiveQuestion] = useState(0);

  useEffect(() => {
    GetInterviewDetails();
  }, [])

  const GetInterviewDetails = async () => {

    try {
      const res = await fetch('/api/fetchdetails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mockId: interviewid })
      })

      const mongo_res = await res.json();

      if (!mongo_res.success) {
        return new Error(mongo_res.error || "Unkown Error");
      }

      const jsonMockresp = JSON.parse(mongo_res.data.jsonMockResp)
      // console.log(jsonMockresp)
      setMockInterviewQuestion(jsonMockresp);
      setInterviewData(interviewid);
      // console.log(mongo_res.data)
      // console.log("mockId:", mongo_res.data.mockId); 

    } catch (e) {
      console.log('Error Fetching Interview : ', e.message);
      setError(e.messgae)
    }
  }

  return (
    <div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 '>

        {/* Questions */}
        <QuestionsSection MockInterviewQuestion={MockInterviewQuestion} activeQuestion={activeQuestion} />

        {/* Video/ voice recording */}

          <RecordAns MockInterviewQuestion={MockInterviewQuestion} activeQuestion={activeQuestion} interviewData={interviewData} />

      
      </div>

      <div className='flex justify-end gap-6 mt-5'>
        {activeQuestion > 0 && <Button onClick={() => setActiveQuestion(activeQuestion - 1)}>
          Prev Question
        </Button>}


        {activeQuestion != MockInterviewQuestion?.length - 1 && <Button onClick={() => setActiveQuestion(activeQuestion + 1)}>
          Next Question
        </Button>}

        {activeQuestion == MockInterviewQuestion?.length - 1 &&

          <Link href={'/dashboard/Interview/' + interviewid + '/feedback'} >
            <Button>
              End Interview
            </Button>
          </Link>}

      </div>


    </div>
  )
}

export default page