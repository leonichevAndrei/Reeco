import styled from "styled-components";
import { Printer } from "react-bootstrap-icons";

export const BodyBlock = styled.div`
    padding: 0 10vw;
    margin-top: 20px;
`;

export const BodyInnerBlock = styled.div`
    background-color: white;
    width: 100%;  
    display: flex;
    flex-direction: column;
    border: 1px solid #cccccc;
    border-radius: 10px;
    padding: 20px;
`;

export const BodyTop = styled.div`
    display: flex;
    flex-direction: row;
    height: 30px;
    margin-bottom: 20px;
`;

export const SearchBlock = styled.div`
    width: 40%;
    height: inherit;
`;

export const SearchInput = styled.input`
    border: 1px solid #ebebeb;
    width: 100%;
    border-radius: 20px;
    height: 35px;
    padding: 0 10px;
    font-size:0.9em;
    &:focus {
        outline: none;
    }
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
    font-size: 1em;
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

export const OrdImage = styled.div`
    display: flex;
`;