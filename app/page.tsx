'use client'
import FrontHeader from "@/components/Front-Header";
import Footer from "@/components/Footer";
import InformationSection from "@/components/Information-Section";
import { useEffect, useRef } from "react";

export default function Home() {
    const mainRef = useRef<HTMLDivElement>(null);
    const inactivityTime = 1500000000000; // in milliseconds // 15000

    useEffect(() => {
        let lastActivityTime = Date.now();

        const handleUserActivity = () => {
            lastActivityTime = Date.now();
        };

        const checkInactive = () => {
            const inactiveTime = Date.now() - lastActivityTime;
            if (inactiveTime > inactivityTime) {
                scrollToTop();
            }
        };

        const scrollToTop = () => {
            if (mainRef.current) {
                mainRef.current.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        };

        window.addEventListener('scroll', handleUserActivity);
        window.addEventListener('mousemove', handleUserActivity);
        window.addEventListener('keydown', handleUserActivity);
        window.addEventListener('click', handleUserActivity);
        window.addEventListener('touchstart', handleUserActivity);
        window.addEventListener('touchmove', handleUserActivity);

        const intervalId = setInterval(checkInactive, 500);

        return () => {
            window.removeEventListener('scroll', handleUserActivity);
            window.removeEventListener('mousemove', handleUserActivity);
            window.removeEventListener('keydown', handleUserActivity);
            window.removeEventListener('click', handleUserActivity);
            window.removeEventListener('touchstart', handleUserActivity);
            window.removeEventListener('touchmove', handleUserActivity);
            clearInterval(intervalId);
        };
    }, []);

    return (
        <main ref={mainRef} className={'snap-y snap-mandatory h-screen overflow-y-scroll'}>
            <FrontHeader/>
            <InformationSection/>
            <Footer />
        </main>
    );
}
