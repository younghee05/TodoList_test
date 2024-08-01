import { css } from "@emotion/react";

export const HeaderContainerLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const  TitleLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const h1Title = css`
    box-sizing: border-box;
    margin: 10px 0px;
    padding: 5px 7px 5px 5px;
    color: #ebebeb
`;

export const InputLayout = css`
    box-sizing: border-box;
    display: flex;
    margin-top: 10px;
    width: 400px;
    height: 40px;
    input:focus {outline:1px solid #000000;}
`;

export const Input = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    font-size: 18px;
    border: 1px solid #000000;
    cursor: pointer;
     
`;


export const ButtonLayout = css`
    box-sizing: border-box;
    width: 80px;
    height: 100%;
    border: 1px solid #000000;
    color:#ffffff;
    background-color: #555555;
    cursor: pointer;
`;

export const InputByLayout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    margin: 5px 1200px 0px 0px;
    height: 50px;
    *:focus {
        outline: 0;
    }
    
`;

export const dateInput = css`
    box-sizing: border-box;
    margin-left: 5px;
    border: 1px solid #000000;
    cursor: pointer;

`;
