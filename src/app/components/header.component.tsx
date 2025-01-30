export function HeaderComponent() {
    return (
        <nav className="flex h-[80px] w-full sticky top-0 bg-zinc-900">
            <div title="MenuButtons" className="flex basis-11/12">
                <button title="Home" className=" bg-red-950 w-[180px]">HOME</button>
                <button title="Mapa" className=" bg-amber-950 w-[180px]">MAPA</button>
            </div>
            <div title="LoginButton" className="basis-1/12">
                <div title="LoginWrapper" className=" flex items-center justify-center bg-teal-950 size-full min-w-[100px]">
                    <button className="bg-black size-[70px] rounded-full">LOGIN</button>
                </div>
            </div>
        </nav>
    )
}
