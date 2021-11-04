import styled from "styled-components";

export const ContainerCartList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 20px;
  justify-content: center;
`;

export const ContainerTitle = styled.div`
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 10px;
  margin-top: 30px;
  color: white;
  background-color: #219653;
  border-radius: 4px;
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
`;

export const ContainerText = styled.div`
  margin: 40px;
`;
