import {Itim} from "next/font/google";
import Image from "next/image";

const itim = Itim({
    weight: "400",
    preload: true,
    display: "swap",
});


const InformationSection = () => {
    return (
        <section id={'drawing'} className={`${itim.className} w-screen h-screen snap-start snap-always`}>
            <div className={'flex justify-center w-full text-5xl pt-5 tracking-wide'}>
                <h1 className={'relative'}>Het begint met een Tekening
                    <span className={'absolute -right-[1.25rem] -top-2'}>
                        <Image src={'/front-page/marked.gif'} alt={'word highlighter'} width={224} height={96}/>
                    </span>
                </h1>
            </div>
            <div className={'w-screen h-screen relative'}>
                <Image src={'/front-page/soccerfield.png'} alt={'soccerfield'} fill={true} className={'object-cover mt-20'}/>
            </div>
        </section>
    )
};

export default InformationSection;