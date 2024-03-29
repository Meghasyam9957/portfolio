import React from 'react'

const Contact = () => {
    return (
        <div name="Contact" className='w-full h-screen bg-gradient-to-b from-black to-yellow-600 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-#FDCB46-500'>CONTACT</p>
                    <p className='py-6'>Get in touch with me</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/f3547da1-0127-4af0-a3a8-95da3d02da57" method='POST' className='flex flex-col w-full md:w-1/2'>
                        <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                        <input type="email" name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <textarea name="message" rows="10" className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                        <button className='text-white bg-gradient-to-b from-yellow-900 to-black-100 px-6 py-4 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
