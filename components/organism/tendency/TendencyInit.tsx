import styled from "styled-components";
import TeambleLogo from "../../../assets/svg/logo_img.svg";
import { BasicButton } from "../../atom/button/BasicButton";

export interface TendencyInitProps {
  onStart(): void;
}

export function TendencyInit(props: TendencyInitProps) {
  const { onStart } = props;
  return (
    <StyledTendenctInit>
      <Logo />
      <Description>
        사이드프로젝트 팀에서
        <br />
        나의 협업성향은 무엇일까?
      </Description>
      <StartButton onClick={() => onStart && onStart()} variant="outlined">
        팀블유형 테스트 시작하기
      </StartButton>
    </StyledTendenctInit>
  );
}

const StyledTendenctInit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 10rem;
  min-height: 100vh;
`;

const Logo = styled(TeambleLogo)`
  transform: scale(1.3);
`;

const Description = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  display: block;
  line-height: 4.3rem;
  letter-spacing: -0.02em;

  margin-top: 3rem;
`;

const StartButton = styled(BasicButton)`
  display: block;

  margin-top: 10rem;
`;
