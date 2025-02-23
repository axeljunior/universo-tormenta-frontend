import Image from "next/image";
import imagePerfilTeste from "../public/default-profile.png";

export default function Perfil() {

    return (
        <main className="w-[97] h-[97] bg-zinc-750">
            <div className="h-lvh w-full bg-zinc-500 flex justify-center items-center">
                <div className="h-[850px] w-[800px] bg-neutral-100 flex flex-col justify-between rounded-[8px] relative">
                    <Image className="absolute top-[100px] left-[20px] rounded-full z-1" src={imagePerfilTeste} alt="" width={200} height={200} />
                    <div className="h-[200px] w-full bg-pink-950 bg-[url(./../public/headerLoginImage.jpg)] bg-repeat-x rounded-t-[8px] relative">
                        <h1 className="absolute left-[230px] top-[155px] text-[30px]">Nome Teste Teste Teste</h1>
                    </div>
                    <div className="w-[95%] h-[530px] self-center"></div>
                </div>
            </div>
        </main>
    );
}