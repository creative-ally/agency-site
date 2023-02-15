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
        <div>
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
            "https://www.linkedin.com/feed/",
            "https://github.com/",
            "https://stackoverflow.com/"
        ]
    },
    {
        "id": 2,
        "image": '/assets/images/authorimg.jpg',
        "name": "John Doe",
        "designation": "Software Engineer",
        "social": [
            "https://www.facebook.com/",
            "https://www.linkedin.com/feed/",
            "https://github.com/",
            "https://stackoverflow.com/"
        ]
    },
    {
        "id": 3,
        "image": '/assets/images/authorimg.jpg',
        "name": "John Doe",
        "designation": "Software Engineer",
        "social": [
            "https://www.facebook.com/",
            "https://www.linkedin.com/feed/",
            "https://github.com/",
            "https://stackoverflow.com/"
        ]
    },
    {
        "id": 4,
        "image": '/assets/images/authorimg.jpg',
        "name": "John Doe",
        "designation": "Software Engineer",
        "social": [
            "https://www.facebook.com/",
            "https://www.linkedin.com/feed/",
            "https://github.com/",
            "https://stackoverflow.com/"
        ]
    },
]