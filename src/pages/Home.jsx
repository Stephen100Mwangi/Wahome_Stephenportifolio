import { useState } from 'react'
import { MdWavingHand } from "react-icons/md";
import Button from '../components/Button';

const Home = () => {
  const options = ["Web Developer","UI/UX Designer"];
  const randomRole = options[0];
  const randomRole2 = options[1];

  const [role,setRole] = useState(randomRole);
  setTimeout(() => {
    if (role === randomRole) {
      setRole(randomRole2)
    }else{
      setRole(randomRole)
    }
  }, 5000);
  return (
    <div id='home' className={`h-[100vh] relative w-full flex justify-center items-start bg-[url('/image333-min.png')] bg-cover bg-center`}>
        <div className="absolute h-[100%] w-[100%] inset-0 bg-black opacity-90"></div>
        <div className="relative flex flex-col h-[100%] justify-center items-center space-y-10 py-8 px-5">
          <div className='text-white flex justify-center items-center space-x-3 text-2xl max-sm:text-base'>
              <p>Hello</p>
              <div><MdWavingHand /></div>
          </div>
          <p className='font-bold text-4xl text-white max-sm:text-3xl'>I am <span>Stephen Mwangi</span> a <span className='text-orange'>{role}</span></p>
          <a href="#projects"><Button text='View Portfolio' textColor='white' bgColor='orange'></Button></a>
        </div>
     
    </div>
  )
}

export default Home
