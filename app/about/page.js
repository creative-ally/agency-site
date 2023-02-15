'use client'
import Globalbtn from "@/components/Shared/globalbtn";
import Members from "@/components/TeamMembers/Members";
import Image from "next/image";
import aboutImage from '../../assets/images/6.png'

export default function Page() {
  return (
    <div className="p-5 md:p-10 lg:p-32 ">
      <div className="flex justify-between items-center">
        <div className="w-7/12 pr-5 lg:pr-10">
          <p className="text-lg md:text-xl lg:text-2xl uppercase font-semibold text-primary dark:text-dark-primary">Why Choose Us</p>
          <h3 className="text-2xl md:text-3xl lg:text-5xl uppercase font-semibold text-black dark:text-base-100 pt-3 lg:pt-5">GREAT Solutions For</h3>
          <h3 className="text-2xl md:text-3xl lg:text-5xl uppercase font-semibold text-black dark:text-base-100 pt-3 lg:pt-5">Your <span className="text-2xl md:text-3xl lg:text-5xl uppercase font-semibold text-primary dark:text-dark-primary pt-2 lg:pt-5"> Business.</span></h3>
          <p className="text-black lg:text-lg dark:text-base-100 mt-3 md:mt-5 lg:mt-7">There are many variations of
            passages of Lorem Ipsum available, the majority have suffered alteration
            in some form, by injected humour. randomised words which do not look even slightly believable. It uses a
            dictionary of over 200 Latin words, combined with a handful of models.</p>
          <div className="mb-3">

          </div>
          <Globalbtn>Read More</Globalbtn>
        </div>
        <div className="w-5/12 pl-5 lg:pl-10">
          <Image className="w-full h-full" src={aboutImage} alt='' />
        </div>
      </div>
      <div>
        <Members />
      </div>
    </div>
  );
}
