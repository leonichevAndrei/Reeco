import styled from "styled-components";
import { Printer, CheckLg, X } from "react-bootstrap-icons";

export const BodyBlock = styled.div`
    padding: 0 10vw;
    margin-top: 20px;
`;

export const BodyInnerBlock = styled.div`
    background-color: white;
    width: 100%;  
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid #cccccc;
    border-radius: 10px;
    padding: 40px;
`;

export const BodyTop = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 30px;
    margin-bottom: 30px;
`;

export const SearchBlock = styled.div`
    width: 40%;
    height: inherit;
`;


export const AdditionalBlock = styled.div`
    width: 60%;
    height: inherit;
    display: flex;
    justify-content: right;
`;

export const AddItem = styled.div`
    
`;

export const PrintOrder = styled.div`
    margin-left: 20px;
`;

export const PrintOrderIcon = styled(Printer)`
    width: 50px;
    color: #336242;
    cursor: pointer;
    position: relative;
    top: 4px;
`;

export const BodyMain = styled.div`
    
`;

export const BodyTable = styled.table`
    width: 100%;
    height: 1px;
`;

export const OrderTableTh = styled.tr`
`;

export const OrderColumnTh = styled.td`
`;

type OCThInsideProps = {
    corner: string;
}

export const OCThInside = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    padding: 7px 0;
    color: #727272;
    font-size: 0.9em;
    padding: 7px 7px 7px 0;
    border: 1px solid #ebebeb;
    border-radius: ${(props: OCThInsideProps) => props.corner === "left" ? "20px 0 0 0" : props.corner === "right" ? "0 20px 0 0" : "0"};
    border-left: none;
    border-right: none;
    border-left: ${(props: OCThInsideProps) => props.corner === "left" ? "1px solid #ebebeb" : "none"};
    border-right: ${(props: OCThInsideProps) => props.corner === "right" ? "1px solid #ebebeb" : "none"};
`;

type OCInsideProps = {
    side: string;
    corner: string;
}

export const OCInside = styled(OCThInside)`
    padding: 7px 30px 7px 0;
    padding: ${(props: OCInsideProps) => props.side === "left" ? "0 15px" : "none"};
    padding-right: ${(props: OCInsideProps) => props.side === "right" ? "15px" : "none"};
    border-radius: ${(props: OCInsideProps) => props.corner === "left" ? "0 0 0 20px" : props.corner === "right" ? "0 0 20px 0" : "0"};
    border-left: ${(props: OCInsideProps) => props.side === "left" ? "1px solid #ebebeb" : "none"};
    border-right: ${(props: OCInsideProps) => props.side === "right" ? "1px solid #ebebeb" : "none"};
    border-top: none;
`;

export const OrderTableItem = styled.tr`
    
`;

export const OrderColumn = styled.td`
`;

export const OrdImage = styled.img`
    max-width: 40px;
    max-height: 40px;
    margin: 0 0px;
`;

export const StatusBlock = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Status = styled.div`
`;

type StatusMessProps = {
    type: string;
}

export const StatusMess = styled.div`
    color: white;
    border-radius: 20px;
    padding: 3px 10px;
    background-color: ${(props: StatusMessProps) => {
        switch(props.type) {
            case "missing-urgent": return "#d51b1b";
            default: return "green";
        }
    }};
`;

export const StatusOK = styled.a`
    cursor: pointer;
`;

export const StatusOKIcon = styled(CheckLg)`
    color: black;
    &:hover {
        color: green;
    }
`;

export const StatusX = styled.a`
    cursor: pointer;
`;

export const StatusXIcon = styled(X)`
    color: black;
    &:hover {
        color: green;
    }
`;

export const StatusEdit = styled.div`
`;

export const StatusEditLink = styled.div`
    cursor: pointer;
`;