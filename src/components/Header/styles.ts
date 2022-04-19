import styled, { css } from 'styled-components'
import Container from '../../styles/layout/Container'

interface HeaderProps {
  isSticky: boolean
}

export const HeaderWrapper = styled.header<HeaderProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  border-bottom: 1px solid transparent;

  ${props =>
    props.isSticky &&
    css`
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(18px);

      border-color: ${({ theme }) => theme.colorsGrey.g12};
    `}

  transition: all 0.3s ease;
`

export const HeaderInner = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.small_2};
  flex-wrap: wrap;

  padding-top: ${({ theme }) => theme.spaces.small_1};
  padding-bottom: ${({ theme }) => theme.spaces.small_1};

  @media (max-width: 750px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spaces.small_1};
  }
`

export const NavBarContainer = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spaces.small_1};

  li a {
    display: block;
    white-space: nowrap;
    padding: ${({ theme }) => theme.spaces.small_1};
    color: ${({ theme }) => theme.colorsGrey.g4};
    position: relative;

    @media (max-width: 750px) {
      border: 1px solid ${({ theme }) => theme.colorsGrey.g11};
      border-radius: ${({ theme }) => theme.spaces.extra_small_2};
      padding: ${({ theme }) => theme.spaces.extra_small_2};
      background: ${({ theme }) => theme.colorsGrey.g12};

      transition: background 0.3s ease;

      &:hover {
        background: ${({ theme }) => theme.colorsGrey.g11};
      }

      &::before {
        display: none;
      }
    }

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
`
