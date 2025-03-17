import JavaScript from "../assets/javascript.png";
import MongoDB from "../assets/mongo.png";
import NodeJS from "../assets/node.png";
import ReactJS from "../assets/react.png";
import GitHub from "../assets/github.png";
import MySQL from "../assets/128px-Database-mysql.png";
import Tailwind from "../assets/tailwind.png";
//import Express from '../assets/express.png';
import ExpressJS from "../assets/expressjs.png";

const Skills = () => {
  return (
    <div
      name='skills'
      className='md:w-full md:h-screen bg-[#153243] text-[#B4B8AB] sm:mt-200'
    >
      <div className='max-w-[1000px] mx-auto p-8 flex flex-col justify-center w-full h-full '>
        <div>
          <p className='text-3xl font-bold inline border-b-4 border-[#F4F9E9] sm:mt-20'>
            Skills
          </p>
          <p className='py-6'>These are the technologies I have worked with.</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#153243] hover:scale-110 duration-500'>
            <img
              className='w-20 max-auto '
              src={JavaScript}
              alt='JavaScript Logo'
            />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#153243] hover:scale-110 duration-500'>
            <img className='w-20 max-auto ' src={ReactJS} alt='ReactJS Logo' />
            <p className='my-4'>ReactJS</p>
          </div>
          <div className='shadow-md shadow-[#153243] hover:scale-110 duration-500'>
            <img className='w-20 max-auto ' src={MongoDB} alt='MongoDB Logo' />
            <p className='my-4'>MongoDB</p>
          </div>
          <div className='shadow-md shadow-[#153243] hover:scale-110 duration-500'>
            <img className='w-20 max-auto ' src={GitHub} alt='GitHub Logo' />
            <p className='my-4'>GitHub</p>
          </div>
          <div className='shadow-md shadow-[#153243] hover:scale-110 duration-500'>
            <img className='w-20 max-auto ' src={NodeJS} alt='NodeJS Logo' />
            <p className='my-4'>NodeJS</p>
          </div>
          <div className='shadow-md shadow-[#153243] hover:scale-110 duration-500'>
            <img className='w-20 max-auto ' src={MySQL} alt='MySQL Logo' />
            <p className='my-4'>MySQL</p>
          </div>
          <div className='shadow-md shadow-[#153243] hover:scale-110 duration-500'>
            <img
              className='w-20 max-auto '
              src={Tailwind}
              alt='Tailwind Logo'
            />
            <p className='my-4'>Tailwind</p>
          </div>
          <div className='shadow-md shadow-[#153243] hover:scale-110 duration-500'>
            <img
              className='w-20 max-auto '
              src={ExpressJS}
              alt='ExpressJS Logo'
            />
            <p className='my-4'>ExpressJS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
