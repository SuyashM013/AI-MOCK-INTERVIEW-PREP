'use client'

import React, { useEffect, useState } from 'react'
import QuestionsSection from './_components/QuestionsSection';
import RecordAns from './_components/RecordAns';

function page({params}) {

  const { interviewid } = React.use(params);

  const [interviewData, setInterviewData] = useState();
  const [MockInterviewQuestion, setMockInterviewQuestion] = useState();
  const [activeQuestion, setActiveQuestion] = useState(1);

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
      console.log(jsonMockresp)
      setMockInterviewQuestion(jsonMockresp);
      setInterviewData(mongo_res.data);
      

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
        <RecordAns MockInterviewQuestion={MockInterviewQuestion} activeQuestion={activeQuestion} interviewData={interviewData}/>

      </div>



    </div>
  )
}

export default page