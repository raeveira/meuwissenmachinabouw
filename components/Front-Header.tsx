'use client'
import Image from "next/image";
import Link from "next/link";
import {useRef, useState} from "react";
import MultiTextSwitch from "@/components/MultiTextSwitch";
import {ChevronDown} from "lucide-react";

const FrontHeader = () => {
    const bookmarkColor = '#EFC101';
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const playRadio = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio('/radio.mp3');
            audioRef.current.volume = 0.05;
        }

        if (!isPlaying) {
            setIsPlaying(true);
            audioRef.current.play();
        } else {
            setIsPlaying(false);
            audioRef.current.pause();
        }
    }

    return (
        <header className={`w-screen h-screen relative overflow-hidden snap-start snap-always`}>
            <video
                src={'/front-page/header-bg.mp4'}
                className={'object-cover w-full h-full absolute top-0 left-0 -z-[2]'}
                autoPlay
                loop
                muted
            />
            <div className={'object-cover w-full h-full absolute top-0 left-0 -z-[1] bg-black opacity-60'}/>
            <div className={'container mx-auto desktop-lg:ml-40 px-4 h-full flex flex-col pt-8 space-y-40'}>
                <div className={'relative mb-6'}>
                    <Image
                        src={'/front-page/logo.png'}
                        alt={'Site logo'}
                        width={300}
                        height={71}
                        className={'object-contain'}
                    />
                </div>
                <h2 className={'text-gray-200 text-7xl font-extrabold flex flex-col'}>
                    <MultiTextSwitch/>
                </h2>
                <div className={'border-b-4 border-b-solid border-b-[#EFC101] rounded-xl max-w-[450px]'}/>
            </div>
            <div className={'absolute bottom-[15%] right-[20%]'}>
                <Image src={'/front-page/radio.png'} alt={'radio'} height={195} width={195} onClick={playRadio} className={'-rotate-[10deg] hover:scale-125 hover:rotate-[15deg] hover:cursor-pointer duration-300 transition-all'}/>
                <Image src={'/pijl.png'} alt={'arrow point towards radio'} height={1200} width={600} className={'absolute top-[65%] -left-[150%] scale-[2]'} />
            </div>
            <div className={'absolute bottom-0 right-0'}>
                <Link href={'#drawing'}>
                    <div
                        style={{color: bookmarkColor}}
                        className="w-auto max-h-[64px] relative flex items-center"
                    >
                        <div
                            className="before:rounded-bl-[5px] rotate-90 relative scale-[4.5] pr-0 right-[60px] bottom-20 w-[50px] p-5 font-sans bg-no-repeat rounded-md before:content-[''] before:absolute before:top-0 before:right-0 before:w-[1.35em] before:h-[3.2em] before:bg-[linear-gradient(to_left_bottom,_transparent_50%,_#EFC101_0,_#FFE701_27px,_#9B7D00)] before:transform before:translate-x-[-0.8em] before:translate-y-[-0.73em] before:rotate-[-36.7deg] before:shadow-[0_6px_4px_-4px_#eedbd6]">
                            <h2 className="m-0 -rotate-[150deg] text-black bg-white absolute -top-4 text-[6px] -right-2.5 w-[54px] h-[32px] text-center"><span className={'mr-4 text-[3.5px] absolute -top-[9px] left-[1px] rotate-[60deg] text-center items-center flex flex-col'}>VOLG ONS NAAR <br/> ONS SPEELVELD<br/> <ChevronDown size={6}/> </span></h2>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={'absolute top-[4%] right-[3%] max-w-[20%] h-auto z-[1] pointer-events-auto hover:translate-y-1/4 hover:-translate-x-1/4 hover:scale-150 transition-all duration-300'}>
                <video src={'/front-page/volledige_morph_met_achtergrond.mp4'} className={'rounded-xl'} autoPlay loop muted />
            </div>
        </header>
    );
};

export default FrontHeader;