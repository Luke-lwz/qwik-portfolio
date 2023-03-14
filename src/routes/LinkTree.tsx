import { component$, $, useSignal, useTask$ } from '@builder.io/qwik';


import links from "../content/LinkTree/links.json";





// components
import { Pfp } from '~/components/Pfp';


import './Stars.css';
import { Link } from '~/components/linktree';



import { FishIcon } from '~/components/icons/icons';



export const stati = [
    "Soli Deo Gloria",
    "Solus Christus",
    "Sola Fide",
    "Sola Scriptura",
    "Sola Gratia",
    "👌 Reingeguckt :()",
    "Lit!",
    "Jesus ist das Lamm, aber trotzdem ist er G.O.A.T",
]


export function rng(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


export default component$(() => {


    const status = useSignal("Soli Deo Gloria")

    const scrolling = $(() => {
        const view = document.getElementById("link-view");
        const stars2 = document.getElementById("stars2-c");
        const stars3 = document.getElementById("stars3-c");
        const top = view?.scrollTop || 0;

        if (!stars2 || !stars3) return


        stars2.style.marginBottom = "-" + (top / 5) + "px";
        stars3.style.marginBottom = "-" + (top / 5) + "px";


    })

    useTask$(() => {
        changeStatus()


        function changeStatus() {

            status.value = stati[rng(0, stati.length)]
        }
    })




    

    return (
        <div class={"star-bg absolute inset-0"}>

            <div id="stars2-c">
                <div id="stars2"></div>
            </div>
            <div id="stars3-c">
                <div id="stars3"></div>
            </div>



            <div onScroll$={scrolling} id="link-view" class={"absolute inset-0 z-10 flex flex-col items-center overflow-y-scroll scrollbar-hide pb-32 "}>
                <div class={"h-12 w-12 absolute top-2 left-4"}>

                    <FishIcon />
                </div>
                <div id="content-area" class={"w-full max-w-2xl flex flex-col items-center p-4 gap-4 h-fit"}>
                    <div class={"h-28 w-28 mt-16"}>
                        <Pfp />
                    </div>
                    <h1 class={"text-3xl font-bold text-center"}>
                        Lukas
                    </h1>
                    <h3 class={"text-xl font-semibold text-center -mt-2"}>
                        {status.value ? status.value : "Soli Deo Gloria"}
                    </h3>

                    <div class={"flex flex-col items-center w-full mt-4"}>
                        {links.map((group, i) => {
                            return (
                                <div key={i} class={"w-full flex flex-col items-center gap-4"}>
                                    {group?.links?.map(link => <Link key={link.name} {...link} />)}
                                </div>
                            )
                        })}
                    </div>



                </div>







            </div>


        </div>
    );
});



