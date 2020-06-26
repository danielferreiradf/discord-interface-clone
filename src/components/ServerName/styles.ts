import styled from "styled-components";
import { ExpandMore } from "styled-icons/material";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 16px;

  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0px 0px;
  z-index: 2;
`;
export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
`;
export const ExpandIcon = styled(ExpandMore)`
  width: 28px;
  height: 28px;

  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
`;
