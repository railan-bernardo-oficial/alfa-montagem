import Image from "next/image";
import Link from "next/link";
import LogoAlfaMontagem from "../../alfa-montagem-logo.png";
import SocialMidia from "../SocialMidia";
// import NavMenu from "./menu";
export default function Header() {
    return (
        <header className="w-full bg-[radial-gradient(circle_at_50%_50%,_#E4EBFC_0%,_#589BE3_32%,_#002F5E_63%,_#000000_100%)] py-2">
            <div className="lg:container mx-auto lg:px-0 px-3">
                <div className="lg:w-10/12 w-full mx-auto flex gap-3 justify-between items-center">
                <div className="lg:w-[280px] max-w-[180px]">
                    <Link href={"/"}>
                        <Image
                            src={LogoAlfaMontagem}
                            alt="Alfa Montagem - Montador de móveis - Goiânia"
                            width={250}
                            height={100}
                            priority
                            quality={100}
                        />
                    </Link>
                </div>
                <div className="lg:w-[calc(100% - 280px)] flex items-center justify-end gap-14">
                   {/* nav */}
                   {/* <NavMenu /> */}
                   {/* midia */}
                   <SocialMidia />
                </div>
                </div>
            </div>
        </header>
    )
}