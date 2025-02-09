import Link from "next/link";
import "../../../styles/header.css"

interface ICustonLink {
    label: string
    href: string
}

export function HeaderButton(props: ICustonLink): JSX.Element  {
    return (
        <Link title={props.label} href={props.href} className="underline-hover w-[180px] flex justify-center items-center relative">
            <p>{props.label}</p>
            <div title="underline-hover" className="h-[4px] w-[85%] bg-red-900 absolute bottom-[10px] invisible"></div>
        </Link>
    )
}