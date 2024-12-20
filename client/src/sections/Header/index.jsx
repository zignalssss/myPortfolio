import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../contents/header';
const Header = () =>{
    return(
        <div className='flex flex-col gap-2'>
       
              <div className='text-3xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient '>{data.name}</div>
              <div className='text-priAccent font-semibold'>{data.title}</div>
              <div className='text-sm w-5/6'>{data.caption}</div>
              <div className='mt-4'>
                <a target="_blank" href='https://firebasestorage.googleapis.com/v0/b/portfolio-image-storage-e7a58.appspot.com/o/wiritiponResume.pdf?alt=media&token=8e5bc52e-9102-4e2f-89a8-e15e9538774c'>
                <span className='rounded-md bg-priTitle text-black py-2 px-4'>
                  {data.btnText}
                  <span className='ml-2'><FontAwesomeIcon  className = 'animate-bounce' icon={faArrowUpFromBracket}/></span>
                  </span>
                </a>
              </div>
        </div>
    );
}
export default Header;
