import {Itim} from "next/font/google";
import Image from "next/image";
import POI from "@/components/POI";
import ImageSlider from "@/components/ImageSlider";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import {Button} from "@/components/ui/button";
import {ChevronRight} from "lucide-react";

const itim = Itim({
    weight: "400",
    preload: true,
    display: "swap",
    subsets: ["latin"],
});

const images = [
    '/partners/Lipro.JPG',
    '/partners/Marel.JPG',
    '/partners/Mazon.JPG',
    '/partners/Rockwool.JPG',
    '/partners/Seki Sui Jushi.JPG',
    '/partners/Smurfit Kappa Roermond papier.JPG',
    '/partners/Stork.JPG',
    '/partners/Vekoma.JPG',
    '/partners/Xella.JPG',
]


const InformationSection = () => {
    return (
        <section id={'drawing'}
                 className={`relative ${itim.className} w-screen h-screen snap-start snap-always bg-[url("/front-page/design-and-engineering-materials-parallax-blue-1.jpg")] bg-left-bottom bg-cover bg-no-repeat bg-[#7A7A7A]`}>

            <div
                className={'flex flex-col justify-center w-full text-5xl pt-5 items-center tracking-wide text-[#000000] relative z-[3] select-none'}>
                <h1 className={'relative'}>Het begint met een Tekening
                    <span className={'absolute -right-[1.25rem] -top-2'}>
                        <Image src={'/front-page/marked.gif'} alt={'word highlighter'} width={224} height={96}
                               className={'select-none pointer-events-none'}/>
                    </span>
                </h1>
                <br/>
                <p className={'text-xl mt-[15px] text-white rounded-t-md px-2'}>Öns speeldveld laat teamspelers
                    lopen.</p>
                <p className={'text-xl text-white rounded-md bg-[#D34E3B] px-2'}>Zoals Johan Cruijff ooit zei: “Je gaat
                    het pas zien als je het door hebt.”</p>
            </div>
            <Image src={'/front-page/vrouweJustitia.png'} alt={'soccerfield'} width={100} height={100}
                   className={'absolute top-[9rem] left-[58.5rem] z-[4]'}/>
            <div
                className="absolute z-[3] w-[65.35%] h-[39px] bg-[#EFC101] top-[28.7vh] left-[19vw] overflow-hidden select-none pointer-events-none">
                <ImageSlider
                    images={images}/>
            </div>
            <div className={'w-screen h-screen bottom-[70px] relative z-[2]'}>
                <Image src={'/front-page/meeuwissen-2.4.png'} alt={'soccerfield'} fill={true}
                       className={'object-cover select-none pointer-events-none max-desktop-sm:object-contain'}/>

                {/* Left Side */}
                {/* 5 */}
                <POI positionX={39.8} positionY={26.6} imageSrc={'/POI/waterstraal.jpg'} header={'Waterstraalsnijmachine'}
                     text={'De waterstraalsnijmachine is een onmisbare schakel in ons bedrijf. Rechtstreeks vanuit onze engineeringssoftware snijden we diverse machinedelen, in matateriaaldiktes van 0.3 tot 60mm in de meest uiteenlopende materialen. Van constructiestaal, RVS, Mangaanstaal, Titanium en zelfs Zirkonium. Alsook buijn a alle kunststoffen.'}/>
                {/* 6 */}
                <POI positionX={35.4} positionY={39.5} imageSrc={'/POI/freesbank.jpeg'} header={'CNC Freesmachine'}
                     text={'is een cnc freesmachine/ bewerkingscentrum een zeer belangrijke speler. In ons bedrijf wordt deze machine zowel aan de machine alsook vanaf afstand met het grootste gemak geprogrameerd voor enklestuks werk almede ookk serieproduktie.'}/>
                {/* 7 */}
                <POI positionX={38} positionY={58} imageSrc={'/POI/draaibank.jpg'} header={'Draaibank'}
                     text={'Voor elk bedrijf in de mechanische techniek is een cnc draaibank uiteraard een basisspeler.'}/>
                {/* 8 */}
                <POI positionX={24.6} positionY={49} imageSrc={'/POI/plaatwerk.jpg'} header={'Plaatwerk'}
                     text={'In onze engineering houden we er rekening mee dat we met plaatwerk dure lasbewerkingen kunnen vervangen door gezet plaatwerk'}/>
                {/* 9 */}
                <POI positionX={16.9} positionY={60.2} imageSrc={'/POI/robot.png'} header={'robotfirma en machinebouw'}
                     text={'Om het gat in mogelijkheden te dichten tussen robotfirma en machinebouwer zijn we gestart het de kennis over robottechniek in eigen huis te nemen.'}/>
                {/* 10 */}
                <POI positionX={7} positionY={63} imageSrc={'/POI/werkplaatsuitrusting.jpeg'}
                     header={'Werkplaatsuitrusting'}
                     text={'Werkplaatsuitrusting, zonder dat dit voor ons specialismes zijn, maar toch onmisbare competenties.'}/>
                {/* 11 */}
                <POI positionX={28.8} positionY={27.4} imageSrc={'/POI/vervoer.jpeg'} header={'Transport'}
                     text={'Om onze flexibiliteit te ondersteunen, maken we gebruik van eigen transport tot 6000kg.'}/>
                {/* 12 */}
                <POI positionX={13.1} positionY={39} imageSrc={'/POI/yingyang.png'} header={'Doel'}
                     text={'Het niet materiele doel van werk hebben we ook hoog in het vaandel staan.'}/>

                {/* Middle */}
                <div
                    className={'absolute top-[46.85%] left-[51.75%] -translate-x-1/2 -translate-y-1/2 w-[16.5rem] h-32 rounded-[4rem] grid grid-cols-2 grid-rows-2 z-[4] hover:cursor-pointer'}>
                    <div className={'bg-yellow-500 rounded-tl-[4rem] relative group border-t-2 border-l-2 border-white p-2'}>
                        <HoverCard>
                            <HoverCardTrigger>
                                <Image src={'/front-page/freesunit xella.JPG'} alt={''} fill={true}
                                       className={'object-cover rounded-tl-[4rem] group-hover:scale-150 group-hover:z-[3] group-hover:rounded-[.5rem] transition-transform duration-300'}/>
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
                    <div className={'bg-green-500 rounded-tr-[4rem] relative group border-t-2 border-r-2 border-white p-2'}>
                        <HoverCard>
                            <HoverCardTrigger>
                                <Image src={'/front-page/lisaas.png'} alt={''} fill={true}
                                       className={'object-cover rounded-tr-[4rem] group-hover:scale-150 group-hover:z-[3] group-hover:rounded-[.5rem] transition-transform duration-300'}/>
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
                    <div className={'bg-blue-500 rounded-bl-[4rem] relative group border-b-2 border-l-2 border-white p-2'}>
                        <HoverCard>
                            <HoverCardTrigger>
                                <Image src={'/front-page/sterkte berekening.jpeg'} alt={''} fill={true}
                                       className={'object-cover rounded-bl-[4rem] group-hover:scale-150 group-hover:z-[3] group-hover:rounded-[.5rem] transition-transform duration-300'}/>
                            </HoverCardTrigger>
                            <HoverCardContent
                                className={'mt-20 bg-yellow-400 border-yellow-300 group-hover:scale-100 transition-transform duration-300'}>
                                <h1 className={'text-2xl font-semibold'}>Berekeningen</h1>
                                <p className={'text-sm'}>Om onze ontwerpen te optimaliseren, of inzichtelijk te maken,
                                    maken we oa gebruik van CAE berekeningen.</p>
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                    <div className={'bg-pink-500 rounded-br-[4rem] relative group border-b-2 border-r-2 border-white p-2'}>
                        <HoverCard>
                            <HoverCardTrigger>
                                <Image src={'/front-page/E-plan.png'} alt={''} fill={true}
                                       className={'object-cover rounded-br-[4rem] group-hover:scale-150 group-hover:z-[3] group-hover:rounded-[.5rem] transition-transform duration-300'}/>
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
                                                <Image src={'/POI/EPLAN-Afdrukopdracht.png'} alt={'e-plan schema'} width={2339} height={1653} className={'hover:scale-150 rounded-md'} />
                                        </div>
                                    </HoverCardContent>
                                </HoverCard>

                            </HoverCardContent>
                        </HoverCard>
                    </div>
                </div>

                {/* Right Side */}
                <POI positionX={55.6} positionY={58.7} imageSrc={'/POI/product1.jpg'} header={''}
                     text={''}/>
                <POI positionX={70} positionY={47.7} imageSrc={'/POI/product2.png'} header={''}
                     text={''}/>
                <POI positionX={86.5} positionY={38.5} imageSrc={'/front-page/cup.png'} header={'Materialistiche beloning.'}
                     text={'Elke zege wordt door ons uitbundig gevierd.'}/>
                <POI positionX={76.4} positionY={39.5} imageSrc={'/POI/product3.jpg'} header={''}
                     text={''}/>
                <POI positionX={60.94} positionY={39.3} imageSrc={'/POI/product4.jpeg'} header={''}
                     text={''}/>
                <POI positionX={58.23} positionY={29} imageSrc={'/POI/product5.png'} header={''}
                     text={''}/>
            </div>
        </section>
    )
};

export default InformationSection;