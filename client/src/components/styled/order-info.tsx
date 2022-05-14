import styled from "styled-components";

export const InfoBlock = styled.div`
    padding: 0 10vw;
    margin-top: 20px;
    width: 100%;
`;

export const InfoInnerBlock = styled.div`
    background-color: white;
    width: 100%; 
    height: 100%;
    display: table;
    /* flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: stretch; */
    border: 1px solid #cccccc;
    border-radius: 10px;
    padding: 20px 20px;
`;

type InfoPartProps = {
    needDivider: boolean;
}

export const InfoPart = styled.div`
    height: 100%;
    padding: 0 20px;
    display: table-cell;
    /* flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap; */
    border-right: ${(props: InfoPartProps) => props.needDivider ? "1px solid #cccccc" : "none"};
`;

export const InfoTitle = styled.div`
    font-size: 0.9em;
    color: #727272;
`;

export const InfoText = styled.div`
    font-weight: bold;
    flex-grow: 1;
`;