import styled from "@emotion/styled";
import type { AbsoluteType, Container, PaginItem } from "../types/stylesTypes";

export const StyledMain = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 20px;
`;

export const StyledContainer = styled.div<Container>`
  display: flex;
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  height: 100%;
`;

export const StyledModal = styled.div`
  border-radius: 10px;
  border: 1px solid #000;
  width: 50%;
  padding: 5%;
`;

export const StyledHeader = styled.h3`
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-left: 20px;
`;

export const StyledPaginItem = styled.div<PaginItem>`
  height: 40px;
  width: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  background-color: ${(props) =>
    props.active ? "rgb(104, 92, 238)" : "#e3e3e3"};
  color: ${(props) => (props.active ? "#fff" : "#000") || false};
  cursor: pointer;
`;

export const Absolute = styled.div<AbsoluteType>`
  position: absolute;
  top: ${(props) => props.top || ""};
  left: ${(props) => props.left || ""};
  right: ${(props) => props.right || ""};
  bottom: ${(props) => props.bottom || ""};
`;
