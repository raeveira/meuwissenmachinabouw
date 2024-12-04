import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import {useEffect, useState} from "react";
import Image from "next/image";

const POI = ({positionX, positionY, imageSrc}: { positionX: number, positionY: number, imageSrc: string }) => {
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
            className={`h-[64px] w-[64px] absolute bg-yellow-400 rounded-xl`}
            style={{top: `${positionY}px`, left: `${positionX}px`}}>
            <HoverCard>
                <HoverCardTrigger>
                    <div
                        className={'h-[16px] w-[16px] rotate-45 rounded-[4px] absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-yellow-400'}/>
                    <div className={'absolute top-0 left-0 w-full h-full flex items-center justify-center select-none'}>
                        <Image src={imageSrc} alt={'Lorem'} width={58} height={58} className={'rounded-[4px]'}/>
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
            </HoverCard>
        </div>
    )
}

export default POI;