import {Element} from "react-scroll"
import Image from "../assets/Profile.jpg"
import Badge from "../assets/icons8-badge-50.png"
import Edu from "../assets/icons8-education-64.png"

function About() {

  return (
    <>
    <Element name="about">
    <div className='w-full h-screen font-body py-32'>
        {/* About Heading */}
        <div className='text-center'>
        <p className='font-light text-gray-600 text-xs pb-2'>Get To Know More</p>
        <h1 className='font-medium text-4xl pb-2'>About Me</h1>
        </div>

        {/* Content*/}
        <div className="flex w-full py-14 pr-16">

        {/* image */}
        <div className='w-1/3 flex justify-end items-center pr-14'>
            <img className="w-60 object-cover rounded-3xl" src={Image} alt="" />
        </div>

        {/* Card and text Container*/}
        <div className="w-2/3">
          {/* Card1 */}
          <div className="flex ">
            <div className="border border-slate-400 rounded-2xl w-96 mx-6 mt-8 text-center py-8 ">
                <img className="block m-auto pb-2 w-6" src={Badge} alt="" />
                <p className="font-semibold">Experience</p>
                <p className="font-light">2+ years</p>
                <p className="font-light">Frontend Development</p>
            </div>
            {/* Card2 */}
            <div className="border border-slate-400 rounded-2xl w-96 mt-8 text-center py-8 ">
                <img className="block m-auto pb-2 w-6" src={Edu} alt="" />
                <p className="font-semibold">Education</p>
                <p className="font-light">ICS</p>
                <p className="font-light">B.S Software Engineering</p>
            </div>
            </div>
            <p className="py-8 mx-6 font-light text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eius voluptatibus voluptatem <br /> consequatur distinctio, perferendis natus debitis totam! Quaerat debitis in numquam <br /> sed dolorem nihil recusandae assumenda sequi deleniti delectus!</p>
        </div>
        
        </div>

    </div>
    </Element>
    </>
  )
}

export default About