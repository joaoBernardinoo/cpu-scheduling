import styled from 'styled-components';

export const Container = styled.div`
    .process-manager {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`

export const ProcessList = styled.div`
    display: flex;
    flex-direction: column;

    .line {
        display: flex;
    }

    .cell {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        width: 75px;
    }

`