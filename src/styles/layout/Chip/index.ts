import styled from 'styled-components'
import Text from '../Text'

export const Chip = styled(Text)`
  display: inline-block;
  cursor: default;
  padding: ${props =>
    `${props.theme.spaces.extra_small_1} ${props.theme.spaces.extra_small_2}`};
  border-radius: 50px;
  background: ${props => props.theme.gradients.white};
  color: ${props => props.theme.colorsPrimary.p100};
  font-size: 1.2rem;
  font-weight: 400;
  box-shadow: 0px 0px 5px rgba(244, 246, 255, 0.25);

  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 8px rgba(244, 246, 255, 0.25);
  }
`
