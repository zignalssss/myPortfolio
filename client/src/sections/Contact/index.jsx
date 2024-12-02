import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";

const Contact = () =>{
    return(
        <div className='flex items-end gap-4 text-2xl '>
                {/* <a href='https://github.com/zignalssss' target='_blank'></a>
            <a href='https://www.instagram.com/emlnbmfsc3nzdqo_/' target='_blank'></a>
            <a href='https://www.linkedin.com/in/wiritipon-thapkhan-11452b2a8/' target='_blank'></a>
            <a href='https://leetcode.com/zignalssss/' target='_blank'></a> */}
            <a className=" transition-all duration-150 hover:text-priTitle hover:scale-125" href="https://github.com/zignalssss" target="_blank"><FaGithub/></a>
            <span className='transition-all duration-150 hover:text-priTitle hover:scale-125'><FaInstagram/></span>
            <span className='transition-all duration-150 hover:text-priTitle hover:scale-125'><FaLinkedin/></span>
            <span className='transition-all duration-150 hover:text-priTitle hover:scale-125'><SiLeetcode/></span>
            <span className='transition-all duration-150 hover:text-priTitle hover:scale-125'>< SiCodeforces/></span>
        </div>                   
    )
}
export default Contact;