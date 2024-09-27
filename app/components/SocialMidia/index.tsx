import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";


export default function SocialMidia() {
    return (
        <div className="flex items-center justify-end gap-3">
            <Link 
            href="https://www.facebook.com/montadordemoveisgoianiagoias"
            target="_blank"
            title="Facebook"
            className="inline-block text-white transition-transform duration-300 transform hover:scale-110"
            >
                <FaFacebook size={20} className="text-white" />
            </Link>
            <Link 
            title="Instagram"
            href="https://www.instagram.com/alfamontagem/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
            target="_blank"
                className="inline-block text-white transition-transform duration-300 transform hover:scale-110"
            >
                <FaInstagram size={20} className="text-white" />
            </Link>
            <Link 
            href="https://www.google.com/search?q=montador+de+moveis+alfa&oq=montador+de+moveis+alfa&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQIxgnMggIAhAAGBYYHjIGCAMQRRg80gEJNjMwMmowajE1qAIAsAIA&sourceid=chrome&ie=UTF-8"
            target="_blank"
                className="inline-block text-white transition-transform duration-300 transform hover:scale-110"
            >
                <FaYoutube size={20} className="text-white" />
            </Link>
            <Link 
            href="https://www.google.com/search?q=montador+de+moveis+alfa&oq=montador+de+moveis+alfa&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQIxgnMggIAhAAGBYYHjIGCAMQRRg80gEJNjMwMmowajE1qAIAsAIA&sourceid=chrome&ie=UTF-8"
            target="_blank"
                className="inline-block text-white transition-transform duration-300 transform hover:scale-110"
            >
                <FaLinkedinIn size={20} className="text-white" />
            </Link>
            <Link 
            href="https://www.google.com/search?q=montador+de+moveis+alfa&oq=montador+de+moveis+alfa&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQIxgnMggIAhAAGBYYHjIGCAMQRRg80gEJNjMwMmowajE1qAIAsAIA&sourceid=chrome&ie=UTF-8"
            target="_blank"
                className="inline-block text-white transition-transform duration-300 transform hover:scale-110"
            >
                <FaTiktok size={20} className="text-white" />
            </Link>
        </div>
    )
}