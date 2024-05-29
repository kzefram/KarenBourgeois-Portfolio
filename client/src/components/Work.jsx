import Bodesing from '../assets/images/bodesingevents.png';
import DailySched from '../assets/images/daily-schedule.png';
import Readme from '../assets/images/finishedREADME.png';
import Landing from '../assets/images/LandingPagecrop.png';
import Legal from '../assets/images/LegalAge100.png';
import NoteTaker from '../assets/images/notetaker.png';
// import PixBox from '../assets/images/PixBoxPicHome.png';
// import PreWork from '../assets/images/lgscreensite.png';


const Work = () => {
  return (
    <div name='work' className="w-full md:h-screen bg-[#153243] text-[#B4B8AB]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-3xl font-bold inline border-b-4 border-[#F4F9E9]">Work</p>
            <p className="py-6">Check out some of my work.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div style={{backgroundImage: `url(${DailySched})`}} className="shadow-lg shadow-[#153243] group container rounded-md flex justify-center items-center mx-auto content-div">
                <div className="opacity-0 group-hover:opacity-100" >
                    <span className='text-2xl font-bold text-[#F4F9E9] tracking-wider'>
                        Daily Schedule
                        JavaScript Application
                    </span>
                    <div className='pt-8 text-center text-[#284B63]'>
                    <a href="https://kzefram.github.io/Daily-Schedule/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEF0EB] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/kzefram/Daily-Schedule">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEF0EB] font-bold text-lg'>Code</button>
                        </a>

                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${Bodesing})`}} className="shadow-lg shadow-[#153243] group container rounded-md flex justify-center items-center mx-auto content-div">
                <div className="opacity-0 group-hover:opacity-100" >
                    <span className='text-2xl font-bold text-[#F4F9E9] tracking-wider'>
                        Bodesing Events
                        JavaScript Application
                    </span>
                    <div className='pt-8 text-center text-[#284B63]'>
                    <a href="https://kzefram.github.io/BODESING-Events/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEF0EB] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/kzefram/BODESING-Events">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEF0EB] font-bold text-lg'>Code</button>
                        </a>

                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${Readme})`}} className="shadow-lg shadow-[#153243] group container rounded-md flex justify-center items-center mx-auto content-div">
                <div className="opacity-0 group-hover:opacity-100" >
                    <span className='text-2xl font-bold text-[#F4F9E9] tracking-wider'>
                        README Generator
                        JavaScript Application
                    </span>
                    <div className='pt-8 text-center text-[#284B63]'>
                    <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEF0EB] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/kzefram/ProfessionalREADMEGenerator">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEF0EB] font-bold text-lg'>Code</button>
                        </a>

                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${Landing})`}} className="shadow-lg shadow-[#153243] group container rounded-md flex justify-center items-center mx-auto content-div">
                <div className="opacity-0 group-hover:opacity-100" >
                    <span className='text-2xl font-bold text-[#F4F9E9] tracking-wider'>
                        NoteMindAI
                        React Application
                    </span>
                    <div className='pt-8 text-center text-[#284B63]'>
                    <a href=" https://notemindai.onrender.com">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEF0EB] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/kzefram/NoteMindAI-Karen">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEF0EB] font-bold text-lg'>Code</button>
                        </a>

                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${Legal})`}} className="shadow-lg shadow-[#153243] group container rounded-md flex justify-center items-center mx-auto content-div">
                <div className="opacity-0 group-hover:opacity-100" >
                    <span className='text-2xl font-bold text-[#F4F9E9] tracking-wider'>
                        Legal Age
                        C# Application
                    </span>
                    <div className='pt-8 text-center text-[#284B63]'>
                    <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEF0EB] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/kzefram/LegalAge">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEF0EB] font-bold text-lg'>Code</button>
                        </a>

                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${NoteTaker})`}} className="shadow-lg shadow-[#153243] group container rounded-md flex justify-center items-center mx-auto content-div">
                <div className="opacity-0 group-hover:opacity-100" >
                    <span className='text-2xl font-bold text-[#F4F9E9] tracking-wider'>
                        Note Taker
                        JavaScript Application
                    </span>
                    <div className='pt-8 text-center text-[#284B63]'>
                    <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEF0EB] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/kzefram/Simple-Notes">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEF0EB] font-bold text-lg'>Code</button>
                        </a>

                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Work
