import {Link} from "react-scroll"
import {Element} from "react-scroll"
import Email from "../assets/icons8-email-64.png"
import Linkden from "../assets/linkedin_1384014.png"

function Contact() {
  return (
    <>
    <Element name="contact">
    <div className="w-full h-screen py-32">
        {/* Contact Heading section */}
        <div className='text-center'>
        <p className='font-light text-gray-600 text-xs pb-2'>Get In Touch</p>
        <h1 className='font-medium text-4xl'>Contact Me</h1>
        </div>

        <div className="flex justify-center">
        <div className="border border-black rounded-full w-96 flex justify-center items-center py-9 bg-slate-50 my-10">
        <div className="flex">
            <img className="w-5" src={Email} alt="" />
            <p className="pl-2">moiezbilal1523@gmail.com</p>
        </div>
        <div className="flex ml-4">
            <img className="w-5" src={Linkden} alt="" />
            <p className="pl-2">Linkden</p>
        </div>        
        </div>
        </div>

    </div>
    
    <div>
        {/* Navigation */}
        <ul className='w-full flex gap-10 text-xl justify-center items-center'>
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

        <p className="py-10 text-center">Copywrite @ 2023 Moiez Bilal. All rights reserved</p>
    </div>
    </Element>
    </>

  )
}

export default Contact