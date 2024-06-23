/* eslint-disable no-unused-vars */
import React from 'react'
import winner from '/winner.svg'
import AwardCard from '../components/AwardCard'

const Awards = () => {
  return (
    <div id='awards' className='flex flex-row space-y-20 px-8 py-20 max-sm:flex-col'>
        <div className="w-1/2 flex flex-col space-y-10 justify-center items-center max-sm:w-full">
            <div className="w-full text-3xl font-bold text-center text-orange">Awards  <span className='text-card'>&</span> Achievements</div>
            <div className='w-8/12'>
               <img src={winner} alt="" />
            </div>
        </div>
        <div className="w-1/2 flex flex-col max-sm:w-full">
           <div className="flex flex-col space-y-5 pl-8 max-sm:space-y-10">
                <AwardCard institution='Dedan Kimathi University of Technology' award='A- 74 Points' course='Bsc Computer Science' time='2021-2025' ></AwardCard>
                <AwardCard institution='Kagumo High School' award='A- 74 Points' course='Kenya Certificate of Secondary Education' time='2017-2020' ></AwardCard>
           </div>
        </div>
    </div>
  )
}

export default Awards
