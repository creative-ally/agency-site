'use client'
import Globalbtn from '@/components/Shared/globalbtn';
import { Card } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import contactImage from '../../assets/images/contact.png'

const Contact = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            if (!res.ok) return toast.error('Successfully send message!');
            // console.log(res)
            return (
                res.json(),
                toast.custom((t) => (
                    <div
                        className={`${t.visible ? 'animate-enter' : 'animate-leave'
                            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                    >
                        <div className="flex-1 w-0 p-4">
                            <div className="flex items-start">
                                <div className="ml-3 flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                        Congarts! {data.name}.
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                       Your message send successfully.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex border-l border-gray-200">
                            <button
                                onClick={() => toast.dismiss(t.id)}
                                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )),
                reset()
            )
        });
    }
    return (
        <div className="px-5 md:px-10 lg:px-32 pt-10">
            <h2 className="text-center text-2xl md:text-3xl lg:text-5xl uppercase font-semibold text-black dark:text-base-100 pt-3 lg:pt-5">Contact <span className=" text-primary dark:text-dark-primary pt-2 lg:pt-5">Us</span></h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='flex items-center py-5 md:py-8 lg:py-16'>
                    <div class="group w-16 h-16 md:h-24 md:w-24 lg:h-32 lg:w-32 rounded-full bg-gradient-to-r from-secondary to-primary dark:from-dark-accent dark:to-dark-primary p-[2px] transition-all ease-in-out duration-500 mr-3 md:mr-4 lg:mr-5">
                        <div class="flex justify-center items-center h-full w-full rounded-full bg-base-100 dark:bg-dark-neutral group-hover:bg-gradient-to-r from-secondary to-primary dark:from-dark-accent dark:to-dark-primary">
                            <FaPhoneAlt className='text-2xl md:text-4xl lg:text-5xl text-primary dark:text-dark-primary group-hover:text-base-100 dark:group-hover:text-base-100' />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-base lg:text-2xl font-semibold text-black dark:text-base-100'>Phone</h3>
                        <p className='py-2 text-black dark:text-base-100 text-sm md:text-base'>+634 7354 7464 823</p>
                        <p className='text-black dark:text-base-100 text-sm md:text-base'>+673 5342 8355 098</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div class="group w-16 h-16 md:h-24 md:w-24 lg:h-32 lg:w-32 rounded-full bg-gradient-to-r from-secondary to-primary dark:from-dark-accent dark:to-dark-primary p-[2px] transition-all ease-in-out duration-500 mr-3 md:mr-4 lg:mr-5">
                        <div class="flex justify-center items-center h-full w-full rounded-full bg-base-100 dark:bg-dark-neutral group-hover:bg-gradient-to-r from-secondary to-primary dark:from-dark-accent dark:to-dark-primary">
                            <FaEnvelope className='text-2xl md:text-4xl lg:text-5xl text-primary dark:text-dark-primary group-hover:text-base-100 dark:group-hover:text-base-100' />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-base lg:text-2xl font-semibold text-black dark:text-base-100'>Email</h3>
                        <p className='py-2 text-black dark:text-base-100 text-sm md:text-base'>info@yourdomain.com</p>
                        <p className='text-black dark:text-base-100 text-sm md:text-base'>company@domain.com</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div class="group w-16 h-16 md:h-24 md:w-24 lg:h-32 lg:w-32 rounded-full bg-gradient-to-r from-secondary to-primary dark:from-dark-accent dark:to-dark-primary p-[2px] transition-all ease-in-out duration-500 mr-3 md:mr-4 lg:mr-5">
                        <div class="flex justify-center items-center h-full w-full rounded-full bg-base-100 dark:bg-dark-neutral group-hover:bg-gradient-to-r from-secondary to-primary dark:from-dark-accent dark:to-dark-primary">
                            <MdLocationOn className='text-2xl md:text-4xl lg:text-5xl text-primary dark:text-dark-primary group-hover:text-base-100 dark:group-hover:text-base-100' />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-base lg:text-2xl font-semibold text-black dark:text-base-100'>Location</h3>
                        <p className='py-2 text-black dark:text-base-100 text-sm md:text-base'>136 McKinley Avenue Parker,<br />Colorado, USA-234</p>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 gap-5 py-5 md:py-8 lg:py-16'>
                <div>
                    <Card className='bg-slate-200 dark:bg-slate-700'>
                        <form onSubmit={handleSubmit(onSubmit)} className='text-neutral px-5 md:px-10 lg:px-16 py-5 md:py-8 lg:py-12'>
                            <div className='mb-2'>
                                <label className='block text-black dark:text-base-100' htmlFor="Your name">Your name</label>
                                <input {...register('name', { required: 'Name is required.' })} className='focus:outline-none bg-slate-300 dark:bg-dark-neutral text-black dark:text-base-100 pl-2 py-2 w-full' type="text" name="name" id="name" />
                                {errors.name && <label className='text-sm text-rose-500' htmlFor="">{errors.name?.message}</label>}
                            </div>
                            <div className='mb-2'>
                                <label className='block text-black dark:text-base-100' htmlFor="Your email">Your email</label>
                                <input {...register('email', { required: 'Email is required.' })} className='focus:outline-none bg-slate-300 dark:bg-dark-neutral text-black dark:text-base-100 pl-2 py-2 w-full' type="email" name="email" id="name" />
                                {errors.email && <label className='text-sm text-rose-500' htmlFor="">{errors.email?.message}</label>}
                            </div>
                            <div className='mb-2'>
                                <label className='block text-black dark:text-base-100' htmlFor="Your subject">Your subject</label>
                                <input {...register('subject', { required: 'Subject is required.' })} className='focus:outline-none bg-slate-300 dark:bg-dark-neutral text-black dark:text-base-100 pl-2 py-2 w-full' type="text" name="subject" id="name" />
                                {errors.subject && <label className='text-sm text-rose-500' htmlFor="">{errors.subject?.message}</label>}
                            </div>
                            <div className='mb-2'>
                                <label className='block text-black dark:text-base-100' htmlFor="Your topics">Your topics</label>
                                <textarea {...register('message', { required: 'Message is required.' })} className='focus:outline-none bg-slate-300 dark:bg-dark-neutral text-black dark:text-base-100 pl-2 py-2 w-full' type="text" name="message" id="name" />
                                {errors.message && <label className='text-sm text-rose-500' htmlFor="">{errors.message?.message}</label>}
                            </div>
                            <Globalbtn><input className='cursor-pointer' type="submit" value="Submit" /> </Globalbtn>
                            
                        </form>
                    </Card>
                </div>
                <div>
                    <Image className='w-full h-full' src={contactImage} alt='' />
                </div>
            </div>


        </div>
    );
};

export default Contact;
