import styled from 'styled-components'

export const ProjectList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: ${props => props.theme.spaces.small_1};
  row-gap: ${props => props.theme.spaces.small_3};
  margin-top: ${props => props.theme.spaces.medium_2};

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`

export const ProjectItem = styled.li`
  cursor: pointer;
  width: 100%;
  background: ${({ theme }) =>
    `linear-gradient(180deg, ${theme.colorsGrey.g10} 0%, ${theme.colorsGrey.g11} 100%)`};
  border-radius: ${({ theme }) => theme.spaces.extra_small_1};
  box-shadow: ${({ theme }) => theme.shadows.small};
  padding: ${({ theme }) => theme.spaces.small_1};

  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.medium};
    transform: scale(1.02);
  }

  .icon-wrapper {
    position: relative;
    width: 100%;
    height: 80px;
    margin-top: -${({ theme }) => theme.spaces.small_3};
  }
`

export const ProjectItemDivider = styled.hr`
  border: none;
  background: ${({ theme }) => theme.colorsGrey.g10};
  height: 2px;
  border-radius: 2px;
  margin: ${({ theme }) => theme.spaces.small_1} 0;
`
