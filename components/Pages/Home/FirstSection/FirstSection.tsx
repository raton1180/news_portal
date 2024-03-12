import { news } from '@/constant/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FirstSection = () => {
  return (
    <div className='grid grid-cols-12 gap-4 justify-center border'>
      {/* first section */}
      <div className="col-span-3">
        {news.slice(0, 3).map((ne, idx) => (
          <div>
            <Link href="/">
              <div className='flex gap-5 my-2'>
                <h2 className='font-semibold hover:text-primary transition'>{ne?.title}</h2>
                <Image width={90} height={90} src={ne?.image} alt={ne?.title} />
              </div>
              <p className='text-muted hover:text-black transition'>{ne?.des}</p>
            </Link>
            <p className='my-1 text-muted'>{ne?.time}</p>
          </div>
        ))

        }
      </div>
      <div className="col-span-6">
        2
      </div>
      <div className="col-span-3">
        3
      </div>
      {/* end first section */}
    </div>
  )
}

export default FirstSection