'use client'
import FrontHeader from "@/components/Front-Header";
import Footer from "@/components/Footer";
import InformationSection from "@/components/Information-Section";
import {useEffect, useRef, useState} from "react";
import {LogOut} from "lucide-react";
import {removeSessionCookie} from "@/app/actions/removeSessionCookie";
import {Button} from "@/components/ui/button";
import {checkLoginStatus} from "@/app/actions/checkLoginStatus";
import { toast } from "sonner"

export default function Home() {
    const [loggedIn, setLoggedIn] = useState(false);
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

    const logout = async () => {
        await removeSessionCookie().then((data) => {
            if (data.success) {
                setLoggedIn(false);
                toast.success('Logged out successfully');
            } else {
                console.error('Failed to logout');
                toast.error('Failed to logout');
            }
        });
    }

    useEffect(() => {
        const checkSession = async () => {
            await checkLoginStatus().then((response) => {
                setLoggedIn(response.isLoggedIn);
            });
        }

        checkSession().then();
    }, []);

    return (
        <main ref={mainRef} className={'snap-y snap-mandatory h-screen overflow-y-scroll'}>
            <FrontHeader/>
            <InformationSection loggedIn={loggedIn}/>
            <Footer />
            {loggedIn && (
                <div className={'fixed bottom-2 right-2 rounded-md z-50 bg-white'}>
                    <Button variant={'ghost'} onClick={logout}
                            className={'flex items-center justify-center py-2 px-4 bg-yellow-300 hover:bg-yellow-200'}>
                        <span className={'text-[1.25em]'}>Logout</span>
                        <LogOut className={'min-w-5 min-h-5'}/>
                    </Button>
                </div>
            )}
        </main>
    );
}
