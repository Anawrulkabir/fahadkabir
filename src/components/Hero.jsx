import { FaArrowDown } from 'react-icons/fa'
import { IoMdArrowDown } from 'react-icons/io'
const Hero = () => {
  return (
    <div className="w-full bg-black  min-h-[calc(100vh-98px)] px-[44px] py-[100px]">
      <div>
        <div className="flex gap-52">
          <div className="flex items-start ">
            <div className="flex justify-center items-center text-white text-xs leading-[26px] gap-1">
              01//04 - SCROLL
              <span>
                <FaArrowDown />
              </span>
            </div>
          </div>
          <div className="">
            <p className="text-[107px] font-semibold leading-[80px] text-white">
              MULTI-
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <p className="text-[107px] font-semibold leading-[80px] text-white ">
            DISCPLINARY
          </p>
        </div>
        <div className="flex justify-center mt-3 ml-60 relative">
          <div className="absolute top-[44px] left-[45px] ">
            <p className="-rotate-90 text-white text-[12px] font-normal leading-4 tracking-[1px]">
              FUTURE
            </p>
          </div>
          <div>
            <p className="text-[107px] font-semibold leading-[80px] text-white ">
              ENGINEER
            </p>
          </div>
          <div className="text-[12px] font-normal leading-4 text-white ml-4">
            <div className="text-right">
              <p>CREATIVE THINKING AND PROBLEM</p>
            </div>
            <div>
              <p>SOLVING ARE WHERE MY MIND WANDERS,</p>
            </div>
            <div>
              <p>USING MY KNOWLEDGE AND PASSION FOR</p>
            </div>
            <div>
              <p>PROGRAMMING AS MY MEDIUM.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-16">
          <div className="h-[83.33px] w-[83.33px] border rounded-full flex items-center justify-center text-[36px] text-white font-thin">
            <IoMdArrowDown />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
