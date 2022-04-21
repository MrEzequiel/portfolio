import styled from 'styled-components'

export const KnowledgeContainer = styled.ul`
  display: flex;
  margin-top: ${props => props.theme.spaces.small_3};

  width: min-content;
  margin-left: auto;
  margin-right: auto;
`

export const KnowledgeButton = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;

  &:first-child {
    border-radius: 4px 0px 0px 0px;
  }

  &:last-child {
    border-radius: 0px 4px 0px 0px;
  }

  .icon-container {
    position: relative;
    width: 30px;
    height: 30px;
  }
`
