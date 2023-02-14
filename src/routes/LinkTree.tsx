import { component$, $ } from '@builder.io/qwik';


import links from "../content/LinkTree/links.json";


// components
import { Pfp } from '~/components/Pfp';


import './Stars.css';


export default component$(() => {

    const scrolling = $(() => {
        const view = document.getElementById("link-view");
        const stars2 = document.getElementById("stars2");
        const stars3 = document.getElementById("stars3");
        const top = view?.scrollTop || 0;

        if (!stars2 || !stars3) return


        stars2.style.marginBottom = "-" + (top / 50) + "px";
        stars3.style.marginBottom = "-" + (top / 500) + "px";


    })

    return (
        <div class={"star-bg absolute inset-0"}>

            <div id="stars2"></div>
            <div id="stars3"></div>

            <div onScroll$={scrolling} id="link-view" class={"absolute inset-0 z-10 flex flex-col items-center overflow-y-scroll scrollbar-hide "}>
                <div id="content-area" class={"w-full max-w-2xl flex flex-col items-center p-4 gap-4 h-fit"}>
                    <div class={"h-28 w-28 mt-16"}>
                        <Pfp />
                    </div>
                    <h1 class={"text-3xl font-bold text-center"}>
                        Lukas
                    </h1>
                    <h3 class={"text-xl font-semibold text-center -mt-2"}>
                        soli deo gloria.
                    </h3>

                </div>

            </div>


        </div>
    );
});



