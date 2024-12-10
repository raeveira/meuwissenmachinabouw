import Link from "next/link"
import { Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image";

export default function Footer() {
  return (
      <footer
          id={'footer'}
          className="w-screen h-screen snap-start snap-always bg-white text-white flex flex-col justify-end relative">
        <div className={"absolute z-0 w-screen top-0 left-0 h-[25rem] flex justify-between"}>
          <Image src={'/morph.gif'} alt={'progress of machine giff'} height={345} width={615}
                 className={'object-contain h-full w-auto'}/>
          <p className={'text-base text-black mt-10 px-2 text-left font-normal'}>
            Waar de coach tijdens de opstelling de beste spelers op de juiste plek zet,<br/>
            zo zetten wij van Meuwissen Machinebouw de beste technieken in om de wedstrijd <br/>
            te winnen! Wellicht heeft u hierboven al ontdekt hoe Meeuwissen Machinebouw het <br/>
            voor elkaar krijgt om een wedstijd te spelen, waar 2 winnaars uitkomen.</p>
          <Image src={'/morph2.gif'} alt={'progress of machine giff'} height={345} width={615}
                 className={'object-contain h-full w-auto'}/>
        </div>

        {/* Top Banner */}
        <div
            className="mx-auto px-4 pr-8 py-6 flex items-center justify-between min-w-[750px] max-h-[195px] bg-black rounded-t-xl absolute left-1/2 -translate-x-1/2 top-[37%]">
          <div className="flex items-center gap-4">
            <h2 className="text-yellow-400 text-xl max-w-[246px]">
              Samen de wedstrijd bespreken met een kopje koffie?
            </h2>
            <Image src={'/coffee.png'} alt={'cup of coffee'} width={256} height={256}
                   className={'absolute -top-20 left-1/2 -translate-x-[65%] hover:-rotate-[20deg] hover:scale-125 transition-all duration-300'}/>
          </div>
          <div className={'w-[256px]'}/>
          <div className="flex items-end flex-col gap-2 min-w-max">
            <span>Bel ons:</span>
            <Link
                href="tel:+31 6 216 483 15"
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              +31 6 216 483 15
            </Link>
          </div>
          <div className={'ml-16 flex items-center flex-col gap-6 w-[110px]'}>
            <Link href="mailto:info@example.com">
              <Button
                  variant="outline"
                  className="border-yellow-400 bg-black text-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                <Mail className="mr-2 h-4 w-4"/>
                Stuur een <br/>mail
              </Button>
            </Link>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12 bg-black pt-32">
          <div className="grid grid-cols-3">
            {/* Address */}
            <div className={'flex flex-col gap-y-8 items-center'}>
              <Image src={'/Meuwissen-Machinebouw-logo-footer.png'} alt={'Meuwissen Machinebouw logo'} width={256}
                     height={256}/>
              <p className="text-gray-400 w-[256px]">
                Gulkerweg 1, 6017 PB Sint Odilienberg
              </p>
            </div>

            {/* Site Map */}
            <div className="flex gap-8 flex-col" />

            {/* Disclaimer */}
            <div className="max-w-xs">
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">Vrijwaring</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <Link href="https://linkedin.com" className="inline-block">
                <svg
                    className="h-6 w-6 text-gray-400 hover:text-yellow-400 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                  <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-4 border-t border-gray-800 text-center text-gray-400">
            <p>©2024 Meuwissen Machinebouw</p>
          </div>
        </div>
      </footer>
  )
}

