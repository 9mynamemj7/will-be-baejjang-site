import Image from "next/image";
import backgroundImage from "@/public/images/bg.jpg";
import grass_video from "@/public/bi/grass_video.webp";
import Navbar from "@/app/components/Navbar";
import Stack from "@/app/components/Stack";
import { info } from "@/constants";
import TextPart from "@/app/components/TextPart";

export default function Home() {
    return (
        <main className="absolute min-h-screen w-[300%]">
            <section>
                <div className="flex flex-col items-center w-2/6 h-screen">
                    <div className="mx-10 my-8">
                        <div className="w-[50rem] h-[5rem] mb-10">
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
                </div>
                <Image
                    fill
                    className="-z-50"
                    src={backgroundImage}
                    alt="main bg img"
                    objectFit="cover"
                    objectPosition="0"
                />
            </section>
        </main>
    );
}
