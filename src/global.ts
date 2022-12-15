import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
    /* --------------------------------- Primary Pallete --------------------------------- */
    --Color-primary: #27AE60;
    --Color-primary-50: #93D7AF;
    --Color-secondary: #EB5757;
    /* --------------------------- Grey Scale Palette --------------------------- */
    --gray-100: #333333;
    --grey-50: #828282;
    --grey-20: #E0E0E0;
    --grey-0: #F5F5F5;
    /* ---------------------------- Feedback Palette ---------------------------- */
    --Negative: #E60000;
    --Warning: #FFCD07;
    --Sucess: #168821;
}

.login-organizer{
    display: flex;
    width:100%;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
}

a{
    text-decoration: none;
    color: unset;
    width: 100%;
}

button{
    background-color: unset;
    border: none;
    outline: none;
    cursor: pointer;
}

ul{
    list-style: none;
}

.container {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0px 16px;
}

.pointer {
    cursor: pointer;
}

.hcontent {
    height: max-content;
}

.wcontent {
    width: max-content;
}

.flex {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.block {
    padding: 2.5rem;
}

* {
    font-family: 'Inter', sans-serif;
}

.heading {
    font-weight: bold;
}

.heading.one {
    font-size: 1.625rem;
}

.heading.two {
    font-size: 1.375rem;
}

.heading.three {
    font-size: 1.125rem;
}

.heading.four {
    font-size: .875rem;
}

.headline {
    font-weight: 400;
    font-size: 1rem;
}

.body {
    font-weight: 400;
    font-size: 0.875rem;
}

.body-600 {
    font-weight: 600;
    font-size: 0.875rem;
}

.caption {
    font-weight: 400;
    font-size: .75rem;
}

.green {
    color: green;
}

.white {
    color: white;
}

.grey {
    color: var(--grey-50)
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 100%;
}

@media (max-width:900px){
    .login-organizer{
    display: flex;
    flex-direction: column;
    width:100%;
    justify-content: stretch;
    gap: 20px;
}
}

`;
