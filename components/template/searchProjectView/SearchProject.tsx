import React, { ReactNode } from "react";
import styled from "styled-components";
import { FilterLayout } from "../../molecule/filter-layout/FilterLayout";

export interface SearchProjectProps {
  period?: ReactNode;
  position: ReactNode;
  goal?: ReactNode;
  tag: ReactNode;
  field: ReactNode;
  projectCards: ReactNode;
  onReset(): void;
}

export function SearchProject(props: SearchProjectProps) {
  const { period, position, goal, tag, field, projectCards, onReset } = props;

  return (
    <StyledSearchProject>
      <FilterLayout title="사이드 프로젝트 찾기" onReset={onReset}>
        <StyledTagWrapper>
          {period && (
            <StyledEachWrapper>
              <span>기간</span>
              {period}
            </StyledEachWrapper>
          )}
          <StyledEachWrapper>
            <span>협업 포지션</span>
            {position}
          </StyledEachWrapper>
          {goal && (
            <StyledEachWrapper>
              <span>목표</span>
              {goal}
            </StyledEachWrapper>
          )}
          <StyledEachWrapper>
            <span>협업 성향</span>
            {tag}
          </StyledEachWrapper>
          <StyledEachWrapper>
            <span>관심 프로젝트</span>
            {field}
          </StyledEachWrapper>
        </StyledTagWrapper>
      </FilterLayout>
      <StyledProjectWrapper>
        {projectCards}
        {projectCards}
        {projectCards}
        {projectCards}
        {projectCards}
        {projectCards}
        {projectCards}
        {projectCards}
        {projectCards}
        {projectCards}
      </StyledProjectWrapper>
    </StyledSearchProject>
  );
}

const StyledSearchProject = styled.div`
  width: 120em;
  display: flex;
  flex-direction: column;
`;

const StyledProjectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
  padding-top: 7.6em;
  padding-bottom: 20em;
`;
const StyledTagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 350px;
`;
const StyledEachWrapper = styled.div`
  display: flex;
  font-size: 22px;
  font-weight: 700;
  align-items: center;
  width: 300px;
  justify-content: space-between;
  margin-bottom: 26px;

  &:last-child {
    margin-bottom: 0;
  }

  & > span {
    min-width: 160px;
  }
`;
