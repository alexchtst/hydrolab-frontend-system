import React from 'react';
import imageAssets from "../assets/hydro-lab-icon.png"

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='w-full min-h-screen relative'>
            <a className='fixed w-16 h-16 right-5 bottom-10 rounded-full cursor-pointer' href='https://www.hidro.web.id/'>
                <img src={imageAssets} alt="image asset" />
            </a>
            <div className='w-full min-h-screen'>
                {children}
            </div>
        </div>
    );
}
