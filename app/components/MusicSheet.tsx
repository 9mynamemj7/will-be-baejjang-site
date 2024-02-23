import Image from "next/image";
import trebleClef from "@/public/images/treble-clef.svg";
import musicScore from "@/public/images/music_score.svg";

export default function MusicSheet() {
    return (
        <div>
            <div className="flex flex-row h-[100vh]">
                <Image
                    src={trebleClef}
                    alt=""
                />
                <Image
                    src={musicScore}
                    alt=""
                    style={{
                        width: '100%',
                    }}
                />
            </div>
            <div className="absolute top-80">
                음표부분
            </div>
        </div>
    );
}
