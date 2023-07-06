'use client'

import { useState } from 'react'

export default function Home() {

  const p = 'transition-all duration-300 h-4 w-4 p-4 rounded-full border-2 text-center flex items-center justify-center'
  const line = 'h-1 w-12 md:w-20 transition-all bg-gray-900'

  const [secondP, setSecondP] = useState(' border-gray-900')
  const [thirdP, setThirdP] = useState(' border-gray-900')
  const [fourthP, setFourthP] = useState(' border-gray-900')

  const [firstDiv, setFirstDiv] = useState(' bg-gray-900')
  const [secondDiv, setSecondDiv] = useState(' bg-gray-900')
  const [thirdDiv, setThirdDiv] = useState(' bg-gray-900')

  const [count, setCount] = useState(1)

  const handlePrev = () => {
    if (count === 1) {
      setCount(1)
    } else {
      setCount(count - 1)
    }
    if (count === 2) {
      setSecondP(' border-gray-900')
      setFirstDiv(' animate-loadingLeft bg-gray-900')
    }
    if (count === 3) {
      setThirdP(' border-gray-900')
      setSecondDiv(' animate-loadingLeft bg-gray-900')
    }
    if (count === 4) {
      setFourthP(' border-gray-900')
      setThirdDiv(' animate-loadingLeft bg-gray-900')
    }
  }

  const handleNext = () => {
    if (count === 4) {
      setCount(4)
    } else {
      setCount(count + 1)
    }
    if (count === 1) {
      setSecondP(' border-cyan-600')
      setFirstDiv(' animate-loadingRight bg-cyan-600')
    }
    if (count === 2) {
      setThirdP(' border-cyan-600')
      setSecondDiv(' animate-loadingRight bg-cyan-600')
    }
    if (count === 3) {
      setFourthP(' border-cyan-600')
      setThirdDiv(' animate-loadingRight bg-cyan-600')
    }
  }


  return (
    <main className="flex flex-col gap-8 items-center justify-center w-screen h-screen">
      <div className='flex flex-row items-center justify-center'>
        <p className={p + ' border-cyan-600'}>
          1
        </p>
        <div className={line}>
          <div className={'w-full h-full' + firstDiv} />
        </div>
        <p className={p + secondP}>
          2
        </p>
        <div className={line}>
          <div className={'w-full h-full' + secondDiv} />
        </div>
        <p className={p + thirdP}>
          3
        </p>
        <div className={line}>
          <div className={'w-full h-full' + thirdDiv} />
        </div>
        <p className={p + fourthP}>
          4
        </p>
      </div>
      <div className="flex flex-row gap-4">
        {
          count === 1 ?
          <button disabled onClick={() => handlePrev()} className='cursor-not-allowed border border-gray-900 rounded bg-gray-900 px-6 py-1 text-black'>
            Prev
          </button>
          :
          <button onClick={() => handlePrev()} className='border border-cyan-600 rounded bg-cyan-600 px-6 py-1 text-white active:scale-95'>
            Prev
          </button>
        }
        {
          count === 4 ?
          <button disabled onClick={() => handleNext()} className='cursor-not-allowed border border-gray-900 rounded bg-gray-900 px-6 py-1 text-black'>
            Next
          </button>
          :
          <button onClick={() => handleNext()} className='border border-cyan-600 rounded bg-cyan-600 px-6 py-1 text-white active:scale-95'>
            Next
          </button>
        }
        
      </div>
    </main>
  )
}


