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
           <div className="flex flex-col space-y-10 pl-8 max-sm:space-y-10">
                <AwardCard institution='Dedan Kimathi University of Technology' award='Ongoing' course='Bsc Computer Science' time='2021-2025' ></AwardCard>
                <AwardCard institution='Kagumo High School' award='A- 74 Points' course='Kenya Certificate of Secondary Education' time='2017-2020' ></AwardCard>
                <div className='flex flex-col space-y-3 my-32'>
                <div className='font-bold pb-3 underline'>Certifications</div> 
                  <AwardCard institution='Postman' award='Student Expert' course='AI Postman Student Expert' link={"https://badgr.com/public/assertions/9qGbow9JSVmo_eI6NJXzuQ"}></AwardCard>
                  <AwardCard institution='Microsoft' award='Microsoft Azure DevOPs' course='Introduction to Azure DevOps' link={"https://learn.microsoft.com/en-us/users/mwangiwahome-2948/achievements/qjavgr9e?ref=https%3A%2F%2Fwww.linkedin.com%2F"}></AwardCard>
                  <AwardCard institution='Microsoft' award='AI Skills Challenge' course='Cloud Services' link={"https://learn.microsoft.com/en-us/users/mwangiwahome-2948/achievements/3yucnvwh"}></AwardCard>
                  <AwardCard institution='Microsoft' award='Git and GitHub' course='Fundamentals of Git and GitHub' link={"https://learn.microsoft.com/en-us/users/mwangiwahome-2948/achievements/bgm49afd?ref=https%3A%2F%2Fwww.linkedin.com%2F"}></AwardCard>
                  <AwardCard institution='Hello Tractor' award='UI/UX Designer' course='Rebranding Hello Tractor Operator App' link={"https://learn.microsoft.com/en-us/users/mwangiwahome-2948/achievements/qjavgr9e?ref=https%3A%2F%2Fwww.linkedin.com%2F"}></AwardCard>
                </div>
                
           </div>
        </div>
    </div>
  )
}

export default Awards
