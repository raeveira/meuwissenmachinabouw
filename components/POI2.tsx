import {useEffect, useState} from "react";
import Image from "next/image";

const POI2 = ({positionX, positionY, imageSrc, header}: { positionX: number, positionY: number, imageSrc: string, header: string, text: string }) => {
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
            className={`h-[7vh] w-[3.5vw] absolute rounded-xl hover:cursor-pointer`}
            style={{top: `${positionY}%`, left: `${positionX}%`}}>
                    <div
                        className={'h-[16px] w-[16px] rotate-45 rounded-[10px] absolute -bottom-1.5 left-1/2 -translate-x-1/2'}/>
                    <div className={'absolute top-0 left-0 w-full h-full flex items-center justify-center select-none'}>
                        <Image src={imageSrc} alt={header} fill={true} className={'rounded-[10px] z-[0] relative hover:scale-150 transition-all duration-300'}/>
                    </div>
        </div>
    )
}

export default POI2;