'use client'

import Webcam from "react-webcam";
import React, { useEffect, useState } from 'react'
import { Lightbulb, WebcamIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


function Interview({ params }) {

  const { interviewid } = React.use(params);

  const [interviewData, setInterviewData] = useState();
  const [error, setError] = useState();
  const [webCamon, setWebCam] = useState(false);

  useEffect(() => {
    GetInterviewDetails();
  }, [])

  // Used to fetch interview details from mongo db
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
      setInterviewData(mongo_res.data);

    } catch (e) {
      console.log('Error Fetching Interview : ', e.message);
      // setError(e.messgae)
    }
  }


  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!interviewData) return <div>Loading...</div>;


  return (
    <div className='my-10 '>

      <h2 className='font-bold text-2xl'>Let's Get Started</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">

        <div className="flex flex-col my-5 gap-5 ">

          <div className="flex flex-col gap-5 border p-5 rounded-lg">
            <h2 className="text-lg"> <strong>Job Position/ Job Role : </strong> {interviewData.jobPosition}</h2>
            <h2 className="text-lg"> <strong>Job Description/ Tech Stack : </strong> {interviewData.jobDescription}</h2>
            <h2 className="text-lg"> <strong>Years of Experience : </strong> {interviewData.jobExperience}</h2>

          </div>

          <div className="p-5 border rounded-lg border-yellow-300 bg-yellow-100">

            <h2 className="flex gap-2 items-center text-yellow-700 mb-3"> <Lightbulb /> <strong> Information</strong> </h2>
            <h2 className="text-yellow-500">{process.env.NEXT_PUBLIC_INFORMATION}</h2>

          </div>

        </div>

        <div className="flex flex-col items-center ">

          {webCamon ? <Webcam
            onUserMedia={() => webCamon(true)}
            mirrored={true}
            style={{ width: 300, height: 300 }}
          />
            :
            <>
              <WebcamIcon className="h-72 w-full my-7 p-20 bg-secondary rounded-xl" />

              <Button variant="ghost" className="w-full border" onClick={() => { setWebCam(true) }}>Start Camera</Button>

            </>
          }
        </div>

      </div >
      <div className="flex mt-10 justify-end items-end">
        <Link href={'/dashboard/Interview/'+interviewid+'/start'}>
          <Button> Start Interview</Button>
        </Link>

      </div>


    </div>
  )
}

export default Interview