import styled from 'styled-components';

export const MemoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  gap: 10px;
  max-width: 40%;
  border-radius: 30px;
  background-color: #345366;
  padding: 10px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  .ramCell {
    width: 40px;
    height: 40px;
    border-radius: 2px;
    background-color: #f0f7f4;
  }

  .diskCell {
    width: 40px;
    height: 40px;
    background-color: #f007f4;
  }

  p {
    color: black;
    font-family: 'Oswald', sans-serif;
    font-size: 12px;
    font-weight: 600;
  }
`;
