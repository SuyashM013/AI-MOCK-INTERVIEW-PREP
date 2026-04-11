
// 'use client';
// import { Button } from '@/components/ui/button'
// import { Mic, WebcamIcon } from 'lucide-react'
// import React, { useEffect, useState } from 'react'
// import Webcam from 'react-webcam'
// import useSpeechToText from 'react-hook-speech-to-text';
// import { useToast } from "@/hooks/use-toast"

// import { useUser } from '@clerk/nextjs';

// import { getGeminiResponse } from '@/utils/GeminiAiModel';


// function RecordAns({ MockInterviewQuestion, activeQuestion, interviewData }) {

//     const [userAnswer, setUserAnswer] = useState('');
//     const { user } = useUser();
//     const [loading, setLoading] = useState(false);
//     const { toast } = useToast()

//     const {
//         isRecording,
//         results,
//         setResults,
//         startSpeechToText,
//         stopSpeechToText,
//     } = useSpeechToText({
//         continuous: true,
//         useLegacyResults: false
//     });

//     useEffect(() => {
//         if (results.length > 0) {
//             const transcript = results.map(r => r.transcript).join(' ');
//             setUserAnswer(transcript);
//         }
//     }, [results]);

//     console.log("Recording:", isRecording);

//     const StartStopRecording = async () => {
//         if (isRecording) {
//             console.log("Stopping...");
//             stopSpeechToText();
//         } else {
//             console.log("Starting...");
//             startSpeechToText();
//         }
//     }

//     useEffect(() => {
//         if (!isRecording && userAnswer.length > 10) {
//             UpdateUserAnswer();
//         }
//     }, [isRecording]);


//     const UpdateUserAnswer = async () => {
//         try {
//             setLoading(true);

//             const feedbackPrompt = "Question " + MockInterviewQuestion?.[activeQuestion]?.question +
//                 ", User Answer " + userAnswer +
//                 ". Depends on question and user answer for the given question. Please give us rating for answer and feedback as area of improvement in answer in just 3 to 5 lines to improve it in JSON formate with rating field and feedback field.";

//             // const fedResult = await chatSession.sendMessage(feedbackPrompt);

//             const fedResult = await getGeminiResponse(feedbackPrompt);
//             const mockJsonResp = fedResult.replace('```json', '').replace('```', '');

//             console.log("Feedback Prompt: ", feedbackPrompt);
//             console.log("Gemini Feedback Response: ", fedResult);

//             let JsonFeedbackResp = {};
//             try {
//                 JsonFeedbackResp = JSON.parse(mockJsonResp);
//             } catch (e) {
//                 console.error("Invalid JSON from Gemini", mockJsonResp);
//             }

//             console.log({
//                 mockId: MockInterviewQuestion.interviewData,

//                 corrAns: MockInterviewQuestion?.[activeQuestion]?.answer,

//                 userAnswer: userAnswer,

//                 question: MockInterviewQuestion?.[activeQuestion]?.question,

//                 rating: JsonFeedbackResp.rating,

//                 feedback: JsonFeedbackResp.feedback,

//                 email: user.primaryEmailAddress?.emailAddress,

//                 createdAt: new Date().toISOString(),
//             })

//             const payload = {
//                 mockId: MockInterviewQuestion.interviewData,

//                 question: MockInterviewQuestion?.[activeQuestion]?.question,

//                 corrAns: MockInterviewQuestion?.[activeQuestion]?.answer,

//                 userAnswer: userAnswer,

//                 rating: JsonFeedbackResp.rating,

//                 feedback: JsonFeedbackResp.feedback,

//                 email: user.primaryEmailAddress?.emailAddress,

//                 createdAt: new Date().toISOString(),
//             };

//             const response = await fetch('/api/user-answer', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(payload),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 toast({
//                     title: "Answer saved",
//                     description: "Answer saved successfully",
//                 });
//                 setUserAnswer('');
//                 setResults([]);
//                 // console.log("Answer saved:", data);
//             } else {
//                 console.error("Error saving answer:", data);
//             }
//         } catch (err) {
//             console.error("UpdateUserAnswer error:", err);
//         } finally {
//             setResults([]);
//             setLoading(false);
//         }
//     };

//     return MockInterviewQuestion && (
//         <div className='flex flex-col justify-center items-center'>

//             <div className='flex flex-col justify-center items-center bg-black rounded-lg border p-5 mt-20 '>


//                 <WebcamIcon className='text-white absolute'
//                     style={{ height: 300, width: 300 }} />

//                 <Webcam
//                     mirrored={true}
//                     style={
//                         {
//                             height: 300,
//                             width: '100%',
//                             zIndex: 10,
//                         }
//                     } />
//             </div>

//             <Button disabled={loading} variant="outline" className='my-10' onClick={StartStopRecording}>
//                 {isRecording ? <h2 className='flex gap-2 items-center text-red-500'>
//                     <Mic />Stop Recording

//                 </h2> : <h2 className='flex gap-2 items-center text-blue-700 '> <Mic /> Record Answer </h2>}
//             </Button>

//             <div className='flex  p-5 flex-col justify-center items-center text-sm '>
//                 {userAnswer}
//             </div>


//         </div>
//     )
// }

// export default RecordAns


'use client';

import { Button } from '@/components/ui/button';
import { Mic, WebcamIcon, Loader2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import useSpeechToText from 'react-hook-speech-to-text';
import { useToast } from "@/hooks/use-toast";
import { useUser } from '@clerk/nextjs';
import { getGeminiResponse } from '@/utils/GeminiAiModel';

function RecordAns({ MockInterviewQuestion, activeQuestion, interviewData }) {
    const [userAnswer, setUserAnswer] = useState('');
    const [loading, setLoading] = useState(false);

    const { user } = useUser();
    const { toast } = useToast();

    const {
        isRecording,
        results,
        setResults,
        startSpeechToText,
        stopSpeechToText,
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false,
    });

    //  Handle speech results cleanly
    useEffect(() => {
        if (results.length > 0) {
            const transcript = results.map(r => r.transcript).join(' ');
            setUserAnswer(transcript);
        }
    }, [results]);

    //  Start / Stop recording
    const handleRecording = () => {
        if (isRecording) {
            stopSpeechToText();
        } else {
            setUserAnswer('');
            setResults([]);
            startSpeechToText();
        }
    };

    //  Submit Answer
    const handleSubmit = async () => {
        if (!userAnswer || userAnswer.length < 10) {
            toast({
                title: "Answer too short",
                description: "Please record a longer answer",
                variant: "destructive",
            });
            return;
        }

        try {
            setLoading(true);

            const question = MockInterviewQuestion?.[activeQuestion]?.question;
            const correctAnswer = MockInterviewQuestion?.[activeQuestion]?.answer;

            const feedbackPrompt = `
            Question: ${question}
            User Answer: ${userAnswer}
            Give rating (out of 10) and feedback in JSON:
            { "rating": number, "feedback": "text" }
            `;

            const geminiResp = await getGeminiResponse(feedbackPrompt);

            let parsed = {};
            try {
                const clean = geminiResp.replace(/```json|```/g, '');
                parsed = JSON.parse(clean);
            } catch (err) {
                console.error("Gemini JSON parse error:", geminiResp);
                parsed = { rating: 5, feedback: "Could not analyze properly." };
            }

            const payload = {
                mockId: interviewData,
                question,
                corrAns: correctAnswer,
                userAnswer,
                rating: parsed.rating,
                feedback: parsed.feedback,
                email: user?.primaryEmailAddress?.emailAddress,
                createdAt: new Date().toISOString(),
            };

            const response = await fetch('/api/user-answer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) throw new Error("Failed to save");

            toast({
                title: "✅ Answer saved",
                description: "Feedback generated successfully",
            });

            // reset
            setUserAnswer('');
            setResults([]);

        } catch (error) {
            console.error(error);
            toast({
                title: "❌ Error",
                description: "Something went wrong",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex flex-col items-center'>

            {/* Webcam Section */}
            <div className='relative flex justify-center items-center bg-black rounded-lg border p-5 mt-10 w-full max-w-md'>

                <WebcamIcon className='absolute text-white opacity-30'
                    style={{ height: 200, width: 200 }} />

                <Webcam
                    mirrored
                    style={{
                        height: 250,
                        width: '100%',
                        zIndex: 10,
                        borderRadius: '10px'
                    }}
                />
            </div>

            {/* Controls */}
            <div className='flex gap-4 mt-6'>
                <Button onClick={handleRecording} variant="outline" disabled={loading}>
                    {isRecording ? (
                        <span className='flex items-center gap-2 text-red-500'>
                            <Mic /> Stop
                        </span>
                    ) : (
                        <span className='flex items-center gap-2 text-blue-600'>
                            <Mic /> Record
                        </span>
                    )}
                </Button>

                <Button onClick={handleSubmit} disabled={loading || isRecording}>
                    {loading ? <Loader2 className="animate-spin" /> : "Submit"}
                </Button>
            </div>

            {/* 📝 Transcript */}
            <div className='mt-6 p-4 bg-gray-100/40 rounded-lg w-full max-w-md min-h-[100px] text-sm font-montserrat'>
                {userAnswer || "Your answer will appear here..."}
            </div>

        </div>
    );
}

export default RecordAns;