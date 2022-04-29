import styled from 'styled-components'

export const SelectInput = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${props => props.theme.colorsGrey.g10};
  border-radius: ${props => props.theme.spaces.extra_small_2};
  padding: ${props => props.theme.spaces.extra_small_2};
  gap: ${props => props.theme.spaces.small_2};

  font-size: 1.6rem;

  svg {
    color: ${props => props.theme.colorsPrimary.p800};
  }
`

export const SelectProject = styled.ul`
  :global(body) {
    overflow: hidden;
  }

  position: fixed;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: ${props => props.theme.spaces.extra_small_1};

  &:hover {
    background: ${props => props.theme.colorsGrey.g10};
  }

  transition: transform 400ms, opacity 400ms;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);

  // enter animation
  &.animation-enter {
    transform: perspective(100vmax) translateZ(60px) rotateX(10deg);
    opacity: 0;
  }
  &.animation-enter-active {
    transform: perspective(100vmax) translateZ(0px) rotateX(0deg);
    opacity: 1;
  }

  // exit animation
  &.animation-exit {
    transform: perspective(100vmax) translateZ(0px) rotateX(0deg);
    opacity: 1;
  }
  &.animation-exit-active {
    opacity: 0;
    transform: perspective(100vmax) translateZ(-60px) rotateX(-10deg);
  }

  & > *:not(:last-child) {
    border-bottom: 1px solid #1f1f1f;
  }
`

export const SelectItem = styled.li<{ selected: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.spaces.extra_small_2};
  background: ${props =>
    props.selected ? props.theme.colorsGrey.g10 : props.theme.colorsGrey.g11};

  gap: ${props => props.theme.spaces.small_1};
  color: ${props => props.theme.colorsGrey.g4};
  font-size: 1.4rem;

  &:hover {
    background: ${props => props.theme.colorsGrey.g10};
  }

  &:active {
    filter: brightness(110%);
  }

  .icon {
    position: relative;
    width: 18px;
    height: 18px;
    filter: grayscale();
  }
`
