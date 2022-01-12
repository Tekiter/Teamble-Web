import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { teambleColors } from "../../../styles/color";

export interface FindPasswordModalProps {
  handleClose?(): void;
}

export function FindPasswordModal(props: FindPasswordModalProps) {
  const { handleClose } = props;
  return (
    <StyledFindPasswordModal>
      <img src="./test" onClick={handleClose} alt={"close"} />
      <StyledDesc>
        <div>아래 이메일로 관리자에게 문의 바랍니다.</div>
        <div>napkin-plz@gmail.com</div>
      </StyledDesc>
    </StyledFindPasswordModal>
  );
}

const StyledFindPasswordModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 515px;
  height: 125px;
  background-color: ${teambleColors.white};
  filter: drop-shadow(2px 6px 12px rgba(0, 0, 0, 0.12));
  display: flex;
  align-items: center;
  border-radius: 5px;

  img {
    position: absolute;
    right: 12px;
    top: 12px;
    cursor: pointer;
  }
`;
const StyledDesc = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  div {
    letter-spacing: -0.02em;
  }
  div:first-child {
    height: 32px;
    font-size: 22px;
    font-weight: bold;
    font-size: 22px;
    color: ${teambleColors.black};
  }
  div:last-child {
    height: 23px;
    font-size: 16px;
    color: ${teambleColors.darkGray};
  }
`;