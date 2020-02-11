import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset}; /* css 초기화 */
    @font-face { font-family: 'S-CoreDream-1Thin'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-1Thin.woff') format('woff'); font-weight: normal; font-style: normal; }
    @font-face { font-family: 'S-CoreDream-2ExtraLight'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-2ExtraLight.woff') format('woff'); font-weight: normal; font-style: normal; }
    @font-face { font-family: 'Recipekorea'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/Recipekorea.woff') format('woff'); font-weight: normal; font-style: normal; }
    body{
        background-color: white;
        text-decoration: none;
        font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', NanumBarunGothic, NanumGothic, 'Malgun Gothic', dotum, sans-serif;
        word-break: keep-all;
    }
    html *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'S-CoreDream-2ExtraLight', 'Noto Sans', sans-serif;
    }
    input {
        border: 0;
    }
    button {
        border: none;
        background: none;
        padding: 0;
    }
`;
