import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";


export default function SocialMidia() {
    return (
        <div className="flex items-center justify-end gap-3">
            <Link 
            href="https://www.facebook.com/"
            target="_blank"
            title="Facebook"
            className="inline-block text-white transition-transform duration-300 transform hover:scale-110"
            >
                <FaFacebook size={20} className="text-white" />
            </Link>
            <Link 
            title="Instagram"
            href="https://www.instagram.com/"
            target="_blank"
                className="inline-block text-white transition-transform duration-300 transform hover:scale-110"
            >
                <FaInstagram size={20} className="text-white" />
            </Link>
            <Link 
            href="https://youtube.com"
            target="_blank"
                className="inline-block text-white transition-transform duration-300 transform hover:scale-110"
            >
                <FaYoutube size={20} className="text-white" />
            </Link>
            <Link 
            href="https://linkedin.com"
            target="_blank"
                className="inline-block text-white transition-transform duration-300 transform hover:scale-110"
            >
                <FaLinkedinIn size={20} className="text-white" />
            </Link>
            <Link 
            href="https://tiktok.com"
            target="_blank"
                className="inline-block text-white transition-transform duration-300 transform hover:scale-110"
            >
                <FaTiktok size={20} className="text-white" />
            </Link>
        </div>
    )
}