
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import './App.css'

function App() {
  return (
   <div className='mt-14 mx-auto max-w-6xl grid grid-cols-[40%_60%]'>
      <div>
        <div className='sticky top-14 grid grid-rows-[35%_45%_20%] h-[87vh]'>
            <div className='flex flex-col gap-2'>
              <div className='text-3xl text-priTitle font-semibold'>Wiritipon Thapkhan</div>
              <div className='text-priAccent font-semibold'>Computer Engineering Student</div>
              <div className='text-sm w-5/6'>I'm a computer engineering student at Kasetsart University with a passion for software development and related technologies. My Personal Portfolio Website showcases my past experiences and works to give you an overview of my abilities and interests.</div>
              <div className='mt-4'>
                <a href=''>
                <span className='rounded-md bg-priTitle text-black py-2 px-4'>
                  View Resume
                  <span className='ml-2'><FontAwesomeIcon  className = 'animate-bounce' icon={faArrowUpFromBracket} /></span>
                  </span>
                </a>
              </div>
            </div>
            <div>Nav</div>
            <div className='flex items-end gap-4 text-2xl '>
              <span className='transition-all duration-150 hover:scale-125'><FaGithub/></span>
              {/* <a href='https://github.com/zignalssss' target='_blank'></a> */}
              <a href='https://www.instagram.com/emlnbmfsc3nzdqo_/' target='_blank'><span className='transition-all duration-150 hover:scale-125'><FaInstagram/></span></a>
              <a href='https://www.linkedin.com/in/wiritipon-thapkhan-11452b2a8/' target='_blank'><span className='transition-all duration-150 hover:scale-125'><FaLinkedin/></span></a>
              <a href='https://leetcode.com/zignalssss/' target='_blank'><span className='transition-all duration-150 hover:scale-125'><SiLeetcode/></span></a>
            </div>
        </div>
      </div>
      <div>
        <div>About</div>
        <div className='mb-96'>Exp</div>
        <div className='mb-96'>Exp</div>
        <div className='mb-96'>Exp</div>
        <div className='mb-96'>Exp</div>
        <div className='mb-96'>Exp</div>
        <div className='mb-96'>Exp</div>
      </div>
   </div>
  )
}

export default App
