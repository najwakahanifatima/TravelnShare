'use client'

import { usePathname } from "next/navigation"
import { Footer } from "./Footer";

export const DynamicBackground = ( {children} : { children: React.ReactNode}) => {
    const pathName = usePathname();

    const bgImage = 
        pathName === '/'
            ? "url('/background/home.svg')"
            : pathName === '/destination'
            ? "url('/background/destination.svg')"
            : 'none';
    
    return  (
        <div 
            className="min-h-screen flex flex-col bg-cover bg-no-repeat"
            style={{ 
            backgroundImage: bgImage, 
            backgroundAttachment: 'scroll',
            }}
        >
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    )
}