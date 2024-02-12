import { IInfo } from "@/types"
// 상수 값(하드 코딩, 읽기 전용) 파일
// example 글로벌 네비게이션 메뉴 이름
/**
 * ## 사용예시
 * - 문자열 배열이나 간단한 구조의 객체를 많이 사용한다.
 * ```tsx
 * {
 *      import { globalMenus } from "@/constants"
 *      //...
 *      globalMenus.map((menu) => (<Link href={`/`} key={menu}>))
 * }
 * ```
 */


export const globalMenus: string[] = ["Profile", "Projects", "Info"];

export const info: IInfo = {
    name: "김민중",
    nickName: "윌비배짱",
    position: "프론트엔드 · 리액트 개발자",
    email: "people-kim@startlight-sangdan.com"
}
