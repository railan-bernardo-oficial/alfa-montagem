"use client"
import sobreItens from "@/services/sobreItens"
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import AOS from 'aos';
type ItensProps = {
    title: string;
    text: string;
}

export default function CardItens() {
    const [isOpen, setIsOpen] = useState<number | null>(null)

    useEffect(() => {
        AOS.init({

        });
      }, []);

    return (
        <>
            {sobreItens.map((item: ItensProps, index: number) => {
                return (
                    <div 
                    className={`w-full border-b border-b-zinc-300`} key={index}
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-once="true"
                    >
                        <button
                            onClick={() => setIsOpen(index)}
                            className="text-black py-5 lg:text-xl text-lg font-semibold flex items-center justify-between w-full">
                            {item.title}
                            {isOpen === index ? (
                            <FaMinus size={20} />
                            ): (
                            <FaPlus size={20} />
                            )}
                        </button>
                        {isOpen === index &&
                            <div className="w-full p-5" data-aos="zoom-in">
                                <p className="text-sm text-zinc-700 text-left">{item.text}</p>
                            </div>
                        }
                    </div>
                )
            })}
        </>
    )
}