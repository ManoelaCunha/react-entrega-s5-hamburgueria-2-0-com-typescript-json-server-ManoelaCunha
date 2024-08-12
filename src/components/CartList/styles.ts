import styled from "styled-components";

export const BoxCartList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  top: 80px;
`;

export const ContainerCartList = styled.div`
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 20px;
`;

export const ContainerTitle = styled.div`
  width: 280px;
  padding: 3px 10px;
  margin-top: 30px;
  color: white;
  background-color: #219653;
  border-radius: 4px;

  @media (min-width: 425px) {
    width: 335px;
  }
`;

export const ContainerTotalPrice = styled.div`
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  margin-bottom: 20px;
  color: white;
  background-color: #219653;
  border-radius: 4px;

  @media (min-width: 425px) {
    width: 335px;
  }
`;

export const ContainerText = styled.div`
  margin: 40px;
  position: relative;
  top: 80px;
`;
