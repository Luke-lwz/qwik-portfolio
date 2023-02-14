import { component$, Slot } from '@builder.io/qwik';

import Header from '../components/header/header';



export default component$(() => {
  return (
    <div class={"absolute inset-0 overflow-hidden"}>
      <main>
        <Header />
      
      <Slot />
      
      {/* <footer class={"bg-transparent absolute w-fit left-2 bottom-2 text-xs opacity-50"}>
        <div class="flex flex-col justify-center w-fit bg-transparent items-center">
          <p class={""}>
            &#169; Lukas Lunkwitz
          </p>
        </div>
      </footer> */}
      </main>
    </div>
  );
});
