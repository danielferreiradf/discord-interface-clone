import styled from "styled-components";

import { ServerButtonProps } from "./index";

export const Button = styled.button<ServerButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 10%;

  margin-bottom: 8px;
  background-color: ${(props) =>
    props.isHome ? props.theme.colors.purple : props.theme.colors.primary};

  > img {
    width: 24px;
    height: 24px;
  }
  transition: all 0.2s;

  &::before {
    content: "";
    width: 9px;
    height: 9px;
    position: absolute;
    left: -15px;
    top: calc(50% - 4.5px);

    background-color: ${(props) => props.theme.colors.white};
    border-radius: 50%;
    display: ${(props) => (props.hasNotifications ? "inline" : "none")};
  }
  &::after {
    content: '${(props) => props.mentions && props.mentions}';
    display: ${(props) =>
      props.mentions && props.mentions > 0 ? "inline" : "none"};
    background-color: ${(props) => props.theme.colors.notification};
    width: auto;
    height: 16px;
    padding: 0 4px;
    position: absolute;
    bottom: -4px;
    right: -4px;
    border-radius: 12px;
    border: 4px solid ${(props) => props.theme.colors.quaternary};
    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
  }

  &.active,
  &:hover {
    background-color: ${(props) =>
      props.isHome ? props.theme.colors.purple : props.theme.colors.discord};
  }
`;
