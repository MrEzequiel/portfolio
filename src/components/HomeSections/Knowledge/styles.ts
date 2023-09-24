import styled, { css } from 'styled-components'

export const KnowledgeList = styled.ul`
  display: grid;
  margin-top: ${props => props.theme.spaces.medium_1};
  gap: ${props => props.theme.spaces.small_3};
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
`

export const KnowledgeItem = styled.li`
  transform-style: preserve-3d;
  transform: perspective(1000px);

  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spaces.extra_small_2};
  -webkit-tap-highlight-color: transparent;

  padding: ${({ theme }) => `${theme.spaces.small_2} ${theme.spaces.small_1}`};
  background: ${props => props.theme.colorsGrey.g11};
  border-radius: ${props => props.theme.spaces.extra_small_1};
  border: 1px solid transparent;

  &:hover {
    border-color: ${props => props.theme.colorsPrimary.p900};
  }

  .icon-container {
    transform: translateZ(30px);
    position: relative;
    width: 42px;
    height: 42px;
  }

  p {
    text-align: center;
  }
`
