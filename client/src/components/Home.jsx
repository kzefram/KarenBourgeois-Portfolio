import { HiArrowNarrowRight } from "react-icons/hi"

const Home = () => {
  return (
    <div name='home' className="w-full h-screen bg-[#153243] text-[#B4B8AB]">

        {/* Hero Wording */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className="">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-white">Karen Bourgeois</h1>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#d4d5d2]">Full-Stack Developer</h2>
            <p className="text-[#d4d5d2] py-4 max-w-[700px]">
                I am a Full-Stack Developer specializing in Front-End development. I am currently persuing AWS Certifications, Python and Java programing lanugages, robotics and AI.</p>
            <div>
            <button className="text-[#B4B8AB] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#F4F9E9] hover:boarder-[#F4F9E9] hover:text-[#284B63]">
                View Work
                <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3"/>
                </span>
            </button>
        </div>
        </div>
        
    </div>
  )
}

export default Home
