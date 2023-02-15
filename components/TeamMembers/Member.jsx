import { Card } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { FaFacebookF, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import memberImage from '../../assets/images/authorimg.jpg'
import memberBg from '../../assets/images/memberbg.png'

const Member = ({member}) => {
    return (
        <div className='group relative'>
            <Card sx={{ maxWidth: 345 }}>
                {/* <Image src={member.image} width={400} height={400} alt="" /> */}
                <Image className='w-full h-full' src={memberImage} alt="" />
                <div className='h-32 w-full absolute mt-[-128px] invisible group-hover:visible group-hover:transition-all group-hover:easy-in group-hover:duration-1000' style={{
                    backgroundImage: `url(${memberBg.src})`,
                    // width: '100%',

                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
                    <ul className='flex justify-center items-center h-full '>
                        <li className='invisible group-hover:visible text-base-100 hover:text-primary dark:hover:text-dark-primary mx-1 group-hover:border rounded-full p-2 hover:bg-base-100 '><a href="#"><FaFacebookF className='' size={25} /></a></li>
                        <li className='invisible group-hover:visible text-base-100 hover:text-primary dark:hover:text-dark-primary mx-1 group-hover:border rounded-full p-2 hover:bg-base-100 '><a href="#"> <FaTwitter className='' size={25} /></a></li>
                        <li className='invisible group-hover:visible text-base-100 hover:text-primary dark:hover:text-dark-primary mx-1 group-hover:border rounded-full p-2 hover:bg-base-100 '><a href="#"> <FaLinkedinIn className='' size={25} /> </a></li>
                        <li className='invisible group-hover:visible text-base-100 hover:text-primary dark:hover:text-dark-primary mx-1 group-hover:border rounded-full p-2 hover:bg-base-100 '><a href="#"> <FiGithub className='invisible group-hover:visible' size={25} /> </a></li>
                    </ul>
                </div>
            </Card>
            <h3 className='text-center text-lg md:text-xl lg:text-2xl uppercase font-semibold text-black dark:text-base-100 pt-4 group-hover:text-primary dark:group-hover:text-dark-primary'>{member.name}</h3>
            <p className='text-center lg:lg uppercase font-semibold text-black dark:text-base-100 pt-1'>{member.designation}</p>
        </div>
    );
};

export default Member;