import {useRef} from "react";

const RadioSpot = () => {
    const audioRef = useRef<HTMLAudioElement>(null);

    const handlePlay = () => {
        audioRef.current?.play();
    };

    const handlePause = () => {
        audioRef.current?.pause();
    }
    return (
        <>
            {/* Play and pause buttons */}
            <div className={'flex space-x-4'}>
                <button onClick={handlePlay} className={'bg-green-500 text-white px-4 py-2 rounded'}>Play</button>
                <button onClick={handlePause} className={'bg-red-500 text-white px-4 py-2 rounded'}>Pause</button>
            </div>
            <div className={'hidden'}>
                {/* Play the radio fragment */}
                <audio id={'radio'} ref={audioRef} controls={false} autoPlay={true} loop={true} className={'hidden'}/>
            </div>
        </>
    )
}

export default RadioSpot;