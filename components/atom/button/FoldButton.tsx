import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface FoldButtonProps {
  className?: string;
  children: ReactNode;
  src?: string;

  onClick(): void;
  isOpen: boolean;
  isSelected: boolean;
  isTagBox: boolean;
}

export function FoldButton(props: FoldButtonProps) {
  const { className, isTagBox, children, src, isOpen, isSelected, onClick } = props;
  return (
    <StyledWrapper isTagBox={isTagBox} isOpen={isOpen} isSelected={isSelected} onClick={onClick}>
      {children}
      <img src={src} alt="fold-icon" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<{
  isTagBox: boolean;
  isOpen: boolean;
  isSelected: boolean;
}>`
  display: ${(props) => (props.isTagBox ? "inline-flex" : "flex")};
  align-items: center;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: ${(props) => (props.isTagBox ? "0.6em 1.25em" : "0 1.25em")};
  border: 1px solid ${(props) => (props.isSelected ? `${teambleColors.darkPurple}` : `${teambleColors.deepGray}`)};

  border-radius: 0.38em;

  ${(props) => {
    if (!props.isTagBox) {
      return css`
        width: 14.56em;
        height: 3.38em;
      `;
    }
  }}

  font-size: 1.38em;
  color: ${(props) => (props.isSelected ? `${teambleColors.darkPurple}` : `${teambleColors.deepGray}`)};

  & > img {
    margin-left: 1.8em;
    transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};
  }

  & > div + div {
    margin-left: 1.8em;
  }
`;