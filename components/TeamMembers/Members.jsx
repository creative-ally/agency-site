import { Card } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { FaFacebookF, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import memberImage from '../../assets/images/authorimg.jpg'
import memberBg from '../../assets/images/memberbg.png'
import Member from './Member';

const Members = () => {
    return (
        <div className=''>
            <div className='text-center pb-5 md:pb-7 lg:pb-10 '>
                <p className="text-lg md:text-xl lg:text-2xl uppercase font-semibold text-primary dark:text-dark-primary">Our skilled team</p>
                <h2 className="text-2xl md:text-3xl lg:text-5xl uppercase font-semibold text-black dark:text-base-100 pt-3 lg:pt-5">Meet the <span className='text-primary dark:text-dark-primary'>leaders</span></h2>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    members.map((member, i) =>
                        <div key={i}>
                            <Member member={member} />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Members;

const members = [
    {
        "id": 1,
        "image": '/assets/images/authorimg.jpg',
        "name": "John Doe",
        "designation": "Software Engineer",
        "social": [
            "https://www.facebook.com/",
            "https://twitter.com/",
            "https://www.linkedin.com/",
            "https://github.com/"
        ]
    },
    {
        "id": 2,
        "image": '/assets/images/authorimg.jpg',
        "name": "John Doe",
        "designation": "Software Engineer",
        "social": [
            "https://www.facebook.com/",
            "https://twitter.com/",
            "https://www.linkedin.com/",
            "https://github.com/"
        ]
    },
    {
        "id": 3,
        "image": '/assets/images/authorimg.jpg',
        "name": "John Doe",
        "designation": "Software Engineer",
        "social": [
            "https://www.facebook.com/",
            "https://twitter.com/",
            "https://www.linkedin.com/",
            "https://github.com/"
        ]
    },
    {
        "id": 4,
        "image": '/assets/images/authorimg.jpg',
        "name": "John Doe",
        "designation": "Software Engineer",
        "social": [
            "https://www.facebook.com/",
            "https://twitter.com/",
            "https://www.linkedin.com/",
            "https://github.com/"
        ]
    },
]