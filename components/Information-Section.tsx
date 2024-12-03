import {Itim} from "next/font/google";
import Image from "next/image";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

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
                       className={'object-cover select-none pointer-events-none'}/>
                <div
                    className={'h-[64px] w-[64px] absolute top-[38.5%] left-[13.15%] bg-yellow-400 rounded-xl'}>
                    <HoverCard>
                        <HoverCardTrigger>
                            <div
                                className={'h-[16px] w-[16px] rotate-45 rounded-[4px] absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-yellow-400'}/>
                            <div className={'absolute top-0 left-0 w-full h-full flex items-center justify-center select-none'}>
                                Lorem
                            </div>
                        </HoverCardTrigger>

                        <HoverCardContent className={'mt-16 bg-yellow-400 border-yellow-300'}>
                            <h2 className={'text-xl font-semibold'}>Hover Card</h2>
                            <p className={'text-sm'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                                fermentum
                                libero. Integer at semper ante. Sed nec nisl in metus tincidunt
                                fermentum.
                            </p>
                        </HoverCardContent>
                    </HoverCard></div>
            </div>
        </section>
    )
};

export default InformationSection;