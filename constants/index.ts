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
export const globalMenus: string[] = ["전체메뉴1", "전체메뉴2", "전체메뉴3"];
