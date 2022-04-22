import styled from 'styled-components'
import Container from '../../../styles/layout/Container'

export const FormationContainer = styled(Container)`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: ${props => props.theme.spaces.small_3};

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spaces.small_2};
  }
`

export const FormationList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${props => props.theme.spaces.small_1};
`

export const FormationItem = styled.li`
  display: flex;

  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);

    .card {
      box-shadow: ${props => props.theme.shadows.medium};
    }
  }

  .card {
    width: 240px;
    min-height: 200px;

    border-radius: ${props => props.theme.spaces.extra_small_1};
    background-color: ${props => props.theme.colorsGrey.g11};
    padding: ${props => props.theme.spaces.small_1};
    box-shadow: ${props => props.theme.shadows.small};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: box-shadow 0.3s ease-in-out;
  }

  &:before {
    content: '';

    width: 20px;
    height: 25px;
    margin-top: ${props => props.theme.spaces.small_1};
    background: ${props => props.theme.colorsPrimary.p800};
    border-radius: 10px 0px 0px 0px;
  }
`
