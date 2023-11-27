import styled from 'styled-components';

export const Container = styled.div`
  background-color: #022f40;
  padding: 0 5%;

  .title {
    font-family: 'Oswald', sans-serif;
    color: #f0f7f4;
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
  font-family: 'Oswald', sans-serif;
  color: #f0f7f4;
  gap: 8vw;


  .processView {
    display: flex;
    flex-direction: column;
  }

  .buttonContainer {
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
  }

  .buttonPM {
    padding: 8px 12px;
    min-width: 150px;
    background-color: #00f6ed;
    border: 2px solid;
    border-radius: 20px;
    color: #022f40;
    font-size: 16px;
    font-weight: 600;
  }

  .buttonPM:hover {
    background-color: #022f40;
    color: #00f6ed;
    border: 2px solid #00f6ed;
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

  .radioContainer input[type='radio'] {
    -webkit-appearance: none;
    background-color: #f0f7f4;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #00f6ed;
  }

  .radioContainer input[type='radio']:checked {
    background-color: #022f40;
  }

  .radioContainer input[type='radio']:checked:hover {
    border: 2px solid #fff;
  }

  .radioContainer input[type='radio']:hover {
    cursor: pointer;
    border: 2px solid #022f40;
  }

  .radioContainer span {
    font-family: 'Oswald', sans-serif;
    color: #f0f7f4;
    font-size: 16px;
  }

  .buttonContainer {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .runButton {
    border: none;
    background-color: #022f40;
  }

  .runButton:hover {
    cursor: pointer;
  }

  .resetButtonContainer {
    padding: 0 0 20px 260px;
  }
`;

export const CpuView = styled.div`
  display: flex;

  .selectCriteriaRam{
        width:  60px;
        height: 25px;
        border: 1px solid #fff;
        border-radius: 5px;
        color: #fff;
        background-color: #022f40; 
  }
`;
