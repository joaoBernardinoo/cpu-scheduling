import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 750px;
    background-color: #345366;
    padding: 30px;
    gap: 20px;
    border-radius: 20px;
    min-height: 300px;
    overflow-x: scroll;

    .listStates {
        display: flex;
    }

`;

export const Line = styled.div`
`;

export const Column = styled.div`
    border: 1px solid black;
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.color};
`;