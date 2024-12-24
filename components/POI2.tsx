import {ReactNode, useEffect, useState} from "react";
import Image from "next/image";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";

interface POIProps {
    loggedIn: boolean;
    positionX: number;
    positionY: number;
    imageSrc: string;
    header: ReactNode;
    text: ReactNode;
}

const POI2 = ({loggedIn, positionX, positionY, imageSrc, header, text}: POIProps) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (positionX < 0 || positionY < 0) {
            console.error('PositionX and positionY must be greater than 0');
        } else {
            setLoading(false);
        }

    }, [positionX, positionY]);

    if (loading) {
        return null;
    }

    return (
        <div
            className={`h-[10vh] w-[5vw] absolute rounded-xl hover:cursor-pointer`}
            style={{top: `${positionY}%`, left: `${positionX}%`}}>

            {loggedIn || (header !== "" && text !== "") ? (
                <HoverCard>
                    <HoverCardTrigger>
                        <div
                            className={'h-[16px] w-[16px] rotate-45 rounded-[10px] absolute -bottom-1.5 left-1/2 -translate-x-1/2'}/>
                        <div className={'w-full h-full flex items-center justify-center select-none'}>
                            <Image src={imageSrc} alt={'POI hover image'} fill={true}
                                   className={'object-fill rounded-[10px] z-[0] relative hover:scale-150 transition-all duration-300'}/>
                        </div>
                    </HoverCardTrigger>

                    <HoverCardContent className={'mt-1 bg-yellow-400 border-yellow-300'}>
                        <h2 className={'text-xl font-semibold'}>{header}</h2>
                        <div className={'text-sm'}>
                            {text}
                        </div>
                    </HoverCardContent>
                </HoverCard>) : (
                <>
                    <div
                        className={'h-[16px] w-[16px] rotate-45 rounded-[10px] absolute -bottom-1.5 left-1/2 -translate-x-1/2'}/>
                    <div className={'w-full h-full flex items-center justify-center select-none'}>
                        <Image src={imageSrc} alt={'POI hover image'} fill={true}
                               className={'object-fill rounded-[10px] z-[0] relative hover:scale-150 transition-all duration-300'}/>
                    </div>
                </>
            )}
        </div>
    )
}

export default POI2;