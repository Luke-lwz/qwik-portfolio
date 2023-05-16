import { component$ } from '@builder.io/qwik';



// Icons
import { LinkIcon, InstagramIcon, GithubIcon, HeadphonesIcon, HeartIcon, TwitterIcon } from 'lucide-qwik';


export function getIcon(icon?: string) {
    switch (icon) {
        case "instagram":
            return <InstagramIcon />
        case "github":
            return <GithubIcon />
        case "spotify":
            return <HeadphonesIcon />
        case "heart":
            return <HeartIcon />
        case "twitter":
            return <TwitterIcon />
        default:
            return <LinkIcon />
    }
}

export const LinkGroup = component$(() => {
    return (
        <div class={"w-full flex flex-col items-center"}>

        </div>
    );
});


export const Link = component$((props: { icon?: string, name: string, href: string }) => {
    const Icon = getIcon(props.icon);
    return (
        <a target="_blank" href={props.href} class={"clickable bg-white rounded-full p-5 text-primary flex justify-start items-center h-12 w-full gap-5"}>
            {Icon}
            <h3 class={"text-xl font-bold"}>
                {props.name}
            </h3>

        </a>
    );
});