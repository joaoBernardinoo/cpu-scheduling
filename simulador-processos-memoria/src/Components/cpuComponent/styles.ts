import styled from 'styled-components';

export const Container = styled.div`
    background-color: #022F40;
    padding: 0 5%;

    .title {
        font-family: "Oswald", sans-serif;
        color: #F0F7F4;
        font-size: 40px;
        margin-bottom: 20px;
    }

    .processesContainer {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

`;

export const PMContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: "Oswald", sans-serif;
    color: #F0F7F4;

    .buttonContainer {
        display: flex;
        gap:20px;
        margin-bottom: 10px;
    }

    .buttonPM {
        padding: 8px 12px;
        min-width: 150px;
        background-color: #00F6ED;
        border: 2px solid;
        border-radius: 20px;
        color: #022F40;
        font-size: 16px;
        font-weight: 600;
    }

    .buttonPM:hover {
        background-color: #022F40;
        color: #00F6ED;
        border: 2px solid #00F6ED;
        cursor: pointer;
    }

    .informations {
        display: flex;
        justify-content: space-between;
    }
`;

export const SchedulerContainer = styled.div`

    .selectContainer {
        display: flex;
        padding: 30px 50px 10px 50px;
    }

    .radioContainer {
        width: 100px;
        display: flex;
        gap: 10px;
    }

    .radioContainer label {
        display: flex;
        align-items: center;
        gap: 7px;
    }

    .radioContainer input[type="radio"]{
        -webkit-appearance: none;
        background-color: #F0F7F4;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid #00F6ED;
    }

    .radioContainer input[type="radio"]:checked {
        background-color: #022F40;
    }

    .radioContainer input[type="radio"]:checked:hover {
        border: 2px solid #FFF;
    }

    .radioContainer input[type="radio"]:hover {
        cursor: pointer;
        border: 2px solid #022F40;
    }

    .radioContainer span{
        font-family: "Oswald", sans-serif;
        color: #F0F7F4;
        font-size: 16px;
    }

    .buttonContainer {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .runButton {
        border: none;
        background-color: #022F40;
    }

    .runButton:hover {
        cursor: pointer;
    }

    .resetButtonContainer {
        padding: 0 0 20px 260px;
    }

`;
