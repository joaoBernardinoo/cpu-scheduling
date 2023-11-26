import styled from 'styled-components';

export const Container = styled.div`

    .process-manager {
        display: flex;
        flex-direction: column;
        width: 750px;
        background-color: #345366;
        align-items: center;
        padding: 30px;
        border-radius: 20px;
    }
`

export const ProcessList = styled.div`
    display: flex;
    flex-direction: column;
    border: 4px solid #000;

    .line {
        display: flex;
        border-top: 2px dashed #022F40;
    }
    
    .line-primary {
        border-top: none;
    }

    .cell {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 110px;
        border-left: 2px dashed #022F40;
    }

    .desc {
        background-color: #022F40;
        border-bottom: 4px solid #000;
    }

    .color {
        border-left: none;
    }

`