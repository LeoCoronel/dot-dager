// components/SoundButton.tsx
import { useEffect } from 'react';
import Guitar from "../assets/img/guitar.svg";

import * as m from "../paraglide/messages"

const SoundButton = () => {
    console.log("🎸")
    const playSound = () => {
        const audio = new Audio('/sounds/Am.mp3');
        audio.play();
    };

    useEffect(() => {
        const button = document.getElementById('tabs-with-card-item-3');
        if (button) {
            button.addEventListener('click', playSound);
        }

        // Cleanup al desmontar el componente
        return () => {
            if (button) {
                button.removeEventListener('click', playSound);
            }
        };
    }, []);

    return (
        <button
            type="button"
            className="hover:animate-jiggle hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            id="tabs-with-card-item-3"
            aria-selected="false"
            data-hs-tab="#tabs-with-card-3"
            aria-controls="tabs-with-card-3"
            role="tab"
        >
            <span className="flex gap-x-6">
                <img src={Guitar.src} alt="code" className="w-10 h-10" />
                <span className="grow">
                    <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                        {m.guitar()}
                    </span>
                    <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                        {m.guitarDesc()}
                    </span>
                </span>
            </span>
        </button>
    );
};

export default SoundButton;
