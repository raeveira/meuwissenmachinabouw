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

const itim = Itim({
    weight: "400",
    preload: true,
    display: "swap",
    subsets: ["latin"],
});

const InformationSection = () => {
    const [images, setImages] = useState<string[]>([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [title, setTitle] = useState("Het begint met een Tekening");
    const [subtitle1, setSubtitle1] = useState("Ons speeldveld laat teamspelers lopen.");
    const [subtitle2, setSubtitle2] = useState("Zoals Johan Cruijff ooit zei: \"Je gaat het pas zien als je het door hebt.\"");

    useEffect(() => {
        fetch('/api/partners')
            .then(response => response.json())
            .then(data => setImages(data));
    }, []);

    setLoggedIn(true)

    return (
        <>
            <section id={'drawing'}
                     className={`relative ${itim.className} w-screen h-screen overflow-hidden snap-start snap-always bg-[url("/front-page/design-and-engineering-materials-parallax-blue-1.jpg")] bg-left-bottom bg-cover bg-no-repeat bg-[#7A7A7A]`}>
                <div
                    className={'flex flex-col justify-center w-full text-[2.5vw] pt-5 items-center tracking-wide text-[#000000] relative z-[3] select-none'}>
                    <h1 className={'relative'}>
                        {loggedIn ? (
                            <EditableText
                                initialText={title}
                                onSave={setTitle}
                                className=""
                            />
                        ) : (
                            title
                        )}
                        <span className={'absolute -right-[3.5%]'}>
            <Image src={'/front-page/marked.gif'} alt={'word highlighter'} width={224} height={96} unoptimized={true}
                   className={'select-none pointer-events-none w-[12vw] h-[8.2vh]'}/>
          </span>
                    </h1>
                    <br/>
                    <div className={'text-[1vw] mt-[36px] text-white rounded-t-md bg-[#D34E3B] px-2'}>
                        {loggedIn ? (
                            <EditableText
                                initialText={subtitle1}
                                onSave={setSubtitle1}
                                className="bg-transparent"
                            />
                        ) : (
                            subtitle1
                        )}
                    </div>
                    <div className={'text-[1vw] text-white rounded-t-md bg-[#D34E3B] px-2'}>
                        {loggedIn ? (
                            <EditableText
                                initialText={subtitle2}
                                onSave={setSubtitle2}
                                className="bg-transparent"
                            />
                        ) : (
                            subtitle2
                        )}
                    </div>
                </div>
                <div className={'w-screen h-screen -bottom-[4.35rem] absolute z-[2]'}>
                    <Image src={'/front-page/meeuwissen-2.6.png'} alt={'soccerfield'} fill={true}
                           className={'object-cover select-none pointer-events-none max-desktop-sm:object-contain'}/>
                    <div
                        className="absolute z-[3] w-[65.28vw] h-[4.2vh] bg-[#EFC101] top-[21.1%] left-[19.05%] overflow-hidden select-none pointer-events-none">
                        <ImageSlider
                            images={images}/>
                    </div>
                    {/* Left Side */}
                    {/* 5 */}
                    <POI positionX={39.8} positionY={26.6} imageSrc={'/POI/waterstraalsnijder.png'}
                         header={'Waterstraalsnijmachine'}
                         text={'De waterstraalsnijmachine is een onmisbare schakel in ons bedrijf. Rechtstreeks vanuit onze engineeringssoftware snijden we diverse machinedelen, in matateriaaldiktes van 0.3 tot 60mm in de meest uiteenlopende materialen. Van constructiestaal, RVS, Mangaanstaal, Titanium en zelfs Zirkonium. Alsook buijn a alle kunststoffen.'}/>
                    {/* 6 */}
                    <POI positionX={35.4} positionY={39.5} imageSrc={'/POI/freesbank.png'} header={'CNC Freesmachine'}
                         text={'is een cnc freesmachine/ bewerkingscentrum een zeer belangrijke speler. In ons bedrijf wordt deze machine zowel aan de machine alsook vanaf afstand met het grootste gemak geprogrameerd voor enklestuks werk almede ookk serieproduktie.'}/>
                    {/* 7 */}
                    <POI positionX={38} positionY={58} imageSrc={'/POI/draaibank.png'} header={'Draaibank'}
                         text={'Voor elk bedrijf in de mechanische techniek is een cnc draaibank uiteraard een basisspeler.'}/>
                    {/* 8 */}
                    <POI positionX={24.6} positionY={49} imageSrc={'/POI/plaatwerk.png'} header={'Plaatwerk'}
                         text={'In onze engineering houden we er rekening mee dat we met plaatwerk dure lasbewerkingen kunnen vervangen door gezet plaatwerk'}/>
                    {/* 9 */}
                    <POI positionX={16.9} positionY={60.2} imageSrc={'/POI/robot.png'}
                         header={'robotfirma en machinebouw'}
                         text={'Om het gat in mogelijkheden te dichten tussen robotfirma en machinebouwer zijn we gestart het de kennis over robottechniek in eigen huis te nemen.'}/>
                    {/* 10 */}
                    <POI positionX={10} positionY={55} imageSrc={'/POI/werkplaatsuitrusting.jpeg'}
                         header={'Werkplaatsuitrusting'}
                         text={'Werkplaatsuitrusting, zonder dat dit voor ons specialismes zijn, maar toch onmisbare competenties.'}/>
                    {/* 11 */}
                    <POI positionX={28.8} positionY={27.4} imageSrc={'/POI/vervoer.png'} header={'Transport'}
                         text={'Om onze flexibiliteit te ondersteunen, maken we gebruik van eigen transport tot 6000kg.'}/>
                    {/* 12 */}
                    <POI positionX={13.1} positionY={39} imageSrc={'/POI/yingyang.png'} header={'Doel'}
                         text={'Het niet materiele doel van werk hebben we ook hoog in het vaandel staan.'}/>

                    {/* Middle */}
                    <div
                        className={'absolute top-[46.85%] left-[51.75%] -translate-x-1/2 -translate-y-1/2 w-[14vw] h-[14vh] rounded-[4rem] grid grid-cols-2 grid-rows-2 z-[5] hover:cursor-pointer'}>
                        <div className={'rounded-tl-[4rem] relative group'}>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Image src={'/front-page/freesunit xella.JPG'} alt={''} fill={true}
                                           className={'object-cover rounded-tl-[4rem] group-hover:scale-150 group-hover:z-[4] group-hover:rounded-[.5rem] transition-transform duration-300'}/>
                                </HoverCardTrigger>
                                <HoverCardContent
                                    className={'mt-20 bg-yellow-400 border-yellow-300 group-hover:scale-100 transition-transform duration-300'}>
                                    <h1 className={'text-2xl font-semibold'}>Software</h1>
                                    <p className={'text-sm'}>Voor onze engineering maken wij gebruik van 3d software,
                                        waar tevens de werkplaatstekeningen in aangemaakt worden, als ook animaties,
                                        sterkte berekeningen, en eventueel een bill off material export naar ons erp
                                        systeem.</p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                        <div className={'rounded-tr-[4rem] relative group'}>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Image src={'/front-page/lisaas.png'} alt={''} fill={true}
                                           className={'object-cover rounded-tr-[4rem] group-hover:scale-150 group-hover:z-[4] group-hover:rounded-[.5rem] transition-transform duration-300'}/>
                                </HoverCardTrigger>
                                <HoverCardContent
                                    className={'mt-20 bg-yellow-400 border-yellow-300 group-hover:scale-100 transition-transform duration-300'}>
                                    <h1 className={'text-2xl font-semibold'}>ERP Systeem</h1>
                                    <p className={'text-sm'}>in een multidiciplinair bedrijf is het van belang een goede
                                        organisatie struktuur te hebben door middel Enterprice Recource Planning, zodat
                                        urenboekingen, inkopen, verkopen volgens een bepaalde standaard verlopen.</p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                        <div className={'rounded-bl-[4rem] relative group'}>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Image src={'/front-page/sterkte berekening.jpeg'} alt={''} fill={true}
                                           className={'object-cover rounded-bl-[4rem] group-hover:scale-150 group-hover:z-[4] group-hover:rounded-[.5rem] transition-transform duration-300'}/>
                                </HoverCardTrigger>
                                <HoverCardContent
                                    className={'mt-20 bg-yellow-400 border-yellow-300 group-hover:scale-100 transition-transform duration-300'}>
                                    <h1 className={'text-2xl font-semibold'}>Berekeningen</h1>
                                    <p className={'text-sm'}>Om onze ontwerpen te optimaliseren, of inzichtelijk te
                                        maken,
                                        maken we oa gebruik van CAE berekeningen.</p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                        <div className={'rounded-br-[4rem] relative group'}>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Image src={'/front-page/E-plan.png'} alt={''} fill={true}
                                           className={'object-cover rounded-br-[4rem] group-hover:scale-150 group-hover:z-[4] group-hover:rounded-[.5rem] transition-transform duration-300'}/>
                                </HoverCardTrigger>
                                <HoverCardContent
                                    className={'mt-20 bg-yellow-400 border-yellow-300 group-hover:scale-100 transition-transform duration-300'}>
                                    <h1 className={'text-2xl font-semibold'}>E-Plan</h1>
                                    <p className={'text-sm'}>voor de E-engineering werken wij met het algemeen gebruikte
                                        programma E-plan.</p>
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
                                                <Image src={'/POI/EPLAN-Afdrukopdracht.png'} alt={'e-plan schema'}
                                                       width={2339} height={1653}
                                                       className={'hover:scale-150 rounded-md'}/>
                                            </div>
                                        </HoverCardContent>
                                    </HoverCard>

                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>
                    <div className={'absolute bottom-[24%] left-[43%] z-[3]'}>
                        <HoverCard>
                            <HoverCardTrigger className={'hover:cursor-pointer'}>
                                <div className={'w-[11vw] h-[22vh]'}>
                                    <Image src={'/front-page/referee.png'} alt={'scheidsrechter'} fill={true}
                                           className={'object-contain'}/>

                                </div>
                            </HoverCardTrigger>
                            <HoverCardContent className={'-mt-5 bg-yellow-400 border-yellow-300 w-auto'}>
                                <div className={'flex flex-row max-h-[128px] gap-x-5'}>
                                    <Image src={'/front-page/vrouweJustitia.png'} alt={'vrouwe justitia'} width={64}
                                           height={64} className={'w-auto max-h-[128px]'}/>
                                    <p className={'border-r-2 border-amber-200 pr-5'}>Lorem ipsum</p>
                                    <HoverCard>
                                        <HoverCardTrigger
                                            className={'flex p-2 rounded-md py-3 max-h-5 items-center justify-center hover:cursor-pointer'}>
                                            Voorwaarden
                                            <ChevronRight className={'h-4 w-4'}/>
                                        </HoverCardTrigger>
                                        <HoverCardContent
                                            className={'-mt-[17.5%] ml-[82%] bg-yellow-400 border-yellow-300'}>
                                            voorwaarden gaan hier
                                        </HoverCardContent>
                                    </HoverCard>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    </div>

                    {/* Right Side */}
                    <POI2 positionX={55.6} positionY={58.7} imageSrc={'/POI/product1.jpg'} header={''}
                          text={''}/>
                    <POI2 positionX={70} positionY={47.7} imageSrc={'/POI/product2.png'} header={''}
                          text={''}/>
                    <POI2 positionX={86.5} positionY={38.5} imageSrc={'/front-page/cup.png'}
                          header={'Materialistiche beloning.'}
                          text={'Elke zege wordt door ons uitbundig gevierd.'}/>
                    <POI2 positionX={76.4} positionY={39.5} imageSrc={'/POI/product3.jpg'} header={''}
                          text={''}/>
                    <POI2 positionX={60.94} positionY={39.3} imageSrc={'/POI/product4.jpeg'} header={''}
                          text={''}/>
                    <POI2 positionX={58.23} positionY={29} imageSrc={'/POI/product5.png'} header={''}
                          text={''}/>
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