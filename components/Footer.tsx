import Link from "next/link"
import {Mail} from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image";
import ImageSliderFooter from "@/components/ImageSliderFooter";
import React, {useEffect} from "react";

export default function Footer() {
  const [images, setImages] = React.useState([])

  useEffect(() => {
    fetch('/api/machines')
        .then(response => response.json())
        .then(data => setImages(data));
  }, []);

    const copyMail = () => {
      navigator.clipboard.writeText('info@meuwissenmachinebouw.nl')
      const copy = document.getElementById('clipboard-copy')
        copy?.classList.remove('hidden')
        setTimeout(() => {
            copy?.classList.add('hidden')
        }, 2000)
    }

  return (
      <footer
          id={'footer'}
          className="w-screen h-screen snap-start snap-always bg-white text-white flex flex-col justify-end relative">
        <div className={"absolute z-0 w-screen top-0 left-0 flex justify-between items-end h-full max-h-[665px] pt-10"}>
          <Image src={'/front-page/design-and-engineering-materials-parallax-blue-1.jpg'} alt={'tekening achtergrond'} fill={true} className={'object-cover relative -z-[1] select-none pointer-events-none'}/>
        </div>

        <ImageSliderFooter
            images={images}/>
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12 bg-black pt-8 relative z-[0]">
          <div className="grid grid-cols-3">
            {/* Address */}
            <div className={'flex flex-col gap-y-8 items-center'}>
              <Image src={'/Meuwissen-Machinebouw-logo-footer.png'} alt={'Meuwissen Machinebouw logo'} width={256}
                     height={256}/>
              <p className="text-gray-400 w-[256px]">
                Gulkerweg 1, 6017 PB Sint Odilienberg
              </p>
            </div>

            {/* Center */}
            <div className="flex gap-8">
              <h2 className="text-yellow-400 text-xl max-w-[246px]">
                Samen de wedstrijd bespreken met een kopje koffie?
              </h2>
              <Image src={'/coffee.png'} alt={'cup of coffee'} width={256} height={256}
                     className={' hover:-rotate-[20deg] hover:scale-125 transition-all duration-300'}/>
            </div>

            {/* Right */}
            <div className="max-w-xs pt-10 flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-2 min-w-max">
                <span>Bel ons:</span>
                <Link
                    href="tel:+31 6 216 483 15"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  +31 6 216 483 15
                </Link>
              </div>
              <div className={'ml-3.5 flex items-center flex-col gap-6 w-[110px] relative'}>
                  <Button
                      variant="outline"
                      className="border-yellow-400 bg-black text-yellow-400 hover:bg-yellow-400 hover:text-black"
                      onClick={copyMail}
                  >
                    <Mail className="mr-2 h-4 w-4"/>
                    Stuur een <br/>mail
                  </Button>
                <div className={'hidden flex flex-row absolute z-40 left-[125%] top-[10%] w-max border-yellow-400 bg-black text-yellow-400'} id={'clipboard-copy'}>
                    <p>Email gekopieerd</p>
                </div>
              </div>
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

