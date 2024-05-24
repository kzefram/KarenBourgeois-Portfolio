

const About = () => {
  return (
    <div name='about' className="w-full h-screen bg-[#153243] text-[#B4B8AB]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
                <p className="text-4xl font-bold inline border-b-4 border-[#F4F9E9]">About</p>
            </div>
            <div></div>
            </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-6">
            <div className="sm:text-right text-3xl font-bold">
                <p>Hi, I&apos;m Karen, lovely to meet you. Feel free to take a look around.</p>
                
            </div>
            <div>
              <p>I have been feeding the curiosity of my daughter part-time since she was three, and that brings me to
                how I became interested in coding and software testing. She had approached me with a passing
                interest in coding. At the time, I didn&apos;t know much about it at all and needed to learn the basics. I
                read many books, and within a month, I was online in classes and watched YouTube. </p>
              
              <p>I went with Mike Dane for most of my classes and MIT for the Scratch training; I thought it would be fun. As
                I was learning the HTML and CSS to teach her, and eventually a few more, I learned about animations and making things happen. &quot;OOHH! That&apos;s cool! What else can I learn?&quot; I then
                moved on to New Brunswick Community College for Manual Testing and UNB for a Full-Stack
                program.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
