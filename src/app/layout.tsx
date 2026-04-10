import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "swiper/css";
import "./sass/style.scss";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { Inter } from 'next/font/google';
import AOSInit from "@/app/helper/AosInit"; // Importamos la inicialización de animaciones
import { GlobalChildrenProps } from "./types";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: "Lightning Tree Service LLC",
    template: "%s | Lightning Tree Service LLC"
  },
  description: "Professional Tree Removal and Landscape Services in Vancouver & Portland.",
};

export default function RootLayout({ children }: GlobalChildrenProps) {
    return (
        <html lang="en">
            <head>
                <link 
                    rel="stylesheet" 
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" 
                />
            </head>
            <body className={inter.className}>
                {/* IMPORTANTE: No ponemos Header y Footer aquí globalmente 
                   porque tu Home y tus páginas internas usan Headers diferentes.
                   Es mejor llamarlos dentro de cada page.tsx.
                */}
                
                {children}

                {/* Inicialización de animaciones para TODO el sitio */}
                <AOSInit />
                
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </body>
        </html>
    );
}