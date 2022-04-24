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
      background: rgba(0, 0, 0, 0.85);
      backdrop-filter: blur(4px);

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
    gap: ${({ theme }) => theme.spaces.small_1};
  }
`
