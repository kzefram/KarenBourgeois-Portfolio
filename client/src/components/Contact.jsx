const Contact = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen sm:w-auto'>
      <div
        name='contact'
        className='w-full md:h-screen bg-[#153243] text-[#B4B8AB] flex justify-center items-center p-5'
      >
        <form
          method='POST'
          action='https://getform.io/f/paqgdrra'
          className='flex flex-col max-w-[600px] w-full'
        >
          <div className='pb-8'>
            <p className='text-3xl font-bold inline border-b-4 border-[#F4F9E9]'>
              Contact Me
            </p>
            <p className='py-6'>I would love to hear from you</p>
          </div>

          <input
            required='true'
            className='bg-[#ccd6f6] text-[#153243] p-2'
            type='text'
            placeholder='Name'
            name='name'
          />
          <input
            required='true'
            className='my-4 p-2 bg-[#ccd6f6] text-[#153243]'
            type='email'
            placeholder='Email'
            name='email'
          />
          <textarea
            className='bg-[#ccd6f6] text-[#153243] p-2'
            name='message'
            rows='10'
            placeholder='Message'
          ></textarea>
          <button className='text-[#B4B8AB] group border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#F4F9E9] hover:boarder-[#F4F9E9] hover:text-[#284B63]'>
            Let&apos;s Connect
          </button>
        </form>
      </div>
      <div className='w-full sm:h-screen bg-[#153243] text-[#B4B8AB] flex-wrap justify-center items-center p-5 gap-4'>
        <p className='text-center'>
          Or schedule a meeting directly on my calendar
        </p>
        <a
          href='https://calendar.app.google/6DXoQM9iTjkZbK9K8'
          target='_blank'
          rel='noreferrer'
        >
          <button className='text-[#B4B8AB] group border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#F4F9E9] hover:boarder-[#F4F9E9] hover:text-[#284B63]'>
            Schedule a Meeting
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
