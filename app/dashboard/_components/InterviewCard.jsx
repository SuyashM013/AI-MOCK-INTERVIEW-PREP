import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

function InterviewCard({ interview }) {

    const router = useRouter();

    const onStart = () => {
        router.push('/dashboard/Interview/' + interview?.mockId)
    }

    const onFeedback = () => {
        router.push('/dashboard/Interview/' + interview?.mockId + '/feedback')
    }

    // const onDelete = async () => {
    //     try {
    //         const res = await fetch(`/api/Delete-interview?mockId=${interview?.mockId}`, {
    //             method: 'DELETE',
    //         });

    //         const data = await res.json();

    //         if (!res.ok) {
    //             throw new Error(data.error || "Delete failed");
    //         }

    //         console.log(data);
    //         router.refresh();

    //     } catch (err) {
    //         console.error("Error deleting interview:", err);
    //     }
    // };

    return (
        // <div className='border border-blue-200 hover:shadow-md bg-blue-50 shadow-sm rounded-lg p-3'>
        <div className=''>

            <h2 className='font-bebas text-3xl  text-primary uppercase'> {interview.jobPosition}</h2>
            <h2 className='text-sm font-montserrat text-gray-600'>{interview.jobExperience} Years of Experience</h2>
            <h2 className='text-sm font-montserrat text-gray-400'>Created At: {interview.createdAt}</h2>

            <div className='flex justify-between gap-5 mt-5'>

                <Button onClick={onFeedback} variant='outline' className='w-full font-chau'>Feedback</Button>

                <Button onClick={onStart} className='w-full 
                font-chau'>Start</Button>

                {/* <Button id="delete" onClick={onDelete} className='w-full font-chau bg-red-500'>Delete</Button> */}

            </div>


        </div>
    )
}

export default InterviewCard