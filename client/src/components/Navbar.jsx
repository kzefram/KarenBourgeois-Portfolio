import {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import Logo from '../assets/images/DesignNoBack.png';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#153243] text-[#B4B8AB]'>
      <div>
        <img src={Logo} alt="Logo Image" style={{width: '80px'}} />
      </div>

    {/* Desktop Menu */}
        <ul className='hidden md:flex '>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>

    {/* Hamburger Menu */}
        <div onClick= {handleClick} className='md:hidden z-10'>
            {!show ? <FaBars /> : <FaTimes />}
        </div>

    {/* Mobile Menu*/}
        <ul className={!show ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#153243] flex flex-col justify-center items-center'}>
          <li className='py-5 text-xl'>Home</li>
          <li className='py-5 text-xl'>About</li>
          <li className='py-5 text-xl'>Skills</li>
          <li className='py-5 text-xl'>Portfolio</li>
          <li className='py-5 text-xl'>Contact</li>
        </ul>

    {/* Incons for Social Media */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full' href="www.linkedin.com/in/karen-bourgeois-120b5022a">
                  LinkedIn <FaLinkedin size={30}/>
                </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a className='flex justify-between items-center w-full' href="https://github.com/kzefram">
                  GitHub <FaGithub size={30}/>
                </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6ca69a]'>
                <a className='flex justify-between items-center w-full' href="#">
                  Contact <HiOutlineMail size={30}/>
                </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#627489]'>
                <a className='flex justify-between items-center w-full' href="#">
                  Resume <BsFillPersonLinesFill size={30}/>
                </a>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar