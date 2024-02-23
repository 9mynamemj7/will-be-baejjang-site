import Image from "next/image";
import grass_video from "@/public/bi/grass_video.webp";
import Navbar from "@/app/components/Navbar";
import Stack from "@/app/components/Stack";
import { info } from "@/constants";
import TextPart from "@/app/components/TextPart";
import MusicSheet from "@/app/components/MusicSheet";

export default function Profile() {
    return (
        <section className="relative w-[100%] h-[100vh]">
            <div className="w-[50%] h-[100%] flex flex-col justify-center items-center">
                <div className="w-[40%] h-[10%] mb-10">
                    <Navbar />
                </div>
                <div className="flex justify-center mb-10 pr-10 w-[100%] h-auto">
                    <div className="mr-10">
                        <Stack />
                    </div>
                    <div>
                        <Image
                            className="rounded-2xl"
                            src={grass_video}
                            alt="grass"
                        />
                    </div>
                </div>
                <div>
                    <TextPart info={info} />
                </div>
            </div>
            <div className="absolute top-0 left-[35%]">
                <MusicSheet />
            </div>
        </section>
    );
}