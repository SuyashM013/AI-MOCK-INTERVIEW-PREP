
'use client';
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

function RecordAns(MockInterviewQuestion, activeQuestion, interviewData) {

//     console.log(MockInterviewQuestion); // should not be undefined
//   console.log(MockInterviewQuestion.activeQuestion);
//   console.log(MockInterviewQuestion.interviewData);

//   console.log(
//     "Active Question:",
//     MockInterviewQuestion?.MockInterviewQuestion?.[MockInterviewQuestion?.activeQuestion]?.question
//   );


    const [userAnswer, setUserAnswer] = useState('');
    const { user } = useUser();
    const [loading, setLoading] = useState(false);
    const { toast } = useToast()

    const {
        error,
        interimResult,
        isRecording,
        results,
        setResults,
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

    const StartStopRecording = async () => {

        if (isRecording) {
            stopSpeechToText();
            if (userAnswer?.length < 10) {
                setLoading(false);
                toast({
                    title: "Answer too short",
                    description: "Trying again recording answer with proper explanation",
                })
            }
        }
        else {
            startSpeechToText();
        }
    }

    useEffect(() => {
        if (!isRecording && userAnswer.length>10) {
            UpdateUserAnswer();
        }
    }, [userAnswer])  


    const UpdateUserAnswer = async () => {
        try {
            setLoading(true);
    
            const feedbackPrompt = "Question " + MockInterviewQuestion[activeQuestion]?.question +
                ", User Answer " + userAnswer +
                ". Depends on question and user answer for the given question. Please give us rating for answer and feedback as area of improvement in answer in just 3 to 5 lines to improve it in JSON formate with rating field and feedback field.";
    
            const fedResult = await chatSession.sendMessage(feedbackPrompt);
            const mockJsonResp = fedResult.response.text().replace('```json', '').replace('```', '');
            const JsonFeedbackResp = JSON.parse(mockJsonResp);

            console.log({
                mockId: MockInterviewQuestion.interviewData,
                corrAns: MockInterviewQuestion?.MockInterviewQuestion?.[MockInterviewQuestion?.activeQuestion]?.answer,
                userAnswer: userAnswer,
                    question: MockInterviewQuestion?.MockInterviewQuestion?.[MockInterviewQuestion?.activeQuestion]?.question,
                    rating: JsonFeedbackResp.rating,
                    feedback: JsonFeedbackResp.feedback,
                    userEmail: user.primaryEmailAddress?.emailAddress,
                    createdAt: new Date().toISOString(),
            })
    
            const payload = {
                mockId: MockInterviewQuestion.interviewData,
                question: MockInterviewQuestion?.MockInterviewQuestion?.[MockInterviewQuestion?.activeQuestion]?.question,
                corrAns: MockInterviewQuestion?.MockInterviewQuestion?.[MockInterviewQuestion?.activeQuestion]?.answer,
                userAnswer: userAnswer,
                rating: JsonFeedbackResp.rating,
                feedback: JsonFeedbackResp.feedback,
                userEmail: user.primaryEmailAddress?.emailAddress,
                createdAt: new Date().toISOString(),
            };
    
            const response = await fetch('/api/user-answer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();
    
            if (response.ok) {
                toast({
                    title: "Answer saved",
                    description: "Answer saved successfully",
                });
                setUserAnswer('');
                setResults([]);
                console.log("Answer saved:", data);
            } else {
                console.error("Error saving answer:", data);
            }
        } catch (err) {
            console.error("UpdateUserAnswer error:", err);
        } finally {
            setResults([]);
            setLoading(false);
        }
    };
    
    return MockInterviewQuestion &&  (
        <div className='flex flex-col justify-center items-center'>


            {/* <h1>Active question: {MockInterviewQuestion?.MockInterviewQuestion?.[MockInterviewQuestion?.activeQuestion]?.question}</h1>
            <h1>Active------- answer: {MockInterviewQuestion?.MockInterviewQuestion?.[MockInterviewQuestion?.activeQuestion]?.answer}</h1>
            <h1>{MockInterviewQuestion[activeQuestion]?.answer}</h1>
            <h1>Mockid: {MockInterviewQuestion.interviewData}</h1>
            
            <h1>User Answer: {userAnswer}</h1> */}

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

            <Button disabled={loading} variant="outline" className='my-10' onClick={StartStopRecording}>
                {isRecording ? <h2 className='flex gap-2 items-center text-red-500'>
                    <Mic />Stop Recording

                </h2> : <h2 className='flex gap-2 items-center text-blue-700 '> <Mic /> Record Answer </h2>}
            </Button>

            {/* <Button onClick={() => { console.log(userAnswer) }} >
                Show Answer
            </Button> */}

        
        </div>
    )
}

export default RecordAns