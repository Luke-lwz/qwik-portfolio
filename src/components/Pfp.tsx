import { component$ } from '@builder.io/qwik';

export const Pfp = component$(() => {
    return (
        <div class={"rounded-full h-full w-full overflow-hidden shadow-sm"}>
            <img src="/pfp.jpg" alt="" class={" block h-0 min-h-full object-cover w-full object-center overflow-hidden "} />
        </div>
    );
});