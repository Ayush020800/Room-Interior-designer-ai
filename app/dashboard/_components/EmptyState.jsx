import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function EmptyState() {
    const router = useRouter()
    const handleCreateNew = () => {
        router.push('/dashboard/create-new')
    }
    return (
        <div className='flex flex-col gap-2 items-center justify-center mt-10'>
            <Image src={"/placeholder.png"} alt="empty list" width={300} height={300} />
            <p className='text-2xl'>Nothing to show </p>
            <p >Create New Interial Design for your room </p>
            <Link href={"/dashboard/create-new"}>
            <Button variant="outline" className='mt-5 bg-primary hover:text-green-300' onClick={handleCreateNew}>
                + Redesign Room
            </Button>
            </Link>

        </div>
    )
}