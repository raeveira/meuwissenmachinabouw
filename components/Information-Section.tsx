import {Itim} from "next/font/google";
import Image from "next/image";
import POI from "@/components/POI";
import POI2 from "@/components/POI2";
import ImageSlider from "@/components/ImageSlider";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import {Button} from "@/components/ui/button";
import {ChevronDown, ChevronRight} from "lucide-react";
import Link from "next/link";
import {useEffect, useState} from "react";
import {EditableText} from "@/components/EditableText";
import {
    getDynamicData,
    getPois,
    getPois2,
    getReferee,
    getSecret,
    updateDynamicData,
    updateSinglePoi, updateSingleReferee, updateSingleSecret
} from "@/prisma/script";

const itim = Itim({
    weight: "400",
    preload: true,
    display: "swap",
    subsets: ["latin"],
});

type POIProps = {
    id: number;
    positionX: number;
    positionY: number;
    imageSrc: string;
    header: string;
    text: string;
    extraImageSrc: string | null;
}

type contentProps = {
    id: number;
    type: string;
    content: string;
} | undefined;

type secretProps = {
    id: number;
    text: string;
} | undefined;

type refereeProps = {
    id: number;
    text: string;
    TOU: string;
} | undefined;

const InformationSection = ({loggedIn}: { loggedIn: boolean }) => {
    const [images, setImages] = useState<string[]>([]);
    const [title, setTitle] = useState<contentProps>();
    const [subtitle1, setSubtitle1] = useState<contentProps>();
    const [subtitle2, setSubtitle2] = useState<contentProps>();
    const [pois, setPois] = useState<POIProps[]>();
    const [pois2, setPois2] = useState<POIProps[]>();
    const [secret, setSecret] = useState<secretProps[]>();
    const [referee, setReferee] = useState<refereeProps[]>();

    useEffect(() => {
        const fetchPois = async () => {
            const response = await getPois();
            setPois(response);

            const response2 = await getPois2();
            setPois2(response2);
        }

        fetchPois();
    }, []);

    useEffect(() => {
        const fetchSecret = async () => {
            const response = await getSecret();
            setSecret(response);
        }

        fetchSecret();
    }, []);

    useEffect(() => {
        const fetchReferee = async () => {
            const response = await getReferee();
            setReferee(response);
        }

        fetchReferee();
    }, []);

    useEffect(() => {
        const fetchDynamicData = async () => {
            const response = await getDynamicData();
            response.forEach((data) => {
                switch (data.type) {
                    case 'title':
                        setTitle(data);
                        break;
                    case 'subtitle1':
                        setSubtitle1(data);
                        break;
                    case 'subtitle2':
                        setSubtitle2(data);
                        break;
                }
            });
        }
        fetchDynamicData();
    }, []);


    useEffect(() => {
        fetch('/api/partners')
            .then(response => response.json())
            .then(data => setImages(data));
    }, []);

    const updatePoi = async (id: number, field: string, value: string): Promise<void> => {
        const updatedPois = pois?.map(poi => {
            if (poi.id === id) {
                const updatedPoi = { ...poi, [field]: value };
                updateSinglePoi(id, updatedPoi, 'poi');
                return updatedPoi;
            }
            return poi;
        });
        setPois(updatedPois);
    };

    const updatePoi2 = async (id: number, field: string, value: string): Promise<void> => {
        const updatedPois = pois2?.map(poi => {
            if (poi.id === id) {
                const updatedPoi = { ...poi, [field]: value };
                updateSinglePoi(id, updatedPoi, 'poi2');
                return updatedPoi;
            }
            return poi;
        });
        setPois2(updatedPois);
    };

    const updateReferee = async (id: number, field: string, value: string): Promise<void> => {
        const updatedReferee = referee?.map(ref => {
            if (ref?.id === id) {
                const updatedRef = { ...ref, [field]: value };
                updateSingleReferee(id, updatedRef);
                return updatedRef;
            }
            return ref;
        });
        setReferee(updatedReferee);
    }

    const updateSecret = async (id: number, field: string, value: string): Promise<void> => {
        const updatedSecret = secret?.map(sec => {
            if (sec?.id === id) {
                const updatedSec = { ...sec, [field]: value };
                updateSingleSecret(id, updatedSec);
                return updatedSec;
            }
            return sec;
        });
        setSecret(updatedSecret);
    }

    const handleUpdate = async (type: contentProps) => {
        await updateDynamicData(type?.id, {content: type?.content});
    }

    useEffect(() => {
        handleUpdate(title);
    }, [title]);

    useEffect(() => {
        handleUpdate(subtitle1);
    }, [subtitle1]);

    useEffect(() => {
        handleUpdate(subtitle2);
    }, [subtitle2]);

    return (
        <>
            <section id={'drawing'}
                     className={`relative ${itim.className} w-screen h-screen overflow-hidden snap-start snap-always bg-[url("/front-page/meeuwissen-2.7.png")] bg-left-bottom bg-cover bg-no-repeat bg-[#7A7A7A]`}>
                <div className={'absolute z-10 top-[3.6%] left-[2.2%] h-32 w-20'}>
                    <HoverCard >
                        <HoverCardTrigger>
                            <div className={'relative w-full h-full group'}>
                                <div
                                    className="absolute inset-0 opacity-0 transition-all duration-300 ease-in-out transform -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 w-40 scale-50 top-[10%]">
                                    <Image
                                        src={'/pig.svg'}
                                        alt={'hover image'}
                                        fill={true}
                                        className="object-cover -scale-x-100"
                                    />
                                </div>
                                <Image src={'/tree.png'} alt={'tree'} fill={true} className={'object-cover'}/>
                            </div>
                        </HoverCardTrigger>
                        <HoverCardContent className={'bg-yellow-400 border-yellow-300'}>
                            {loggedIn ? (
                                <EditableText
                                    initialText={secret && secret[0] ? secret[0].text : ""}
                                    onSave={(value) => secret && secret[0] ? updateSecret(secret[0].id, 'text', value) : console.error('No secret found')}
                                    className=""
                                />
                            ) : (
                                secret && secret[0] ? secret[0].text : ""
                            )}
                        </HoverCardContent>
                    </HoverCard>
                </div>
                <div
                    className={'flex flex-col justify-center w-full text-[2.5vw] pt-5 items-center tracking-wide text-white relative z-[3] select-none'}>
                    <h1 className={'relative'}>
                        {loggedIn ? (
                            <EditableText
                                initialText={title?.content || ""}
                                onSave={(text) => setTitle((prev) => prev ? { ...prev, content: text } : undefined)}
                                className=""
                            />
                        ) : (
                            title?.content || ""
                        )}
                        <span className={'absolute -right-[3.5%]'}>
                            {!loggedIn && (
                                <Image src={'/front-page/marked.gif'} alt={'word highlighter'} width={224} height={96}
                                       unoptimized={true}
                                       className={'select-none pointer-events-none w-[12vw] h-[8.2vh]'}/>
                            )}
                        </span>
                    </h1>
                    <br/>
                    <div className={'text-[1vw] mt-[36px] text-white rounded-t-md bg-[#D34E3B] px-2'}>
                        {loggedIn ? (
                            <EditableText
                                initialText={subtitle1?.content || ""}
                                onSave={(text) => setSubtitle1((prev) => prev ? { ...prev, content: text } : undefined)}
                                className="bg-transparent"
                            />
                        ) : (
                            subtitle1?.content || ""
                        )}
                    </div>
                    <div className={'text-[1vw] text-white rounded-t-md bg-[#D34E3B] px-2'}>
                        {loggedIn ? (
                            <EditableText
                                initialText={subtitle2?.content || ""}
                                onSave={(text) => setSubtitle2((prev) => prev ? { ...prev, content: text } : undefined)}
                                className="bg-transparent"
                            />
                        ) : (
                            subtitle2?.content || ""
                        )}
                    </div>
                </div>
                <div className={'w-screen h-screen -bottom-[4.35rem] absolute z-[2]'}>
                    <Image src={'/front-page/meeuwissen-2.6.png'} alt={'soccerfield'} fill={true}
                           className={'!object-cover select-none pointer-events-none max-desktop-sm:object-contain'}/>
                    <div
                        className="absolute z-[3] w-[65.28vw] h-[4.2vh] bg-[#EFC101] top-[21.1%] left-[19.05%] overflow-hidden select-none pointer-events-none">
                        <ImageSlider
                            images={images}/>
                    </div>
                    {/* Left Side */}
                    {pois?.map(poi => (
                        <POI
                            key={poi.id}
                            positionX={poi.positionX}
                            positionY={poi.positionY}
                            imageSrc={poi.imageSrc}
                            header={
                                loggedIn ? (
                                    <EditableText
                                        initialText={poi.header}
                                        onSave={(value) => updatePoi(poi.id, 'header', value)}
                                        className="bg-transparent"
                                    />
                                ) : (
                                    poi.header
                                )
                            }
                            text={
                                loggedIn ? (
                                    <EditableText
                                        initialText={poi.text}
                                        onSave={(value) => updatePoi(poi.id, 'text', value)}
                                        className="bg-transparent"
                                    />
                                ) : (
                                    poi.text
                                )
                            }
                            extraImageSrc={poi.extraImageSrc}
                        />
                    ))}

                    {/* Middle */}
                    <div
                        className={'absolute top-[46.85%] left-[51.75%] -translate-x-1/2 -translate-y-1/2 w-[14vw] h-[14vh] rounded-[4rem] grid grid-cols-2 grid-rows-2 z-[5] hover:cursor-pointer'}>
                        <div className={'rounded-tl-[4rem] relative group'}>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={'/front-page/freesunit xella.JPG'}
                                            alt={''}
                                            fill={true}
                                            className={'object-cover rounded-tl-[4rem] group-hover:scale-150 group-hover:z-[4] group-hover:rounded-[.5rem] transition-transform duration-300'}
                                        />
                                    </div>
                                </HoverCardTrigger>
                                <HoverCardContent
                                    className={'mt-5 bg-yellow-400 border-yellow-300 group-hover:scale-100 transition-transform duration-300'}>
                                    {loggedIn ? (
                                        <>
                                        <EditableText
                                                initialText="Software"
                                                onSave={(value) => console.log("Software header updated:", value)}
                                                className="text-2xl font-semibold"
                                            />
                                            <EditableText
                                                initialText="Voor onze engineering maken wij gebruik van 3d software, waar tevens de werkplaatstekeningen in aangemaakt worden, als ook animaties, sterkte berekeningen, en eventueel een bill off material export naar ons erp systeem."
                                                onSave={(value) => console.log("Software text updated:", value)}
                                                className="text-sm"
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <h1 className={'text-2xl font-semibold'}>Software</h1>
                                            <p className={'text-sm'}>Voor onze engineering maken wij gebruik van 3d
                                                software, waar tevens de werkplaatstekeningen in aangemaakt worden, als
                                                ook animaties, sterkte berekeningen, en eventueel een bill off material
                                                export naar ons erp systeem.</p>
                                        </>
                                    )}
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                        <div className={'rounded-tr-[4rem] relative group'}>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={'/front-page/lisaas.png'}
                                            alt={''}
                                            fill={true}
                                            className={
                                                'object-cover rounded-tr-[4rem] group-hover:scale-150 group-hover:z-[4] group-hover:rounded-[.5rem] transition-transform duration-300'
                                            }
                                        />
                                    </div>
                                </HoverCardTrigger>
                                <HoverCardContent
                                    className={
                                        'mt-5 bg-yellow-400 border-yellow-300 group-hover:scale-100 transition-transform duration-300'
                                    }
                                >
                                    {loggedIn ? (
                                        <>
                                            <EditableText
                                                initialText="ERP Systeem"
                                                onSave={(value) => console.log('ERP Systeem header updated:', value)}
                                                className="text-2xl font-semibold"
                                            />
                                            <EditableText
                                                initialText="In een multidiciplinair bedrijf is het van belang een goede organisatie structuur te hebben door middel van Enterprise Resource Planning, zodat urenboekingen, inkopen, verkopen volgens een bepaalde standaard verlopen."
                                                onSave={(value) => console.log('ERP Systeem text updated:', value)}
                                                className="text-sm"
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <h1 className={'text-2xl font-semibold'}>ERP Systeem</h1>
                                            <p className={'text-sm'}>
                                                In een multidiciplinair bedrijf is het van belang een goede organisatie
                                                structuur te hebben door middel van
                                                Enterprise Resource Planning, zodat urenboekingen, inkopen, verkopen
                                                volgens
                                                een bepaalde standaard verlopen.
                                            </p>
                                        </>
                                    )}
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                        <div className={'rounded-bl-[4rem] relative group'}>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={'/front-page/sterkte berekening.jpeg'}
                                            alt={''}
                                            fill={true}
                                            className={
                                                'object-cover rounded-bl-[4rem] group-hover:scale-150 group-hover:z-[4] group-hover:rounded-[.5rem] transition-transform duration-300'
                                            }
                                        />
                                    </div>
                                </HoverCardTrigger>
                                <HoverCardContent
                                    className={
                                        'mt-5 bg-yellow-400 border-yellow-300 group-hover:scale-100 transition-transform duration-300'
                                    }
                                >
                                    {loggedIn ? (
                                        <>
                                            <EditableText
                                                initialText="Berekeningen"
                                                onSave={(value) => console.log('Berekeningen header updated:', value)}
                                                className="text-2xl font-semibold"
                                            />
                                            <EditableText
                                                initialText="Om onze ontwerpen te optimaliseren of inzichtelijk te maken, maken we gebruik van CAE berekeningen."
                                                onSave={(value) => console.log('Berekeningen text updated:', value)}
                                                className="text-sm"
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <h1 className={'text-2xl font-semibold'}>Berekeningen</h1>
                                            <p className={'text-sm'}>
                                                Om onze ontwerpen te optimaliseren of inzichtelijk te maken, maken we
                                                gebruik van CAE berekeningen.
                                            </p>
                                        </>
                                    )}
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                        <div className={'rounded-br-[4rem] relative group'}>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={'/front-page/E-plan.png'}
                                            alt={''}
                                            fill={true}
                                            className={
                                                'object-cover rounded-br-[4rem] group-hover:scale-150 group-hover:z-[4] group-hover:rounded-[.5rem] transition-transform duration-300'
                                            }
                                        />
                                    </div>
                                </HoverCardTrigger>
                                <HoverCardContent
                                    className={
                                        'mt-5 bg-yellow-400 border-yellow-300 group-hover:scale-100 transition-transform duration-300'
                                    }
                                >
                                    {loggedIn ? (
                                        <>
                                            <EditableText
                                                initialText="E-Plan"
                                                onSave={(value) => console.log('E-Plan header updated:', value)}
                                                className="text-2xl font-semibold"
                                            />
                                            <EditableText
                                                initialText="Voor de E-engineering werken wij met het algemeen gebruikte programma E-plan."
                                                onSave={(value) => console.log('E-Plan text updated:', value)}
                                                className="text-sm"
                                            />
                                            <HoverCard>
                                                <HoverCardTrigger>
                                                    <Button
                                                        variant="outline"
                                                        className="mt-2 bg-yellow-500 text-black hover:bg-yellow-600 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105 font-semibold"
                                                    >
                                                        Schema&apos;s
                                                        <ChevronRight className="ml-2 h-4 w-4"/>
                                                    </Button>
                                                </HoverCardTrigger>
                                                <HoverCardContent
                                                    className={
                                                        '-mb-[3.25rem] ml-[46.25rem] bg-yellow-400 border-yellow-300 w-96'
                                                    }
                                                >
                                                    <div className={'grid grid-rows-1 grid-cols-[auto]'}>
                                                        <Image
                                                            src={'/POI/EPLAN-Afdrukopdracht.png'}
                                                            alt={'e-plan schema'}
                                                            width={2339}
                                                            height={1653}
                                                            className={'hover:scale-150 rounded-md'}
                                                        />
                                                    </div>
                                                </HoverCardContent>
                                            </HoverCard>
                                        </>
                                    ) : (
                                        <>
                                            <h1 className={'text-2xl font-semibold'}>E-Plan</h1>
                                            <p className={'text-sm'}>
                                                Voor de E-engineering werken wij met het algemeen gebruikte programma
                                                E-plan.
                                            </p>
                                            {/* Keep the Schema's button static */}
                                            <HoverCard>
                                                <HoverCardTrigger>
                                                    <Button
                                                        variant="outline"
                                                        className="mt-2 bg-yellow-500 text-black hover:bg-yellow-600 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105 font-semibold"
                                                    >
                                                        Schema&apos;s
                                                        <ChevronRight className="ml-2 h-4 w-4"/>
                                                    </Button>
                                                </HoverCardTrigger>
                                                <HoverCardContent
                                                    className={'-mb-[3.25rem] ml-[46.25rem] bg-yellow-400 border-yellow-300 w-96'}>
                                                    <div className={'grid grid-rows-1 grid-cols-[auto]'}>
                                                        <Image src={'/POI/EPLAN-Afdrukopdracht.png'}
                                                               alt={'e-plan schema'}
                                                               width={2339} height={1653}
                                                               className={'hover:scale-150 rounded-md'}/>
                                                    </div>
                                                </HoverCardContent>
                                            </HoverCard>
                                        </>
                                    )}
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>
                    <div className={'absolute bottom-[24%] left-[43%] z-[3]'}>
                        <HoverCard>
                            <HoverCardTrigger className={'hover:cursor-pointer'}>
                                <div className={'w-[11vw] h-[22vh]'}>
                                    <Image
                                        src={'/front-page/referee.png'}
                                        alt={'scheidsrechter'}
                                        fill={true}
                                        className={'object-contain'}
                                    />
                                </div>
                            </HoverCardTrigger>
                            <HoverCardContent className={'-mt-5 bg-yellow-400 border-yellow-300 w-auto'}>
                                <div className={'flex flex-row max-h-[128px] gap-x-5'}>
                                    <Image
                                        src={'/front-page/vrouweJustitia.png'}
                                        alt={'vrouwe justitia'}
                                        width={64}
                                        height={64}
                                        className={'w-auto max-h-[128px]'}
                                    />
                                    {loggedIn ? (
                                        <EditableText
                                            initialText={referee && referee[0] ? referee[0].text : ""}
                                            onSave={(value) => referee && referee[0] ? updateReferee(referee[0].id, 'text', value) : console.error('No referee found')}
                                            className="border-r-2 border-amber-200 pr-5"
                                        />
                                    ) : (
                                        <p className={'border-r-2 border-amber-200 pr-5'}>{referee && referee[0] ? referee[0].text : ""}</p>
                                    )}
                                    <HoverCard>
                                        <HoverCardTrigger
                                            className={'flex p-2 rounded-md py-3 max-h-5 items-center justify-center hover:cursor-pointer'}
                                        >
                                            Voorwaarden
                                            <ChevronRight className={'h-4 w-4'}/>
                                        </HoverCardTrigger>
                                        <HoverCardContent
                                            className={'-mt-[17.5%] ml-[82%] bg-yellow-400 border-yellow-300'}>
                                            {loggedIn ? (
                                                <EditableText
                                                    initialText={referee && referee[0] ? referee[0].TOU : ""}
                                                    onSave={(value) => referee && referee[0] ? updateReferee(referee[0].id, 'TOU', value) : console.error('No referee found')}
                                                    className="bg-transparent"
                                                />
                                            ) : (
                                                <p>{referee && referee[0] ? referee[0].TOU : ""}</p>
                                            )}
                                        </HoverCardContent>
                                    </HoverCard>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    </div>

                    {/* Right Side */}
                    {pois2?.map(poi => (
                        <POI2
                            key={poi.id}
                            loggedIn={loggedIn}
                            positionX={poi.positionX}
                            positionY={poi.positionY}
                            imageSrc={poi.imageSrc}
                            header={
                                loggedIn ? (
                                    <EditableText
                                        initialText={poi.header}
                                        onSave={(value) => updatePoi2(poi.id, 'header', value)}
                                        className="bg-transparent"
                                    />
                                ) : (
                                    poi.header
                                )
                            }
                            text={
                                loggedIn ? (
                                    <EditableText
                                        initialText={poi.text}
                                        onSave={(value) => updatePoi2(poi.id, 'text', value)}
                                        className="bg-transparent"
                                    />
                                ) : (
                                    poi.text
                                )
                            }
                            extraImageSrc={poi.extraImageSrc}
                        />
                    ))}
                </div>
                <div className={'absolute bottom-0 left-0 z-[2] -scale-x-[1]'}>
                    <Link href={'#footer'}>
                        <div
                            className="w-auto max-h-[64px] relative flex items-center text-[#EFC101]"
                        >
                            <div
                                className="before:rounded-bl-[5px] rotate-90 relative scale-[4.5] pr-0 right-[60px] bottom-20 w-[50px] p-5 font-sans bg-no-repeat rounded-md before:content-[''] before:absolute before:top-0 before:right-0 before:w-[1.35em] before:h-[3.2em] before:bg-[linear-gradient(to_left_bottom,_transparent_50%,_#EFC101_0,_#FFE701_27px,_#9B7D00)] before:transform before:translate-x-[-0.8em] before:translate-y-[-0.73em] before:rotate-[-36.7deg] before:shadow-[0_6px_4px_-4px_#eedbd6]">
                                <h2 className="m-0 -rotate-[150deg] text-black bg-white absolute -top-4 text-[6px] -right-2.5 w-[54px] h-[32px] text-center">
                                    <span
                                        className={'mr-4 text-[4.5px] absolute -top-[4px] left-[6px] -scale-x-[1] rotate-[60deg] flex items-center text-center flex-col'}>DIEP GAAN<ChevronDown
                                        size={6}/></span>
                                </h2>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    )
};

export default InformationSection;