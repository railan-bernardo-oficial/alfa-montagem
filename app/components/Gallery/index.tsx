
"use client"
import Image from 'next/image';
import { useState } from 'react';
import Itens from '@/services/items';

type ItemsProps = {
    imagem: string;
    category: string;
}

export default function Gallery() {
    const [category, setCategory] = useState<string | null>('quarto');

    const handleCategoryGallery = (categ: string) => {
        setCategory(categ)
    }


    return (
        <div className="w-full grid-image grid grid-cols-12 gap-4">
            <div className='col-span-12'>
                <div className='h-[45px] mb-10 flex gap-3 items-center justify-center rounded-[30px]'>
                    <button
                        onClick={() => handleCategoryGallery('quarto')}
                        className={`w-[120px] font-semibold shadow-lg ${category === 'quarto' ? 'bg-[#6ab2ee] text-white' : 'bg-zinc-100 text-black'} px-3 h-full font-medium text-lg flex items-center justify-center rounded-[30px]`}
                    >
                        Quarto
                    </button>
                    <button
                        onClick={() => handleCategoryGallery('cozinha')}
                        className={`w-[120px] font-semibold shadow-lg ${category === 'cozinha' ? 'bg-[#6ab2ee] text-white' : 'bg-zinc-100 text-black'} px-3 h-full font-medium text-lg flex items-center justify-center rounded-[30px]`}
                    >
                        Cozinha
                    </button>
                </div>
            </div>

            {Itens.map((item: ItemsProps, index: number) => {
               if(item.category === category){
                   return (
                       <div
                           key={index}
                           className={`lg:col-span-4 col-span-6 relative h-[250px] rounded-2xl shadow-sm overflow-hidden`} data-aos="zoom-in">
                           <Image
                               src={item.imagem}
                               width={300}
                               height={400}
                               priority
                               quality={100}
                               alt={`Imagem montagem de moveis de ${item.category}`}
                           />
                       </div>
                   )
               }
            })}

        </div>
    )
}