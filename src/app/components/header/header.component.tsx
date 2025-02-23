import { useState } from "react";
import imagePerfilTeste from "../../../public/default-profile.png";
import Image from "next/image";
import { HeaderButton } from "./headerButton.component";
import Link from "next/link";

export function HeaderComponent() {
    const [togglePopover, setTogglePopover] = useState<boolean>(false);
    const [isLogged, setIsLogged] = useState<boolean>(true);

    return (
        <nav className="flex h-[80px] w-full sticky top-0 bg-zinc-900 z-10">
            <div title="MenuButtons" className="flex basis-11/12">
                <HeaderButton label="Home" href="/" />
                <HeaderButton label="Mapa" href="/" />
            </div>
            <div title="LoginButton" className="basis-1/12 min-w-[100px] size-full">
                {!isLogged ? (
                    <button className="w-full h-full cursor-pointer" onClick={() => setTogglePopover(!togglePopover)}>
                        <p>LOGIN</p>
                    </button>
                ) : (
                    <button className="w-full h-full flex justify-center items-center" onClick={() => setTogglePopover(!togglePopover)}>
                        <Image className="rounded-full" src={imagePerfilTeste.src} alt="" width={70} height={70} />
                    </button>
                )}
                {(togglePopover && isLogged) &&  (
                    <div className='bg-zinc-900 flex-col border-t-2 border-red-900'>
                        <Link href="/perfil" className="text-center text-[18px] h-[40px] flex justify-center items-center">Perfil</Link>
                        <div className="text-center text-[18px] h-[40px] flex justify-center items-center">Sair</div>
                    </div>
                )}
            </div>
        </nav>
    )
}
