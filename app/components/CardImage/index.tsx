import Image from "next/image";
import Image1 from '../../cama.png';
import Image2 from '../../berco.png';
import Image3 from '../../comoda.png';
import Image4 from '../../armario-de-roupa.png';
import Image5 from '../../armario-de-cozinha.png';
import { useState } from "react";


export default function CardImage() {
    const [animate, setAnimate] = useState<boolean>(false);

    const handleAnimeIn = () => {
        setAnimate(true);
    }

    const handleAnimeOut = () => {
        setAnimate(false);
    }

    return (
        <>
            <div
                onMouseEnter={handleAnimeIn}
                onMouseLeave={handleAnimeOut}
                className="flex justify-center lg:border lg:border-zinc-100 rounded-2xl lg:shadow-lg py-4 hover:scale-110 transition-all duration-300" data-aos={!animate ? 'fade-up' : ''}  data-aos-duration="2000" data-aos-once="true">
                <Image
                    src={Image1}
                    width={85}
                    height={85}
                    alt=""
                />
            </div>
            <div
                onMouseEnter={handleAnimeIn}
                onMouseLeave={handleAnimeOut}
                className="flex justify-center lg:border lg:border-zinc-100 rounded-2xl lg:shadow-lg py-4 hover:scale-110 transition-all duration-300" data-aos={!animate ? 'fade-up' : ''}  data-aos-duration="2000" data-aos-once="true">
                <Image
                    src={Image2}
                    width={85}
                    height={85}
                    alt=""
                />
            </div>
            <div
                onMouseEnter={handleAnimeIn}
                onMouseLeave={handleAnimeOut}
                className="flex justify-center lg:border lg:border-zinc-100 rounded-2xl lg:shadow-lg py-4 hover:scale-110 transition-all duration-300" data-aos={!animate ? 'fade-up' : ''}  data-aos-duration="2000" data-aos-once="true">
                <Image
                    src={Image3}
                    width={85}
                    height={85}
                    alt=""
                />
            </div>
            <div
                onMouseEnter={handleAnimeIn}
                onMouseLeave={handleAnimeOut}
                className="flex justify-center lg:border lg:border-zinc-100 rounded-2xl lg:shadow-lg py-4 hover:scale-110 transition-all duration-300" data-aos={!animate ? 'fade-up' : ''}  data-aos-duration="2000" data-aos-once="true">
                <Image
                    src={Image4}
                    width={85}
                    height={85}
                    alt=""
                />
            </div>
            <div
                onMouseEnter={handleAnimeIn}
                onMouseLeave={handleAnimeOut}
                className="flex justify-center lg:border lg:border-zinc-100 rounded-2xl lg:shadow-lg py-4 hover:scale-110 transition-all duration-300" data-aos={!animate ? 'fade-up' : ''}  data-aos-duration="2000" data-aos-once="true">
                <Image
                    src={Image5}
                    width={85}
                    height={85}
                    alt=""
                />
            </div>
        </>
    )
}