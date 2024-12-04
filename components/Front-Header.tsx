'use client'
import Image from "next/image";
import { Itim } from "next/font/google";
import { Bookmark } from "lucide-react";
import Link from "next/link";

const itim = Itim({
    weight: "400",
    preload: true,
    display: "swap",
    subsets: ["latin"],
});

const FrontHeader = () => {
    const bookmarkColor = '#EFC101';

    return (
        <header className={`${itim.className} w-screen h-screen relative overflow-hidden snap-start snap-always`}>
            <video
                src={'/front-page/header-bg.mp4'}
                className={'object-cover w-full h-full absolute top-0 left-0 -z-[2]'}
                autoPlay
                loop
                muted
            />
            <div className={'object-cover w-full h-full absolute top-0 left-0 -z-[1] bg-black opacity-60'}/>
            <div className={'container mx-auto desktop-lg:ml-40 px-4 h-full flex flex-col pt-8 space-y-40'}>
                <div className={'relative w-16 mb-6'}>
                    <Image
                        src={'/front-page/logo.png'}
                        alt={'Site logo'}
                        width={64}
                        height={55}
                        className={'object-contain'}
                    />
                    <h1 className={'text-white text-3xl'}>MEUWISSEN</h1>
                </div>
                <h2 className={'text-gray-200 text-7xl font-light flex flex-col'}>
                    <span>Lorem ipsum odor</span>
                    <span>amet, consectetuer</span>
                    <span>adipiscing elit.</span>
                </h2>
            </div>
            <div className={'absolute top-20 right-32 -rotate-[10deg] hover:scale-125 hover:rotate-[15deg] duration-300 transition-all'}>
                <Image src={'/front-page/radio.png'} alt={'radio'} height={195} width={195}/>
            </div>
            <div className={'absolute bottom-0 right-0'}>
                <Link href={'#drawing'}>
                    <div
                        style={{color: bookmarkColor}}
                        className="w-auto max-h-[64px] relative translate-x-24 -translate-y-5 transition-all duration-300 hover:translate-x-6 hover:!text-black flex items-center -space-x-5 select-none hover:cursor-pointer"
                    >
                        <Bookmark size={64} color={bookmarkColor} fill={bookmarkColor}
                                  className={'rotate-90'}/>
                        <div style={{backgroundColor: bookmarkColor}} className="h-[43px] w-[100px] rounded-[7px]"/>
                        <h3 className={'absolute top-[49%] left-[60%] -translate-x-[50%] -translate-y-[50%] text-xl'}>Tekening</h3>
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default FrontHeader;