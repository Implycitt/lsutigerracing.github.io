import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { revealPage } from '../helpers/intro';
import Intro from '../assets/images/Home/Intro.svg';

const SLIDE_AT = 1.4;
const SLIDE_SECONDS = 1;
const NAVBAR_PAUSE = 0.1;
const NAVBAR_SECONDS = 0.7;
const STORAGE_KEY = 'tr-intro-played';

const shouldPlay = () => {
    try {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
        return navigation?.type === 'reload' || sessionStorage.getItem(STORAGE_KEY) !== '1';
    } catch {
        return true;
    }
};

const markPlayed = () => {
    try {
        sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
    }
};

export const IntroOverlay = () => {
    const [playing, setPlaying] = useState(shouldPlay);
    const overlayRef = useRef<HTMLDivElement>(null);
    const lockupRef = useRef<HTMLImageElement>(null);

    useLayoutEffect(() => {
        if (!playing) {
            revealPage();
            return;
        }

        markPlayed();

        const overlay = overlayRef.current;
        if (!overlay) {
            revealPage();
            return;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const navbar = document.querySelector<HTMLElement>('.navbar');
        const lockup = lockupRef.current;
        if (lockup) {
            const width = Math.round(lockup.getBoundingClientRect().width);
            lockup.style.width = `${width}px`;
            lockup.style.height = `${Math.round((width * 200) / 474)}px`;
        }

        if (navbar) {
            gsap.set(navbar, { xPercent: -50, x: 0, yPercent: -320, opacity: 0 });
        }

        const timeline = gsap.timeline({ paused: true, onComplete: () => setPlaying(false) });

        timeline
            .call(revealPage, [], SLIDE_AT)
            .to(overlay, { yPercent: 100, duration: SLIDE_SECONDS, ease: 'power3.inOut' }, SLIDE_AT);

        if (navbar) {
            timeline.to(
                navbar,
                { yPercent: 0, opacity: 1, duration: NAVBAR_SECONDS, ease: 'back.out(1.6)' },
                SLIDE_AT + SLIDE_SECONDS + NAVBAR_PAUSE
            );
        }

        const start = () => timeline.play();

        if (lockup && !lockup.complete) {
            lockup.addEventListener('load', start, { once: true });
            lockup.addEventListener('error', start, { once: true });
        } else {
            start();
        }

        const total = SLIDE_AT + SLIDE_SECONDS + NAVBAR_PAUSE + NAVBAR_SECONDS;
        const failsafe = window.setTimeout(() => setPlaying(false), (total + 1) * 1000);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.clearTimeout(failsafe);
            lockup?.removeEventListener('load', start);
            lockup?.removeEventListener('error', start);
            timeline.kill();
            if (navbar) gsap.set(navbar, { clearProps: 'transform,opacity' });
        };
    }, [playing]);

    if (!playing) return null;

    return (
        <div className="intro-overlay" ref={overlayRef} aria-hidden="true">
            <img className="intro-overlay-lockup" ref={lockupRef} src={Intro} alt="" fetchPriority="high" />
        </div>
    );
};
