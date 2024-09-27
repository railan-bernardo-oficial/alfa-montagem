"use client"
import Image from "next/image";
import BannerImage from "../../banner.jpg";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";

export default function Banner() {
    const [animate, setAnimate] = useState<boolean>(false);

    const handleAnimeIn = () => {
        setAnimate(true);
    }

    const handleAnimeOut = () => {
        setAnimate(false);
    }

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="w-full relative">
            <Image
                src={BannerImage}
                width={1920}
                height={834}
                priority
                quality={100}
                alt="Peça um orçamento, e monte seu móvel"
                objectFit="cover"
                className="object-cover"
            />

            <div className="absolute lg:w-[380px] z-10 lg:top-[180px] top-0 lg:left-32 left-0 py-5 px-4 lg:bg-transparent bg-black/50 lg:h-fit h-full" data-aos="zoom-in-right" data-aos-once="true">
                <h1
                    className="text-white lg:text-2xl text-xl font-semibold"
                >
                    Montador de Móveis Especializado Em Montagem Desmontagem de Móveis, Orçamento Grátis!
                    Contato Rápido Via WhatsApp
                </h1>
                <button
                    onMouseEnter={handleAnimeIn}
                    onMouseLeave={handleAnimeOut}
                    data-aos={!animate ? 'zoom-in' : ''}
                    className="w-full mt-5 bg-[#25D366] py-4 px-6 rounded-full text-white text-xl font-semibold transition-transform duration-300 transform hover:scale-110">
                    <Link href="https://api.whatsapp.com/send/?phone=62995460967&text&type=phone_number&app_absent=0" className="flex gap-3 items-center justify-center w-full h-full" target="_blank">
                        <FaWhatsapp size={28} />
                        Solicite um Orçamento!
                    </Link>
                </button>
            </div>
        </div>
    )
}