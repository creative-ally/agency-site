import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Blogimg from '../../assets/images/blogImg.png'
import Authorimage from '../../assets/images/authorimg.jpg'
const Posts = [
    {
        id: 1,
        title: "Your most unhappy customers are your greatest source of learning",
        subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        category: "Business, Travel",
        img: Blogimg,
        description: `
        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
        text by the name of Lorem Ipsum decided to leave for the far World of Grammar.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, qui ea assumenda illo quidem 
        consequatur ducimus cum aliquam est minus provident placeat, nesciunt vitae. 
        Et aperiam magni non quasi est asperiores nobis atque suscipit incidunt dignissimos! Harum et sunt ea.

        When she reached the first hills of the Italic Mountains, she had a last view back on the skyline 
        of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, 
        the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.

        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

        A small river named Duden flows by their place and supplies it with the necessary regelialia. 
        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
        `,
        published: "Jun 3,  2022",
        author: {
            name: "Flying High",
            image: Authorimage,
            designation: "CEO and Founder"
        }
    },
    {
        id: 2,
        title: "Your most unhappy customers are your greatest source of learning",
        subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        category: "Business, Travel",
        img: Blogimg,
        description: `
        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
        text by the name of Lorem Ipsum decided to leave for the far World of Grammar.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, qui ea assumenda illo quidem 
        consequatur ducimus cum aliquam est minus provident placeat, nesciunt vitae. 
        Et aperiam magni non quasi est asperiores nobis atque suscipit incidunt dignissimos! Harum et sunt ea.

        When she reached the first hills of the Italic Mountains, she had a last view back on the skyline 
        of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, 
        the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.

        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

        A small river named Duden flows by their place and supplies it with the necessary regelialia. 
        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
        `,
        published: "Jun 5,  2022",
        author: {
            name: "Flying High",
            image: Authorimage,
            designation: "CEO and Founder"
        }
    },
    {
        id: 3,
        title: "Your most unhappy customers are your greatest source of learning",
        subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        category: "Business, Travel",
        img: Blogimg,
        description: `
        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
        text by the name of Lorem Ipsum decided to leave for the far World of Grammar.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, qui ea assumenda illo quidem 
        consequatur ducimus cum aliquam est minus provident placeat, nesciunt vitae. 
        Et aperiam magni non quasi est asperiores nobis atque suscipit incidunt dignissimos! Harum et sunt ea.

        When she reached the first hills of the Italic Mountains, she had a last view back on the skyline 
        of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, 
        the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.

        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

        A small river named Duden flows by their place and supplies it with the necessary regelialia. 
        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
        `,
        published: "Jun 7,  2022",
        author: {
            name: "Flying High",
            image: Authorimage,
            designation: "CEO and Founder"
        }
    },
    {
        id: 4,
        title: "Your most unhappy customers are your greatest source of learning",
        subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        category: "Business, Travel",
        img: Blogimg,
        description: `
        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
        text by the name of Lorem Ipsum decided to leave for the far World of Grammar.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, qui ea assumenda illo quidem 
        consequatur ducimus cum aliquam est minus provident placeat, nesciunt vitae. 
        Et aperiam magni non quasi est asperiores nobis atque suscipit incidunt dignissimos! Harum et sunt ea.

        When she reached the first hills of the Italic Mountains, she had a last view back on the skyline 
        of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, 
        the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.

        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

        A small river named Duden flows by their place and supplies it with the necessary regelialia. 
        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
        `,
        published: "Jun 10,  2022",
        author: {
            name: "Flying High",
            image: Authorimage,
            designation: "CEO and Founder"
        }
    },
    {
        id: 5,
        title: "Your most unhappy customers are your greatest source of learning",
        subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        category: "Business, Travel",
        img: Blogimg,
        description: `
        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
        text by the name of Lorem Ipsum decided to leave for the far World of Grammar.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, qui ea assumenda illo quidem 
        consequatur ducimus cum aliquam est minus provident placeat, nesciunt vitae. 
        Et aperiam magni non quasi est asperiores nobis atque suscipit incidunt dignissimos! Harum et sunt ea.

        When she reached the first hills of the Italic Mountains, she had a last view back on the skyline 
        of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, 
        the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.

        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

        A small river named Duden flows by their place and supplies it with the necessary regelialia. 
        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
        `,
        published: "Jun 14,  2022",
        author: {
            name: "Flying High",
            image: Authorimage,
            designation: "CEO and Founder"
        }
    },
    {
        id: 6,
        title: "Your most unhappy customers are your greatest source of learning",
        subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        category: "Business, Travel",
        img: Blogimg,
        description: `
        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
        text by the name of Lorem Ipsum decided to leave for the far World of Grammar.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, qui ea assumenda illo quidem 
        consequatur ducimus cum aliquam est minus provident placeat, nesciunt vitae. 
        Et aperiam magni non quasi est asperiores nobis atque suscipit incidunt dignissimos! Harum et sunt ea.

        When she reached the first hills of the Italic Mountains, she had a last view back on the skyline 
        of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, 
        the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.

        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

        A small river named Duden flows by their place and supplies it with the necessary regelialia. 
        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
        `,
        published: "Jun 5,  2022",
        author: {
            name: "Flying High",
            image: Authorimage,
            designation: "CEO and Founder"
        }
    },
]


const blogs = () => {
    return(
        <section className="mx-auto lg:px-24 md:px-20 py-10 dark:text-dark-base-100">
        <h1 className="font-bold text-4xl py-12 text-center">Blog Posts</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
            {Posts.map(data => (
                <div key={data.id} class="flex flex-wrap -m-4">
                    {/* <div class="p-4 md:w-1/3"> */}
                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={data.img} alt="blog" />
                        <div class="p-6">
                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{data.category}</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{data.published}</h1>
                            <p class="leading-relaxed mb-3">{data.title}</p>
                            <div class="flex items-center flex-wrap ">
                                <Link  href={{pathname: `/blogs/${data.id}`, query: data }} class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                                <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>1.2K
                                </span>
                                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>6
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


            ))}
        </div>
        {/* </div> */}
    </section>

    )
    }

//     return (
//         // <section class="text-gray-600 body-font">
//         //     <div class="container px-5 py-24 mx-auto">

      


//     //     <section className="mx-auto lg:px-24 md:px-20 py-10 dark:text-dark-base-100">
//     //         <h1 className="font-bold text-4xl py-12 text-center">Blog Posts</h1>
//     //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
//     //             
//     //                 <div key={data.id} className="flex flex-col">
//     //                     <div className="images">
//     //                         <Link href={"/blogs"}> <Image src={data.img} alt='' className="rounded"  /></Link>
//     //                     </div>
//     //                     <div className="info flex justify-center flex-col py-4">

//     //                         <div className="title">
//     //                             <Link href={{pathname: `/blogs/${data.id}`, query: data }} className="text-xl font-bold text-gray-800 hover:text-gray-600">{data.title}</Link>
//     //                         </div>
//     //                         <p className="text-gray-500 py-3">
//     //                             {data.description.slice(0,7)}
//     //                         </p>
//     //                         <div className="flex flex-col">
//     //                             <Link href={"/blogs"}  className="text-orange-600 hover:text-orange-800">{data.category}</Link>
//     //                             <Link href={"/blogs"} className="text-gray-800 hover:text-gray-600">{data.published}</Link>
//     //                         </div>
//     //                         {/* author */}
//     //                         <div className="author flex py-5">
//     //                             <Image src={data.author.image} alt='' width={60} height={60} className="rounded-full"></Image>
//     //                             <div className="flex flex-col justify-center px-4">
//     //                                 <Link href={"/blogs"} className="text-md font-bold text-gray-800 hover:text-gray-600">{data.author.name}</Link>
//     //                                 <span className="text-sm text-gray-500">{data.author.designation}</span>
//     //                             </div>
//     //                         </div>
//     //                     </div>
//     //                 </div>
//     //             ))}
//     //         </div>
//     //     </section>
     
// };

export default blogs;


