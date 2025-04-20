'use client'
import { db } from '@/utils/db'
import React, { useEffect, useState } from 'react'


function Interview({ params }) {

  const [interviewData, setInterviewData] = useState();
  const [error, setError] = useState();



  const GetInterviewDetails = async () => {
    // const result = await db.select().from(MockInterview).where(eq(MockInterview.mockId, params.interviewId))

    try {
      const res = await fetch('/api/fetchdetails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mockId: params.interviewid })
      })

      const mongo_res = await res.json();

      if (!mongo_res.success) {
        return new Error(mongo_res.error || "Unkown Error");
      }

      setInterviewData(mongo_res.data);

      console.log(mongo_res)
      
    } catch (e) {
      console.log('Error Fetching Interview : ', e.message);
      setError(e.messgae)
    }

  }
  useEffect(() => {
    
    GetInterviewDetails();
    
  }, [])

  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!interviewData) return <div>Loading...</div>;


  return (
    <div>
      <div>Interview</div>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">{interviewData.jobPosition}</h1>
        <p><strong>Description:</strong> {interviewData.jobDescription}</p>
        <p><strong>Experience:</strong> {interviewData.jobExperience}</p>
        <p><strong>Created By:</strong> {interviewData.createdBy}</p>
        <p><strong>JSON Response:</strong> {interviewData.jsonMockResp}</p>
      </div>
    </div>
  )
}

export default Interview