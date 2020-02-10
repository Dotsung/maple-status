import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset}; /* css 초기화 */
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
        font-family: 'Noto Sans KR', 'Noto Sans', sans-serif;
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
