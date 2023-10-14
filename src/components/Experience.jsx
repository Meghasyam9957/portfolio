import React from 'react';
import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import js from "../assets/javascript.png";
import reactimg from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import php from "../assets/php.jpeg";
import cpp from "../assets/cpp.png";

const Experience = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'border-yellow-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'border-green-500'
        },
        {
            id: 3,
            src: js,
            title: 'JavaScript',
            style: 'border-blue-500'
        },
        {
            id: 4,
            src: reactimg,
            title: 'React',
            style: 'border-blue-600'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind CSS',
            style: 'border-indigo-500'
        },
        {
            id: 6,
            src: github,
            title: 'GitHub',
            style: 'border-gray-500'
        },
        {
            id: 7,
            src: php,
            title: 'PHP',
            style: 'border-pink-500'
        },
        {
            id: 8,
            src: cpp,
            title: 'C++',
            style: 'border-red-500'
        }
    ];

    return (
        <div id="Experience" className="bg-gradient-to-b from-yellow-800 to-black w-full min-h-screen">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-semibold border-b-4 border-gray-500 p-2 inline max-sm:text-2xl max-sm:p-0">Experience</p>
                    <p className="py-6 max-sm:py-1">Technologies I'm familiar with</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-0">
                    {techs.map(({ id, src, title, style }) => (
                        <div key={id} className={`border hover:scale-105 duration-500 py-4 rounded-lg ${style}`}>
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4 text-xl font-medium">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;

