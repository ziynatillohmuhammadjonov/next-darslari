'use client'
 
import { useRouter } from 'next/navigation'
 
export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()
 
  return (
    <div className='w-full h-[100vh] flex items-center justify-center bg-slate-400 absolute top-0 left-0 flex-col'>
      <button
        onClick={() => {
          router.back()
        }}
        className='bg-white text-4xl text-black rounded mb-2'
      >
        Close modal
      </button>
      <div>{children}</div>
    </div>
  )
}