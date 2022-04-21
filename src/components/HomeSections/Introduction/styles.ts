import styled from 'styled-components'
import Container from '../../../styles/layout/Container'

export const IntroductionWrapper = styled(Container)`
  display: grid;
  height: calc(80vh - 80px);
  align-items: center;

  grid-template-columns: 2fr 3fr;
  @media (max-width: 700px) {
    grid-template-columns: auto 1fr;
    gap: ${props => props.theme.spaces.small_1};
  }

  gap: ${props => props.theme.spaces.small_3};

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const IntruductionBackground = styled.div`
  background: ${props =>
    `linear-gradient(288.08deg,${props.theme.colorsGrey.g12} -4.38%, ${props.theme.colorsGrey.g11} 117.67%)`};

  height: 100%;
  width: 100%;

  background-size: 400% 400%;
  animation: gradient 8s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

export const IntroductionImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-width: 700px) {
    .image-wrapper {
      display: none;
    }
  }

  .social-links {
    width: 20px;
    height: 100%;
    flex-shrink: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    gap: ${props => props.theme.spaces.small_1};
    margin-right: ${props => props.theme.spaces.small_1};

    svg {
      font-size: 2.4rem;

      transition: transform 400ms ease, filter 400ms ease;

      &:hover {
        transform: scale(1.18);
        filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
      }
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 400px) {
    width: auto;
    height: auto;

    .social-links {
      width: auto;
      height: auto;
      flex-direction: row;

      svg {
        color: ${props => props.theme.colorsPrimary.p1400};
      }
    }
  }

  .image-wrapper {
    width: 100%;
    height: 380px;
    position: relative;
  }
`

export const IntroductionText = styled.div`
  h2 {
    margin-bottom: ${props => props.theme.spaces.small_2};
    font-size: 5.6rem;
    line-height: 5.4rem;

    @media (max-width: 900px) {
      font-size: 4.8rem;
    }

    span {
      color: ${props => props.theme.colorsPrimary.p800};
    }
  }

  @media (max-width: 800px) {
    h2 {
      font-size: 4.2rem;
      line-height: 4.4rem;
      margin-bottom: ${props => props.theme.spaces.small_1};
    }
    p {
      font-size: 1.4rem;
      line-height: 1.5;
    }
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 3.6rem;
      line-height: 3.8rem;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.5;
    }
  }
`

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    @keyframes bounce {
      50% {
        transform: translateY(-50%);
      }
    }

    animation: bounce 2.8s ease infinite;
  }
`
