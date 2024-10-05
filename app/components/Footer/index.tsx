// import Image from "next/image";
// import LogoAlfaMontagem from "../../alfa-montagem-logo.png";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
    return (

        <footer className="w-full py-3 bg-[radial-gradient(circle_at_50%_50%,_#E4EBFC_0%,_#589BE3_32%,_#002F5E_63%,_#000000_100%)]">
            <div className="container mx-auto">
                <div className="">
                    <div className="px-4 lg:w-5/12 w-full mx-auto mb-3">
                        {/* <Image
                            src={LogoAlfaMontagem}
                            alt="Alfa Montagem - Montador de móveis - Goiânia"
                            width={250}
                            height={100}
                            priority
                            quality={100}
                            className="mx-auto"
                        /> */}
                         <h1 className="text-3xl text-white font-bold uppercase mx-auto text-center w-full">Sua Logo</h1>
                    </div>
                    <div className="text-center lg:px-4 px-7 lg:w-4/12 w-full mx-auto">
                        <p className="text-sm lg:text-black text-white" >
                            Copyright 2023 - Finsocial S.A. - CNPJ: xxxx.xxx/xxxx-xx
                            Endereço: Rua VF qd 51 lt 15 Setor Finsocial, Goiânia - GO,
                            CEP: xxxxx-xxx Telefone: (xx) xxxxx-xxxx
                        </p>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-5 flex items-center justify-center right-4 rounded-full w-14 h-14 bg-[#25D366] z-10 animate-ping" />
            <div className="fixed bottom-5 flex items-center justify-center right-4 rounded-full w-14 h-14 bg-[#25D366] z-20">
                <Link href="https://api.whatsapp.com/send/?phone=62999999999&text&type=phone_number&app_absent=0" passHref target="_blank" className="w-full h-full flex items-center justify-center">
                    <FaWhatsapp size={35} className="text-white" />
                </Link>
            </div>
        </footer>
    )
}