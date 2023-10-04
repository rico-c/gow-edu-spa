import {useState} from 'react'
import {Button} from 'antd'

export const CourseCard = () => {
  return <div className='shadow p-5 rounded'>
    <div>
      <img src="/img/Masterclasses.jpg" />
    </div>
    <div>
      <div className='font-bold text-2xl mb-2'>
        Heading
      </div>
      <div className='flex gap-2'>
        <div className='w-1/3'>
          <img src="/img/Icon-Performance Coaching@2x.png" />
        </div>
        <div>
          <div className='font-bold text-lg'>
            Presenter
          </div>
          <div>
            Name
          </div>
        </div>
      </div>
      <div className='flex flex-wrap py-2'>
        testetstestetstetsetstetstetsteste
      </div>
      <div className='flex flex-wrap mb-2'>
        <span className='font-bold'>Price:&nbsp;&nbsp;</span>
        <span>$300</span>
      </div>
      <div className='flex justify-between'>
        <Button>Read More</Button>
        <Button>Enrol Now</Button>
      </div>
    </div>
  </div>
}