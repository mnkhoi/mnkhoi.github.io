import React from 'react'

const About = () => {
  return (
    <div className='w-full h-screen box-border px-60 bg-slate-50 flex flex-col'>
        <div className='flex justify-center content-middle items-center h-1/6'>
           <span className='text-4xl font-black'>
                about
            </span>
        </div>
        <div 
            className='w-full h-5/6 px-52 pb-52 flex '
        >
            <div className="aboutInfo w-3/5 h-full flex flex-col justify-center p-5 text-lg">
                Hi! &#x1f44b; 
                <br/> <br/>
                I&apos;m Khoi, a second year computer student specialist at the University of Toronto and a Technical Associate &#x1f4bb; at the Mathematical and Computer Science Society.
                <br/> <br/>
                My current interests are back-end developement &#x1f5c4;, computer systems &#x1f5a5; and cyber security &#x1f513;. Some technology I&apos;ve worked with is Node.js, SQL, and front-end frameworks (React/Redux, Vue).
                <br/> <br/>
                Outside of tech, I love to rock climb &#x1f9d7;, mostly bouldering. I also enjoy watching basketball &#x1f3c0;, working out &#x1f3cb; and jiu jitsu &#x1f94b;. 
            </div>
            <div className="headShot w-2/5 h-3/4 bg-blue-100">
                Somehting is here
            </div>
        </div>
    </div>
    
  )
}

export default About