import styled from 'styled-components'
import Container from './layout/Container'

export const ProjectWrapper = styled.div`
  background: url('/code-image-cover.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 30% 50%;
  padding: ${props => props.theme.spaces.medium_2} 0;
`

export const ProjectContent = styled(Container)`
  padding-top: ${props => props.theme.spaces.medium_3};
  padding-bottom: ${props => props.theme.spaces.medium_3};

  button {
    margin-bottom: ${props => props.theme.spaces.extra_small_2};
    color: ${props => props.theme.colorsGrey.g6};
    transition: all 400ms ease;

    &:hover {
      color: ${props => props.theme.colorsGrey.g4};
    }
  }

  p {
    margin-top: ${props => props.theme.spaces.small_1};
    max-width: 560px;
    color: ${props => props.theme.colorsGrey.g4};
  }
`

export const ProjectList = styled(Container)`
  width: 100%;
  margin-top: ${props => props.theme.spaces.medium_1};
  margin-bottom: ${props => props.theme.spaces.medium_3};

  column-count: 3;
  height: 100%;

  @media (max-width: 900px) {
    column-count: 2;
  }

  @media (max-width: 600px) {
    column-count: 1;
  }
`

export const ProjectItem = styled.li`
  -moz-column-break-inside: avoid;
  -webkit-column-break-inside: avoid;
  column-break-inside: avoid;
  transform: translateX(0);

  max-width: 100%;
  background: ${props => props.theme.colorsGrey.g11};
  border-radius: ${props => props.theme.spaces.extra_small_1};
  overflow: hidden;

  box-shadow: ${props => props.theme.shadows.small};
  transition: all 400ms ease;

  &:hover {
    box-shadow: ${props => props.theme.shadows.extra_large};
    z-index: 5;
  }

  border: 2px solid ${props => props.theme.colorsPrimary.p700};
  margin-bottom: ${props => props.theme.spaces.small_1};

  .image-cover {
    position: relative;
    width: 100%;
    height: 150px;
    background: ${props => props.theme.colorsGrey.g10};
    border-bottom: 2px solid ${props => props.theme.colorsPrimary.p700};

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      transition: all 400ms ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .content {
    padding: ${props => props.theme.spaces.small_1};

    p {
      margin-top: ${props => props.theme.spaces.extra_small_1};
      color: ${props => props.theme.colorsGrey.g5};
    }

    .techs {
      margin-top: ${props => props.theme.spaces.extra_small_2};

      display: flex;
      flex-wrap: wrap;
      gap: ${props => props.theme.spaces.extra_small_2};

      span {
        cursor: default;
        padding: ${props =>
          `${props.theme.spaces.extra_small_1} ${props.theme.spaces.extra_small_2}`};
        border-radius: 50px;
        background: ${props => props.theme.colorsPrimary.p100};
        color: ${props => props.theme.colorsPrimary.p1200};
        font-size: 1.2rem;
        font-weight: 400;
        box-shadow: 0px 0px 5px rgba(37, 39, 52, 0.4);

        transition: all 0.2s ease-in-out;

        &:hover {
          box-shadow: 0px 0px 8px rgba(37, 39, 52, 0.8);
          font-size: 1.4rem;
        }
      }
    }

    .links {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      height: 35px;
      gap: ${props => props.theme.spaces.extra_small_2};
      margin-top: ${props => props.theme.spaces.small_1};

      a {
        height: 100%;
      }
      button {
        height: 100%;
      }
    }
  }
`

export const ProjectEmpty = styled.div`
  margin: ${props => props.theme.spaces.extra_large_1} auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spaces.extra_small_2};

  svg {
    color: ${props => props.theme.colorsPrimary.p800};
  }

  p {
    max-width: 560px;
    text-align: center;
  }
`
