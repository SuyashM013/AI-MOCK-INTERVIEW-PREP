'use client'

import React, { useEffect, useState } from 'react'
import QuestionsSection from './_components/QuestionsSection';

function page({params}) {

  const { interviewid } = React.use(params);

  const [interviewData, setInterviewData] = useState();
  const [MockInterviewQuestion, setMockInterviewQuestion] = useState();

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
      console.log(jsonMockresp.
        interviewQuestions
        )
      setMockInterviewQuestion(jsonMockresp.interviewQuestions);
      setInterviewData(mongo_res.data);
      

    } catch (e) {
      console.log('Error Fetching Interview : ', e.message);
      setError(e.messgae)
    }
  }

  return (
    <div>

      <div className='grid grid-cols-1 md:grid-cols-2'>
        {/* Questions */}
        <QuestionsSection MockInterviewQuestion={MockInterviewQuestion} />

        {/* <h1>Questions are: </h1>
        <div>
          {MockInterviewQuestion&&MockInterviewQuestion.map((question,index) => {
            return <h2 className='p-2 bg-secondary rounded-full text-xs md:text-sm text-center cursor-pointer'>Question #{index+1}</h2>

          })}
        </div> */}






        {/* Video/ voice recording */}
        <div>audio</div>

      </div>



    </div>
  )
}

export default page