import React from 'react'

function QuestionsSection({ MockInterviewQuestion }) {
    return (
        <div className='p-5 border rounded-lg'>
            <h1> Questions: </h1>

            <div className='grid bg-red-200 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
                {MockInterviewQuestion && MockInterviewQuestion.map((question, index) => {
                    return (
                        <div className='bg-cyan-500'>
                            <h2 className='p-2 bg-secondary rounded-full text-xs md:text-sm text-center cursor-pointer'>Question #{index + 1}</h2>

                            <h2></h2>

                        </div>
                    )

                })}
            </div>

            {/* <div>
          {MockInterviewQuestion&&MockInterviewQuestion.map((question,index) => {
            return <h2 className='p-2 bg-secondary rounded-full text-xs md:text-sm text-center cursor-pointer'>Question #{index+1}</h2>

          })}
        </div> */}

        </div>
    )
}

export default QuestionsSection