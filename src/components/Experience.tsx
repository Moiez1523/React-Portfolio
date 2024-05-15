
import {Element} from "react-scroll"
import Tick from "../assets/icons8-tick-30.png"

function Experience() {
  return (
    <>
    <Element name="experience">
    <div className='w-full h-screen font-body py-32'>

        {/* My Experience */}
        <div className='text-center'>
        <p className='font-light text-gray-600 text-xs pb-2'>Explore My</p>
        <h1 className='font-medium text-4xl'>Experience</h1>
        </div>
        
        {/* Card */}
        <div className="w-full flex">


        {/* FRONTEND */}
        <div className="border border-slate-400 rounded-2xl w-[500px] mx-16 mt-8 py-8 px-9">
                {/* <img className="block m-auto pb-2 w-6" src={Tick} alt="" /> */}
                <p className="font-semibold text-center">Frontend Development</p>


                {/* ITEMS PART ONE*/}
                <div className="flex py-5">
                {/* Item1 */}
                <div className="flex w-[200px]">
                    <div className="pl-5">
                    <img className="w-5" src={Tick} alt="" />
                    </div>
                    <div className="pl-3">
                    <p className="font-bold inline">HTML</p>
                    <p className="font-light">Advanced</p>
                    </div>
                </div>

                {/* Item2 */}
                <div className="flex w-[200px] ml-10">
                    <div className="pl-5">
                    <img className="w-5" src={Tick} alt="" />
                    </div>
                    <div className="pl-3">
                    <p className="font-bold inline">CSS</p>
                    <p className="font-light">Intermediate</p>
                    </div>
                </div>
                </div>



            {/* ITEMS PART TWO*/}
            <div className="flex py-5">
                {/* Item1 */}
                <div className="flex w-[200px]">
                    <div className="pl-5">
                    <img className="w-5" src={Tick} alt="" />
                    </div>
                    <div className="pl-3">
                    <p className="font-bold inline">JavaScript</p>
                    <p className="font-light">Intermediate</p>
                    </div>
                </div>

                {/* Item2 */}
                <div className="flex w-[200px] ml-10">
                    <div className="pl-5">
                    <img className="w-5" src={Tick} alt="" />
                    </div>
                    <div className="pl-3">
                    <p className="font-bold inline">React</p>
                    <p className="font-light">Intermediate</p>
                    </div>
                </div>
                </div>
            
            
            {/* ITEMS PART THREE*/}
            <div className="flex py-5">
                {/* Item1 */}
                <div className="flex w-[200px]">
                    <div className="pl-5">
                    <img className="w-5" src={Tick} alt="" />
                    </div>
                    <div className="pl-3">
                    <p className="font-bold inline">Tailwind CSS</p>
                    <p className="font-light">Intermediate</p>
                    </div>
                </div>

                {/* Item2 */}
                <div className="flex w-[200px] ml-10">
                    <div className="pl-5">
                    <img className="w-5" src={Tick} alt="" />
                    </div>
                    <div className="pl-3">
                    <p className="font-bold inline">TypeScript</p>
                    <p className="font-light">Intermediate</p>
                    </div>
                </div>
                </div>

            </div>

        </div>
    
    </div>
    </Element>
    </>
  )
}

export default Experience