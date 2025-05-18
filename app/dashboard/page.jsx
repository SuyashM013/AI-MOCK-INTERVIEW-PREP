import React from 'react'
import AddnewInterview from './_components/AddnewInterview'
import InterviewList from './_components/InterviewList'

function Dashboard() {
  return (
    <div className='p-10'>

      <h1 className='font-bebas mb-3 text-5xl'> Dashboard</h1>
      <h2 className='text-gray-500 font-montserrat'>Create and Start your AI Mockup Interview</h2>

      <div className='grid grid-cols-1 md:grid-cols-3 my-5 gap-10 '>

      <AddnewInterview />

      </div>
      
      <InterviewList />

      {/* Previous Interview List */}

     
     
    </div>
  )
}

export default Dashboard