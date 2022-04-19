import styled from 'styled-components'
import Container from '../../../styles/layout/Container'

export const AboutMeContainer = styled(Container)`
  display: grid;
  grid-template-columns: 5fr 4fr;
  gap: ${props => props.theme.spaces.small_3};

  .ilustration-container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  @media (max-width: 680px) {
    grid-template-columns: 4fr 2fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;

    .ilustration-container {
      height: 220px;
    }
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spaces.small_1};
  margin-top: ${props => props.theme.spaces.small_2};
`
