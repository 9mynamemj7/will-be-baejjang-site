import Image from "next/image";
import trebleClef from "@/public/images/treble-clef.svg";
import musicScore from "@/public/images/music_score.svg";

export default function Project() {
    return (
        <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh]">
            <ol>
                프로젝트 표현부분
                <li>
                    어떻게 표현할지 고민중인데<br />
                    원래는 프로젝트를 누르면 옆으로 휠 움직여서 악보부분 보여줄 생각이었음<br />
                    근데 따로 페이지를 만들까도 생각<br />
                </li>
            </ol>
        </div>
    );
}
