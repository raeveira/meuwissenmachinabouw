import {Itim} from "next/font/google";
import Image from "next/image";
import POI from "@/components/POI";
import ImageSlider from "@/components/ImageSlider";

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
                <POI positionX={765} positionY={240} imageSrc={'/POI/waterstraal.jpg'} header={'Waterstraalsnijmachine'}
                     text={'De waterstraalsnijmachine is een onmisbare schakel in ons bedrijf. Rechtstreeks vanuit onze engineeringssoftware snijden we diverse machinedelen, in matateriaaldiktes van 0.3 tot 60mm in de meest uiteenlopende materialen. Van constructiestaal, RVS, Mangaanstaal, Titanium en zelfs Zirkonium. Alsook buijn a alle kunststoffen.'}/>
                {/* 6 */}
                <POI positionX={679} positionY={364} imageSrc={'/POI/freesbank.jpeg'} header={'CNC Freesmachine'}
                     text={'is een cnc freesmachine/ bewerkingscentrum een zeer belangrijke speler. In ons bedrijf wordt deze machine zowel aan de machine alsook vanaf afstand met het grootste gemak geprogrameerd voor enklestuks werk almede ookk serieproduktie.'}/>
                {/* 7 */}
                <POI positionX={730} positionY={505} imageSrc={'/POI/draaibank.jpg'} header={'Draaibank'}
                     text={'Voor elk bedrijf in de mechanische techniek is een cnc draaibank uiteraard een basisspeler.'}/>
                {/* 8 */}
                <POI positionX={470} positionY={450} imageSrc={'/POI/plaatwerk.jpg'} header={'Plaatwerk'}
                     text={'In onze engineering houden we er rekening mee dat we met plaatwerk dure lasbewerkingen kunnen vervangen door gezet plaatwerk'}/>
                {/* 9 */}
                <POI positionX={323} positionY={555} imageSrc={'/POI/robot.png'} header={'robotfirma en machinebouw'}
                     text={'Om het gat in mogelijkheden te dichten tussen robotfirma en machinebouwer zijn we gestart het de kennis over robottechniek in eigen huis te nemen.'}/>
                {/* 10 */}
                <POI positionX={125} positionY={575} imageSrc={'/POI/werkplaatsuitrusting.jpeg'}
                     header={'Werkplaatsuitrusting'}
                     text={'Werkplaatsuitrusting, zonder dat dit voor ons specialismes zijn, maar toch onmisbare competenties.'}/>
                {/* 11 */}
                <POI positionX={553} positionY={250} imageSrc={'/POI/vervoer.jpeg'} header={'Transport'}
                     text={'Om onze flexibiliteit te ondersteunen, maken we gebruik van eigen transport tot 6000kg.'}/>
                {/* 12 */}
                <POI positionX={253} positionY={355} imageSrc={'/POI/yingyang.png'} header={'Doel'}
                     text={'Het niet materiele doel van werk hebben we ook hoog in het vaandel staan.'}/>

                {/* Right Side */}
                <POI positionX={1068} positionY={538} imageSrc={'/default.png'} header={''}
                     text={''}/>
                <POI positionX={1343} positionY={430} imageSrc={'/default.png'} header={''}
                     text={''}/>
                <POI positionX={1660} positionY={350} imageSrc={'/default.png'} header={''}
                     text={''}/>
                <POI positionX={1468} positionY={365} imageSrc={'/default.png'} header={''}
                     text={''}/>
                <POI positionX={1170} positionY={362} imageSrc={'/default.png'} header={''}
                     text={''}/>
                <POI positionX={1118} positionY={265} imageSrc={'/default.png'} header={''}
                     text={''}/>
            </div>
        </section>
    )
};

export default InformationSection;