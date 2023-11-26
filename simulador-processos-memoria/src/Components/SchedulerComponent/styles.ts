import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 750px;
    background-color: #345366;
    padding: 30px;
    border-radius: 20px;
    min-height: 300px;
    overflow-x: scroll;

    .listStates {
        display: flex;
    }

`;

export const ProcessColor = styled.div`
    display: flex;
    align-items: center;
    width: 40px;
    height: 40px;


    .statusColor {
        width: 30px;
        height: 30px;
        background-color: ${(props) => props.color};
        border-radius: 10px;
    }
`;

export const Line = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Column = styled.div`
    padding: 3px 0;
    width: 40px;
    height: 40px;


    .statusColor {
        background-color: ${(props) => props.color};
        width: 100%;
        height: 100%;
    }
`;

