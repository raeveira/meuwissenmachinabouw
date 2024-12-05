import {Itim} from "next/font/google";
import Image from "next/image";
import POI from "@/components/POI";

const itim = Itim({
    weight: "400",
    preload: true,
    display: "swap",
    subsets: ["latin"],
});


const InformationSection = () => {
    return (
        <section id={'drawing'} className={`${itim.className} w-screen h-screen snap-start snap-always bg-[url("/front-page/design-and-engineering-materials-parallax-blue-1.jpg")] bg-left-bottom bg-cover bg-no-repeat bg-[#7A7A7A]`}>

            <div className={'flex flex-col justify-center w-full text-5xl pt-5 items-center tracking-wide text-[#000000]'}>
                <h1 className={'relative'}>Het begint met een Tekening
                    <span className={'absolute -right-[1.25rem] -top-2'}>
                        <Image src={'/front-page/marked.gif'} alt={'word highlighter'} width={224} height={96}
                               className={'select-none pointer-events-none'}/>
                    </span>
                </h1>
                <br/>
                <p className={'text-xl pt-[15px]'}>Öns speeldveld laat teamspelers lopen.</p>
                <p className={'text-xl'}>Zoals Johan Cruijff ooit zei: “Je gaat het pas zien als je het door hebt.”</p>
            </div>
            <Image src={'/front-page/vrouweJustitia.png'} alt={'soccerfield'} width={125} height={100} className={'absolute top-[8rem] left-[57.5rem] z-[1]'} />
            <div className={'w-screen h-[calc(100vh-140px)] relative z-[2]'}>
                <Image src={'/front-page/soccerfield.png'} alt={'soccerfield'} fill={true}
                       className={'object-cover select-none pointer-events-none max-desktop-sm:object-contain'}/>

                {/* Left Side */}
                {/* 5 */}
                <POI positionX={765} positionY={175} imageSrc={'/POI/waterstraal.jpg' }header={'Waterstraalsnijmachine'} text={'De waterstraalsnijmachine is een onmisbare schakel in ons bedrijf. Rechtstreeks vanuit onze engineeringssoftware snijden we diverse machinedelen, in matateriaaldiktes van 0.3 tot 60mm in de meest uiteenlopende materialen. Van constructiestaal, RVS, Mangaanstaal, Titanium en zelfs Zirkonium. Alsook buijn a alle kunststoffen.'}/>
                {/* 6 */}
                <POI positionX={679} positionY={297} imageSrc={'/POI/freesbank.jpeg'} header={'CNC Freesmachine'} text={'is een cnc freesmachine/ bewerkingscentrum een zeer belangrijke speler. In ons bedrijf wordt deze machine zowel aan de machine alsook vanaf afstand met het grootste gemak geprogrameerd voor enklestuks werk almede ookk serieproduktie.'}/>
                {/* 7 */}
                <POI positionX={730} positionY={520} imageSrc={'/POI/draaibank.jpg'} header={'Draaibank'} text={'Voor elk bedrijf in de mechanische techniek is een cnc draaibank uiteraard een basisspeler.'}/>
                {/* 8 */}
                <POI positionX={470} positionY={375} imageSrc={'/default.png'} header={'Plaatwerk'} text={'In onze engineering houden we er rekening mee dat we met plaatwerk dure lasbewerkingen kunnen vervangen door gezet plaatwerk'}/>
                {/* 9 */}
                <POI positionX={323} positionY={490} imageSrc={'/default.png'} header={'robotfirma en machinebouw'} text={'Om het gat in mogelijkheden te dichten tussen robotfirma en machinebouwer zijn we gestart het de kennis over robottechniek in eigen huis te nemen.'}/>
                {/* 10 */}
                <POI positionX={125} positionY={510} imageSrc={'/default.png'} header={'Werkplaatsuitrusting'} text={'Werkplaatsuitrusting, zonder dat dit voor ons specialismes zijn, maar toch onmisbare competenties.'}/>
                {/* 11 */}
                <POI positionX={553} positionY={185} imageSrc={'/POI/vervoer.jpeg'} header={'Transport'} text={'Om onze flexibiliteit te ondersteunen, maken we gebruik van eigen transport tot 6000kg.'}/>
                {/* 12 */}
                <POI positionX={253} positionY={290} imageSrc={'/POI/yingyang.png'} header={'Doel'} text={'Het niet materiele doel van werk hebben we ook hoog in het vaandel staan.'}/>

                {/* Right Side */}
                <POI positionX={1068} positionY={473} imageSrc={'/default.png'} header={''} text={''}/>
                <POI positionX={1343} positionY={365} imageSrc={'/default.png'} header={''} text={''}/>
                <POI positionX={1660} positionY={285} imageSrc={'/default.png'} header={''} text={''}/>
                <POI positionX={1468} positionY={300} imageSrc={'/default.png'} header={''} text={''}/>
                <POI positionX={1170} positionY={297} imageSrc={'/default.png'} header={''} text={''}/>
                <POI positionX={1118} positionY={200} imageSrc={'/default.png'} header={''} text={''}/>
            </div>
        </section>
    )
};

export default InformationSection;