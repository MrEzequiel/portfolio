import styled, { css } from 'styled-components'

interface NavBarContainerProps {
  isOpen: boolean
}

export const NavBarContainer = styled.ul<NavBarContainerProps>`
  display: flex;
  gap: ${({ theme }) => theme.spaces.small_1};
  overflow: hidden;

  li a {
    -webkit-tap-highlight-color: transparent;
    display: block;
    white-space: nowrap;
    padding: ${({ theme }) => theme.spaces.small_1};
    color: ${({ theme }) => theme.colorsGrey.g4};
    position: relative;

    @media (max-width: 400px) {
      font-size: 1.2rem;
      padding: ${({ theme }) => theme.spaces.extra_small_1};
    }

    &::before {
      content: '';
      position: absolute;
      bottom: -${({ theme }) => theme.spaces.small_1};
      right: 0;
      width: 0;
      height: 1px;
      background: ${({ theme }) => theme.colorsGrey.g4};
      transition: width 0.3s ease;
    }

    &:hover {
      color: ${({ theme }) => theme.colorsGrey.g2};

      &::before {
        width: 100%;
        left: 0;
      }
    }
  }

  @media (max-width: 750px) {
    position: fixed;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spaces.small_3};
    height: 100vh;
    width: 80vw;

    background: ${({ theme }) => theme.colorsGrey.g11};
    backdrop-filter: blur(4px);
    top: 0;
    right: 0;

    li a {
      font-size: 1.8rem;
    }

    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateX(100%);

    transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;

    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: translateX(0);
        opacity: 1;
        visibility: visible;
        pointer-events: all;
        box-shadow: ${({ theme }) => theme.shadows.extra_large};
      `}
  }
`

interface MenuMobileProps {
  menuMobileIsOpen: boolean
}

export const MenuMobileWrapper = styled.button<MenuMobileProps>`
  z-index: 999;
  position: relative;

  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;

  background: ${({ theme }) => theme.colorsGrey.g12};
  border: 1px solid ${({ theme }) => theme.colorsGrey.g11};
  border-radius: ${({ theme }) => theme.spaces.extra_small_1};
  padding: ${({ theme }) => theme.spaces.extra_small_2};

  ${({ menuMobileIsOpen }) =>
    menuMobileIsOpen &&
    css`
      div:nth-child(1) {
        transform: rotate(-45deg);
        position: relative;
        top: 5px;
      }
      div:nth-child(2) {
        opacity: 0;
      }
      div:nth-child(3) {
        transform: rotate(45deg);
        position: relative;
        top: -6px;
      }
    `}
`

export const MenuMobile = styled.div`
  width: 20px;
  height: 2.5px;
  background: ${({ theme }) => theme.colorsGrey.g1};
  border-radius: 4px;
  transition: transform 300ms ease, opacity 200ms ease;
`
