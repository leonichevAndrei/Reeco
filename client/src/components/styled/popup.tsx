import styled from "styled-components";
import { X, Search } from "react-bootstrap-icons";
import { DefInput } from "./common";

type PopupWrapProps = { show: boolean };

export const PopupWrap = styled.div`
    display: ${(props: PopupWrapProps) => props.show ? "flex" : "none"};
`;

const PopupUnder = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
`;

export const PopupBack = styled(PopupUnder)`
    z-index: 20;
    backdrop-filter: blur(2px) brightness(70%) contrast(70%);
`;

export const PopupBackDark = styled(PopupUnder)`
    z-index: 15;
    background-color: black;
    opacity: 60%;
`;

export const PopupBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 25;
`;

export const PopupTop = styled.div`
    flex-grow: 100;
`;

export const PopupMid = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`;

export const PopupMidLt = styled.div`
    flex-grow: 1;
`;

type PopupProps = { size: number };

export const Popup = styled.div`
    width: ${(props: PopupProps) => `${props.size}vw`};
    flex-grow: 0;
    background: white;
    border-radius: 15px;
    box-shadow: 0 15px 20px -20px black;
`;

export const PopupMidRt = styled.div`
    flex-grow: 1;
`;

export const PopupBott = styled.div`
    flex-grow: 100;
`;

export const PopTop = styled.div`
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
    justify-content: right;
`;

export const PopTopTitle = styled.div`
    flex-grow: 1;
    padding: 20px 0 0 25px;
    font-weight: bold;
    font-size: 1.2em;
`;

export const PopClose = styled.a`
    cursor: pointer;
    position: relative;
    left: -20px;
    top: 15px;
`;

export const PopCloseIcon = styled(X)`
    color: black;
`;

export const PopLine = styled.div`
    width: 100%;
    padding-top: 20px;
    display: flex;
    justify-content: center;
`;

export const PopLineIn = styled.div`
    width: calc(100% - 50px);
    height: 1px;
    background-color: #7d7d7d;
`;

export const PopMiddle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 40px;
`;

export const PopMiddleAdd = styled(PopMiddle)`
    padding: 10px 25px;
    overflow: scroll;
`;

export const PopBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    padding: 10px 30px 25px 0;
`;

export const PopTitle = styled.div`
    font-weight: bold;
    font-size: 1.2em;
`;

export const PopCompany = styled.div`
    color: #727272;
`;

export const PopMain = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 20px 0;
`;

export const PopImageBox = styled.div`
    
`;

export const PopImg = styled.img`
    max-width: 150px;
    max-height: 150px;
`;

export const PopMainBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-grow: 1;
    height: 150px;
    padding: 0 0 0 20px;
`;

export const PopMainLine = styled.div`
    height: 30px;
    display: flex;
    flex-direction: row;
`;

export const PopLineTitle = styled.div`
    width: 30%;
`;

export const PopLineInput = styled.div`
    padding-right: 10px;
`;

type PopInputProps = {
    size: number
}

export const PopInput = styled(DefInput)`
    width: ${(props: PopInputProps) => `${props.size}px`};
    border-radius: 15px;
    background-color: #f8f8f8;
    border-color: #dfdfdf;
`;

export const PopLinePlus = styled.div`
    font-size: 0.9em;
    line-height: 30px;
`;

export const PopLinePlusChange = styled(PopLinePlus)`
    color: #BFBFBF;
`;

export const PopPlus = styled.div`
    width: 40px;
    display: flex;
    justify-content: left;
`;

export const PopPlusButton = styled.button`
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 30px;
    color: white;
    border: none;
    background-color: #4bc24b;
    &:hover {
        background-color: #359f35;
    }
`;

export const PopChooseTop = styled.div`
    
`;

export const ReasonBold = styled.span`
    font-weight: bold;
`;

export const ReasonGrey = styled.span`
    color: #bfbfbf;
`;

export const PopReason = styled.div`
    padding-top: 10px;
`;

type PopReasSelectProps = {
    active: boolean;
}

export const PopReasSelect = styled.button`
    border: 1px solid #ebebeb;
    background-color: ${(props: PopReasSelectProps) => props.active ? "#4bc24b" : "white"};
    color: ${(props: PopReasSelectProps) => props.active ? "white" : "black"};
    border-radius: 20px;
    height: 35px;
    padding: 0 10px;
    font-size:0.9em;
    margin-right: 10px;
    &:hover {
        background-color: ${(props: PopReasSelectProps) => props.active ? "#4bc24b" : "#ebebeb"};
    }
`;

export const DialogWindow = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
`;

export const DialogTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const DialTitle = styled.div`
    font-weight: bold;
    font-size: 1.2em;
`;

export const DialClose = styled.a`
    cursor: pointer;
`;

export const DialogMiddle = styled.div`
    padding: 20px 0;
`;

export const DialogBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const PopSearchTitle = styled.div`
    padding: 10px 0 15px;
`;

export const PopSearchBlock = styled.div`

`;

const PopSearchDef = styled.div`
    height: 360px;
    display: flex;
`;

export const PopSearchEmpty = styled(PopSearchDef)`
    justify-content: center;
    align-items: center;
`;

export const PopSearchEmptyIcon = styled(Search)`
    color: #b2b2b2;
`;

export const PopSearchResults = styled(PopSearchDef)`
    padding: 20px 0 0 0;
`;

// export const xxx = styled.div`

// `;

// export const xxx = styled.div`

// `;

// export const xxx = styled.div`

// `;

// export const xxx = styled.div`

// `;

// export const xxx = styled.div`

// `;

// export const xxx = styled.div`

// `;

// export const xxx = styled.div`

// `;