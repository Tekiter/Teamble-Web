import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface InputProps {
  className?: string;
  placeholder: string;
  value: string;
  onChange(value: string): void;
}

export default function Input(props: InputProps) {
  const { className, placeholder, onChange, value = "" } = props;
  const [borderColor, setBorderColor] = useState(teambleColors.gray);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  useEffect(() => {
    value === "" ? setBorderColor(teambleColors.gray) : setBorderColor(teambleColors.darkGray);
  }, [value]);

  return (
    <StyledEmailInput
      className={className}
      borderColor={borderColor}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}></StyledEmailInput>
  );
}

const StyledEmailInput = styled.input<{
  borderColor: string;
}>`
  width: 410px;
  height: 63px;
  border: 2px solid ${({ borderColor }) => borderColor};
  box-sizing: border-box;
  padding: 18px 18px 18px 34px;
  outline: none;
  font-size: 18px;
  font-weight: 500;
`;
