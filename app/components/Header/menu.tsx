import Link from "next/link";

export default function NavMenu() {
    return (
        <nav className="flex gap-4 items-center w-full justify-end">
            <li className="list-none">
                <Link href={'/'}
                    className="
        text-base font-semibold text-white
        relative inline-block transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full
        ">
                    Home
                </Link>
            </li>
            <li className="list-none">
                <Link href={'/'}
                    className="
        text-base font-semibold text-white
        relative inline-block transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full
        ">
                    Sobre
                </Link>
            </li>
        </nav>
    )
}