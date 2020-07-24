import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #fff;
  border-radius: 8px;
  margin-top: 20px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Mulish-Bold';
  color: #f26763;
  font-size: 18px;
`;
