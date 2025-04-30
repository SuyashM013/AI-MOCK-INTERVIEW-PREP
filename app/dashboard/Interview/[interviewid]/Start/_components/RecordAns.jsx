
import { Button } from '@/components/ui/button'
import { Mic, WebcamIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text';
import { useToast } from "@/hooks/use-toast"
import { chatSession } from '@/utils/GeminiAiModel';
import { db } from '@/utils/db';
import { UserAnswer } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { useSelectedLayoutSegment } from 'next/navigation';

function RecordAns(MockInterviewQuestion, activeQuestion, interviewData ) {

    const [userAnswer, setUserAnswer] = useState('');
    const {user} = useUser();
    const [loading, setLoading] = useState(false);

    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });

    useEffect(() => {
        results.map((results) => {
            setUserAnswer(prevAns => prevAns + results?.transcript)
        })

    }, [results])

    const { toast } = useToast()


    const SaveUserAnswer = async () => {
        if (isRecording) {
            setLoading(true)
            stopSpeechToText();
            if (userAnswer?.length < 10) {
                setLoading(false);
                toast({
                    title: "Answer too short",
                    description: "Trying again recording answer with proper explanation",
                })
            }

            const feedbackPrompt = "Question"+MockInterviewQuestion[activeQuestion]?.question+ ", User Answer"+userAnswer+ ". Depends on question and user answer for the given question. Please give us rating for answer and feedback as area of improvement in answer in just 3 to 5 lines to improve it in JSON formate with rating field and feedback field.";

            const fedResult = await chatSession.sendMessage(feedbackPrompt);

            console.log(fedResult);

            const mockJsonResp = (fedResult.response.text().replace('```json', '').replace('```', ''))

            console.log(mockJsonResp)

            const JsonFeedbackResp = JSON.parse(mockJsonResp);

            console.log(JsonFeedbackResp)

            const resp = await db.insert(UserAnswer).values({
                mockid: interviewData.mockId,
                question: MockInterviewQuestion[activeQuestion]?.question,
                corrAns: MockInterviewQuestion[activeQuestion]?.answer,
                userAnswer: userAnswer,
                rating: JsonFeedbackResp.rating,
                feedback: JsonFeedbackResp.feedback,
                userEmail: user.primaryEmailAddress?.emailAddress,
                createdAt: new Date().toISOString(),
            })
            if(resp){
                toast({
                    title: "Answer saved",
                    description: "Answer saved successfully",
                })
                setUserAnswer('');
                setLoading(false);
            }


        }
        else {
            startSpeechToText();
        }
    }


    return (
        <div className='flex flex-col justify-center items-center'>

            <div className='flex flex-col justify-center items-center bg-black rounded-lg border p-5 mt-20 '>

                <WebcamIcon className='text-white absolute'
                    style={{ height: 300, width: 300 }} />

                <Webcam
                    mirrored={true}
                    style={
                        {
                            height: 300,
                            width: '100%',
                            zIndex: 10,
                        }
                    } />
            </div>

            <Button disabled={loading} variant="outline" className='my-10' onClick={SaveUserAnswer}>
                {isRecording ? <h2 className='flex gap-2 items-center text-red-500'>
                    <Mic />Stop Recording

                </h2> : <h2 className='flex gap-2 items-center text-blue-700 '> <Mic /> Record Answer </h2>}
            </Button>

            <Button onClick={() => { console.log(userAnswer) }} >
                Show Answer
            </Button>

        </div>
    )
}

export default RecordAns