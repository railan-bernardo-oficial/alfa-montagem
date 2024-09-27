"use client"
import avaliacoes from '@/services/api';
import Image from 'next/image';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

type AvaliacaoProps = {
    name: string;
    image_url: string;
    response?: string;
    rating: number;
}



export default function Avaliacao() {
    const [isComment, setIsComment] = useState<number | null>(null);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div 
        className="w-full lg:px-0 px-5 mt-20" 
         data-aos="fade-up"
         data-aos-duration="2000"
         data-aos-once="true">
            <h1 className="text-3xl font-bold text-black mb-5">Últimas avaliações dos nossos clientes</h1>
            <div className="w-full mt-8">
                <Carousel 
                responsive={responsive}  
                itemClass="px-3"
                infinite={true}
                autoPlay
                autoPlaySpeed={5000}
                >
                    {avaliacoes.map((item: AvaliacaoProps, index: number) => {
                        return (
                            <div 
                            onMouseLeave={()=> setIsComment(null)}
                            key={index} 
                            className='rounded-xl border border-zinc-300 px-3 py-5 mb-4'>
                                <div className='w-full flex justify-center mb-4'>
                                    <Image
                                        src={item.image_url}
                                        width={60}
                                        height={60}
                                        alt={item.name}
                                        priority={true}
                                        unoptimized
                                        quality={100}
                                        className='rounded-full'
                                    />
                                </div>
                                <h2 className='text-base font-semibold text-black text-center mb-2'>{item.name}</h2>
                                <div className='flex items-center justify-center gap-2 mt-2'>
                                <FaStar size={20} className='text-yellow-400' />
                                <FaStar size={20} className='text-yellow-400' />
                                <FaStar size={20} className='text-yellow-400' />
                                <FaStar size={20} className='text-yellow-400' />
                                <FaStar size={20} className='text-yellow-400' />
                                </div>
                                <button 
                                onClick={()=> setIsComment(index)}
                                className={`${item?.response ? "text-blue-700" : "text-white"} text-sm text-center mx-auto w-fit block mt-3`}>Comentário</button>
                                {(item.response && isComment === index) && 
                                <p 
                                className='text-sm text-zinc-600 text-center pt-4' data-aos="zoom-in">{item?.response}</p>
                                }
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}