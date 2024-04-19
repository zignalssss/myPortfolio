import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

const Header = () =>{
    return(
        <div className='flex flex-col gap-2'>
              <div className='text-3xl text-priTitle font-semibold'>Wiritipon Thapkhan</div>
              <div className='text-priAccent font-semibold'>Computer Engineering Student</div>
              <div className='text-sm w-5/6'>I'm a computer engineering student at Kasetsart University with a passion for software development and related technologies. My Personal Portfolio Website showcases my past experiences and works to give you an overview of my abilities and interests.</div>
              <div className='mt-4'>
                <a href=''>
                <span className='rounded-md bg-priTitle text-black py-2 px-4'>
                  View Resume
                  <span className='ml-2'><FontAwesomeIcon  className = 'animate-bounce' icon={faArrowUpFromBracket}/></span>
                  </span>
                </a>
              </div>
        </div>
    );
}
export default Header;