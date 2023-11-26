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
        height: 100%;
        max-height: 323px;
    }   
`

export const ProcessList = styled.div`
    display: flex;
    flex-direction: column;
    border: 4px solid #000;
    height: 100%;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        background: gray;
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: #61A0AF;
    }


    .line {
        display: flex;
        border-top: 2px solid #00F6ED;
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
        border-left: 2px solid #00F6ED;
    }

    .desc {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 110px;
        background-color: #022F40;
    }

    .color {
        border-left: none;
    }

`