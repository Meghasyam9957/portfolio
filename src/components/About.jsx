import React from 'react'

const About = () => {
    return (
        <div name="About" className='w-full h-screen bg-gradient-to-b from-yellow-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20 max-sm:mt-10'>
                Hello, I'm Kakarla Meghasyam, currently pursuing my BTech degree at VIT-AP in the field of Computer Science and Engineering. I am deeply passionate about coding and problem-solving, and I have discovered a particular interest in web development. I have a foundation in front-end web technologies, including HTML, CSS, JavaScript, Tailwind, as well as back-end technologies such as PHP and MySQL. I'm also expanding my skills in the MERN (MongoDB, Express, React, Node.js) stack, which I am currently learning.
                </p>
                <br />
                <p>In terms of my academic achievements, I have maintained a solid 8.5 CGPA throughout my first two years of engineering. Additionally, I hold the position of Senior Manager in the Business Development department of AIESEC in Amaravati, and I have been an active member of the ACM club team for the past two years.</p>
                
            </div>
        </div>
    )
}

export default About
