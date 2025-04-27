
import { Button } from '@/components/ui/button'
import { Mic, WebcamIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text';

function RecordAns() {

    const [userAnswer, setUserAnswer] = useState('');

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
            setUserAnswer(prevAns => prevAns+results?.transcript)
        })

    }, [results])

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

            <Button variant="outline" className='my-10' onClick={isRecording ? stopSpeechToText : startSpeechToText}>
                {isRecording ? <h2 className='flex gap-2 items-center text-red-500'>
                    <Mic />Stop Recording

                </h2> : 'Start Recording'}
            </Button>

            <Button onClick={()=> {console.log(userAnswer)}} >
                Show ANswer
            </Button>

            {/* <div>
                <h1>Recording: {isRecording.toString()}</h1>
                <Button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
                    {isRecording ? 'Stop Recording' : 'Start Recording'}
                </Button>
                <ul>
                    {results.map((result) => (
                        <li key={result.timestamp}>{result.transcript}</li>
                    ))}
                    {interimResult && <li>{interimResult}</li>}
                </ul>
            </div> */}
        </div>
    )
}

export default RecordAns