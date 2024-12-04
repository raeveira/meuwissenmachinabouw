import {Itim} from "next/font/google";
import Image from "next/image";
import POI from "@/components/POI";

const itim = Itim({
    weight: "400",
    preload: true,
    display: "swap",
    subsets: ["latin"],
});


const InformationSection = () => {
    return (
        <section id={'drawing'} className={`${itim.className} w-screen h-screen snap-start snap-always`}>
            <div className={'flex justify-center w-full text-5xl pt-5 tracking-wide'}>
                <h1 className={'relative'}>Het begint met een Tekening
                    <span className={'absolute -right-[1.25rem] -top-2'}>
                        <Image src={'/front-page/marked.gif'} alt={'word highlighter'} width={224} height={96}
                               className={'select-none pointer-events-none'}/>
                    </span>
                </h1>
            </div>
            <div className={'w-screen h-screen relative'}>
                <Image src={'/front-page/soccerfield.png'} alt={'soccerfield'} fill={true}
                       className={'object-cover select-none pointer-events-none max-desktop-sm:object-contain'}/>
                {/* Left Side */}
                <POI positionX={253} positionY={355} imageSrc={'/default.png'}/>
                <POI positionX={553} positionY={250} imageSrc={'/default.png'}/>
                <POI positionX={765} positionY={240} imageSrc={'/default.png'}/>
                <POI positionX={472} positionY={450} imageSrc={'/default.png'}/>
                <POI positionX={679} positionY={362} imageSrc={'/default.png'}/>
                <POI positionX={323} positionY={555} imageSrc={'/default.png'}/>
                <POI positionX={125} positionY={575} imageSrc={'/POI/vervoer.jpeg'}/>
                <POI positionX={525} positionY={565} imageSrc={'/default.png'}/>
                <POI positionX={730} positionY={585} imageSrc={'/default.png'}/>
                <POI positionX={630} positionY={475} imageSrc={'/default.png'}/>
                <POI positionX={425} positionY={330} imageSrc={'/default.png'}/>

                {/* Right Side */}
                <POI positionX={1068} positionY={538} imageSrc={'/default.png'}/>
                <POI positionX={1343} positionY={430} imageSrc={'/default.png'}/>
                <POI positionX={1660} positionY={350} imageSrc={'/default.png'}/>
                <POI positionX={1468} positionY={365} imageSrc={'/default.png'}/>
                <POI positionX={1170} positionY={363} imageSrc={'/default.png'}/>
                <POI positionX={1118} positionY={265} imageSrc={'/default.png'}/>
            </div>
        </section>
    )
};

export default InformationSection;