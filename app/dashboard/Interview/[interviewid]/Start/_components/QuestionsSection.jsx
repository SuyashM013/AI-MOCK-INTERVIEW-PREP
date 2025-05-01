import { Lightbulb, Volume2 } from 'lucide-react'
import React from 'react'

function QuestionsSection({ MockInterviewQuestion, activeQuestion }) {

    const textToSpeech = (text) =>{
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.voice = window.speechSynthesis.getVoices()[11];
            window.speechSynthesis.speak(utterance);
        }
        else{
            alert('Sorry, Your Browser does not support text to speech')
        }
    }

    return MockInterviewQuestion && (
        <div className='p-5 border rounded-lg my-10 '>

            <div  className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
                {MockInterviewQuestion && MockInterviewQuestion.map((question, index) => {
                    return (
                        <div key={index} >
                            <h2 className={`p-2 rounded-full text-xs md:text-sm text-center cursor-pointer ${activeQuestion == index ? "bg-primary text-white" : "bg-secondary"}`}>Question #{index + 1}</h2>

                            {/* <h3>{question.question}</h3> */}
                        </div>
                    )

                })}
            </div>
                <h2 className='my-5 text-md md:text-lg'>
                    {MockInterviewQuestion[activeQuestion]?.question}

                </h2>
                <Volume2 className='cursor-pointer' onClick={() => textToSpeech(MockInterviewQuestion[activeQuestion].question)} />

                <div className='my-14 border rounded-lg p-5 bg-blue-100 text-blue-800'>
                    <h2 className='flex gap-2 items-center'><Lightbulb />
                    <strong>Note:</strong>
                    </h2>
                    <h2 className='text-sm  my-2'>
                        {process.env.NEXT_PUBLIC_INFORMATION_RECORD}
                    </h2>
                </div>



        </div>
    )
}

export default QuestionsSection