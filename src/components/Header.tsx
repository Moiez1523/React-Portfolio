

import {Link} from "react-scroll"
import ProfileImage from '../assets/Profile.jpg';
import linkden from "../assets/linkedin_1384014.png";
import github from "../assets/github_733609.png";

function Header() {


    return (
      <>
      <div className='w-full h-screen bg-white text-black font-body'>
        
        
        {/* LOGO */}
        <div className='flex py-14 px-20 items-center'>
        <h1 className='text-3xl w-1/2 text-start items-center'>Moiez Bilal</h1>
        {/* Navigation */}
        <ul className='w-1/2 flex gap-10 text-xl justify-end items-center'>
          <li className='cursor-pointer hover:border-b-2 hover:border-black hover:duration-75'>
            <Link to="about" smooth = {true} offset = {100} duration={500} >About</Link>
          </li>
          <li className='cursor-pointer hover:border-b-2 hover:border-black hover:duration-75'>
            <Link to="experience" smooth = {true} offset = {100} duration={500} >Experience</Link>
          </li>
          <li className='cursor-pointer hover:border-b-2 hover:border-black hover:duration-75'>
            <Link to="project" smooth = {true} offset = {100} duration={500} >Project</Link>
          </li>
          <li className='cursor-pointer hover:border-b-2 hover:border-black hover:duration-75'>
          <Link to="contact" smooth = {true} offset = {100} duration={500} >Contact</Link>
          </li>
        </ul>
        </div>
    
    {/* Content */}
        <div className="flex pt-16">
            
            {/* img */}
            <div className="flex w-1/2 justify-end items-center px-14">
            <img className="w-80 h-80 object-cover rounded-full" src={ProfileImage} alt="" /> 
            </div>

            {/* content */}
            <div className="flex w-1/2  text-center py-16">
              <div className='px-10'>
                <p className='font-semibold text-gray-600 text-sm pb-2'>Hello, I'm</p>
                <h1 className='font-medium text-6xl pb-2'>Moiez Bilal</h1>
                <h1 className=' text-gray-600 text-xl'>Frontend Developer</h1>

                <div className='py-5'>
                <button className='border border-black py-1 px-4 rounded-full font-light mx-2 hover:bg-slate-900 hover:text-slate-100 hover:duration-700'>Download CV</button>
                <button className='bg-slate-900 text-slate-100 border border-black py-1 px-5 rounded-full font-light hover:bg-white hover:text-black hover:duration-700'>Contact Info</button>
                {/* add github and linkden icons */}
                </div>
                <img className='w-8 inline-block mx-2' src={linkden} alt="" />
                <img className='w-8 inline-block mx-2' src={github} alt="" />
              </div>  
            </div>
        </div>
      
      
      </div>
      </>
    )
  }
  
  export default Header