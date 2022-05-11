import styled, { css } from 'styled-components'

export const KnowledgeContent = styled.div`
  margin-top: ${props => props.theme.spaces.small_3};

  width: min-content;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 700px) {
    display: flex;
    width: fit-content;
  }
`

export const KnowledgeList = styled.ul`
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

interface KnowledgeItemProps {
  isSelected: boolean
}

export const KnowledgeItem = styled.li<KnowledgeItemProps>`
  cursor: pointer;

  display: flex;
  -webkit-tap-highlight-color: transparent;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;

  background: ${props => props.theme.colorsGrey.g10};
  transition: 750ms ease;
  transition-property: background box-shadow;

  &:hover {
    background: ${props => props.theme.colorsGrey.g9};

    .icon-container {
      opacity: 1;
    }
  }

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
    opacity: 0.5;
    transition: opacity 750ms ease;
  }

  ${props =>
    props.isSelected &&
    css`
      transition-property: background border-radius box-shadow border transform;

      cursor: default;

      transform: translateY(4px);
      position: relative;
      z-index: 1;

      background: ${props => props.theme.colorsGrey.g10} !important;
      box-shadow: 0 -8px 8px 0px rgba(0, 0, 0, 0.1);
      border-radius: 30px 4px 0px 0px !important;
      border: 5px solid ${props => props.theme.colorsPrimary.p800};
      border-bottom: none;
      box-sizing: border-box;

      .icon-container {
        opacity: 1;
      }

      @media (max-width: 700px) {
        border-radius: 5px 0 0 30px !important;
        box-shadow: -8px 0px 8px 0px rgba(0, 0, 0, 0.1);
        transform: translateX(5px);
        border-bottom: 5px solid ${props => props.theme.colorsPrimary.p800};
        border-right: none;
      }
    `}
`

export const KnowledgeBody = styled.div`
  position: relative;
  top: -1px;

  background: ${props => props.theme.colorsGrey.g10};
  /* color-primary */

  border: 5px solid ${props => props.theme.colorsPrimary.p800};
  border-radius: 4px;
  padding: ${props => props.theme.spaces.small_2};
  width: 100%;

  p {
    color: ${props => props.theme.colorsGrey.g5};
  }

  &.knowledge-animation-enter .text-knowledge {
    opacity: 0;
    transform: scale(1.05);
  }
  &.knowledge-animation-enter-active .text-knowledge {
    opacity: 1;
    transform: scale(1);
    transition: opacity 400ms, transform 400ms;
  }
  &.knowledge-animation-exit .text-knowledge {
    opacity: 1;
    transform: scale(1);
  }
  &.knowledge-animation-exit-active .text-knowledge {
    opacity: 0;
    transform: scale(0.95);
    transition: opacity 400ms, transform 400ms;
  }
`

export const KnowledgeRelatedTopicsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spaces.extra_small_2};
  margin-top: ${props => props.theme.spaces.small_2};

  .chip-topic {
    background: ${props => props.theme.colorsPrimary.p800};
    box-shadow: 0 0 16px -8px ${props => props.theme.colorsPrimary.p800};
    border: 2px solid ${props => props.theme.colorsPrimary.p900};
    border-radius: 1000px;
    white-space: nowrap;
    padding: ${props => props.theme.spaces.extra_small_2};
    color: ${props => props.theme.colorsPrimary.p100};
    font-weight: 500;
    cursor: default;
    line-height: 1;
  }
`
