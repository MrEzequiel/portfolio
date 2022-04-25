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
  width: 180px;

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

  transform-origin: left top;

  // enter animation
  &.animation-enter {
    transform: scaleY(0);
  }
  &.animation-enter-active {
    opacity: initial;
    transform: scaleY(1);
    transition: transform 400ms;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  // exit animation
  &.animation-exit {
    opacity: 1;
  }
  &.animation-exit-active {
    transform: scaleY(0);
    transition: transform 400ms;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
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

  .icon {
    position: relative;
    width: 18px;
    height: 18px;
    filter: grayscale();
  }
`
