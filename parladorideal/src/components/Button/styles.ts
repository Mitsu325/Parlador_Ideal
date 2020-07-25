import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
  primary: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%
  height: 60px;
  background: ${props => (props.primary ? '#fff' : '#f26763')};
  border-radius: 8px;
  margin-top: 20px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-family: 'Mulish-Bold';
  color: ${props => (props.primary ? '#f26763' : '#fff')};
  font-size: 18px;
`;
