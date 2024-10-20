/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Button from '../components/Button'
import { RiSendPlaneFill } from "react-icons/ri";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import { YOUR_SERVICE_ID } from '/PersonalPortifolio/secrets.js';
// import { YOUR_TEMPLATE_ID } from '/PersonalPortifolio/secrets.js';
// import { YOUR_PUBLIC_KEY } from '/PersonalPortifolio/secrets.js';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

const Testimonials = () => {
    const form = useRef();

    let [isLoading,setIsLoading] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
      setIsLoading(true);
      const toastId = toast.loading("Sending email...");

      emailjs
        .sendForm(
          process.env.YOUR_SERVICE_ID,
          process.env.YOUR_TEMPLATE_ID,
          form.current, {
          publicKey: process.env.YOUR_PUBLIC_KEY,
        })
        .then(
          () => {
            toast.dismiss(toastId);
            toast.success('You have SUCCESSFULLY sent the email.I Will Reach Out to You Soon!');
            e.target.reset();  // Clear form after sending
            return;
          },
          (error) => {
            toast.dismiss(toastId);
            toast.error("Oops..! Error sending email.Please try again")
            console.log('FAILED...', error.text);
            return;
          },
        ).finally(() => {
          setIsLoading(false);
      });
    };

  return (
    <div id='testimonials' className='flex justify-center items-start py-12 pt-10 min-h-screen px-8 max-sm:px-4'>
      <Toaster position='top-center'></Toaster>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-8 p-6 shadow-lg justify-center items-center max-sm:w-full'>
        <div className='text-orange text-center w-full text-3xl font-bold'>Contact <span className='text-card'>Me</span></div>

        <div className="flex flex-col space-y-2 w-[95%]">
          <label htmlFor="Subject" className='font-bold text-base'>Subject</label>
          <input type="text" name="message_subject" placeholder='Type your subject here...' required className='p-[10px] px-6 outline-none' />
        </div>

        <div className="flex flex-col space-y-2 w-[95%]">
          <label htmlFor="Email" className='font-bold text-base'>Email</label>
          <input type="email" name="send_email" placeholder='Type your email here...' required className='p-[10px] px-6 outline-none w-auto'/>
        </div>
      
        <div className="flex flex-col space-y-2 w-[95%]">
          <label htmlFor="Message" className='font-bold text-base'>Message</label>
          <textarea name="message" cols={30} rows={5} placeholder='Type your message here...' required className='p-2 px-6 outline-none'/>
        </div>
        
        <div className="w-full flex justify-center items-center">
          <input disabled={isLoading} type="submit" value={isLoading ? 'Sending...' : 'Send'} className='bg-card text-white p-2 px-12 rounded-sm hover:rounded-full'/>
        </div>
      </form>
    </div>
  )
}

export default Testimonials
