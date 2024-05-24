

const Contact = () => {
  return (
    <div name='contact' className="w-full md:h-screen bg-[#153243] text-[#B4B8AB] flex justify-center items-center p-4">
        <form method='POST' action="https://getform.io/f/paqgdrra" className='flex flex-col max-w-[600px] w-full'>
            
            <div className="pb-8">
                <p className="text-3xl font-bold inline border-b-4 border-[#F4F9E9]">Contact Me</p>
                <p className="py-6">I would love to hear from you</p>
            </div>
            
            <input className='bg-[#ccd6f6] text-[#153243] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] text-[#153243]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] text-[#153243] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-[#B4B8AB] group border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#F4F9E9] hover:boarder-[#F4F9E9] hover:text-[#284B63]'>Let&apos;s Connect</button>
        </form>
    </div>
  )
}

export default Contact
