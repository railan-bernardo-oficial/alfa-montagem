
"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
// import Itens from '@/services/items';

type ItemsProps = {
    imagem: string;
    category: string;
}


export default function Gallery() {
    const [categorys, setCategorys] = useState<string[]>([]);
    const [isCategory, setIsCategory] = useState<string>("armarios");
    const [items, setItems] = useState<ItemsProps[]>([]);

    useEffect(() => {
        fetch('/api/gallery')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                setItems(data)

                const uniqueCategories: string[] = Array.from(new Set(data.map((item: ItemsProps) => item.category)));
                setCategorys(uniqueCategories);
            });
    }, []);


    const handleCategoryGallery = (categ: string) => {
        setIsCategory(categ)
    }


    return (
        <div className="w-full grid-image grid grid-cols-12 gap-4">
            <div className='col-span-12'>
                <div className='lg:h-[45px] mb-10 lg:flex grid grid-cols-12 gap-3 items-center justify-center rounded-[30px]'>
                    {categorys.map((categ: string, index: number) => {
                        return (
                            <button
                                key={index}
                                onClick={() => handleCategoryGallery(categ)}
                                className={`min-w-[120px] min-h-[45px] capitalize col-span-6 font-semibold shadow-lg ${categ === isCategory ? 'bg-[#6ab2ee] text-white' : 'bg-zinc-100 text-black'} px-4 h-full font-medium text-lg flex items-center justify-center rounded-[30px]`}
                            >
                                {categ.replace("-", " ")}
                            </button>
                        )
                    })}

                </div>
            </div>

            {items.map((item: ItemsProps, index: number) => {
                if (item.category === isCategory) {
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