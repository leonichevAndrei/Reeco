import styled from "styled-components";
import { X } from "react-bootstrap-icons";
import { DefaultInput } from "./common";

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
    justify-content: right;
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

export const PopMiddle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 40px;
`;

export const PopBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    padding: 10px 40px 35px 0;
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

export const PopInput = styled(DefaultInput)`
    width: 100px;
    border-radius: 15px;
    background-color: #f8f8f8;
    border-color: #dfdfdf;
`;

export const PopLinePlus = styled.div`
    font-size: 0.9em;
    line-height: 30px;
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

export const PopReasSelect = styled.button`
    border: 1px solid #ebebeb;
    background-color: white;
    border-radius: 20px;
    height: 35px;
    padding: 0 10px;
    font-size:0.9em;
    margin-right: 10px;
    &:hover {
        background-color: #ebebeb;
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