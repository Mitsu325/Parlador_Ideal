import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { Form as FormUnform } from '@unform/mobile';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: #fff;
  font-family: 'Rowdies-Regular';
  margin: 24px 0px;
`;

export const Form = styled(FormUnform)`
  width: 100%;
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  border-top-width: 1px;
  border-color: #e51a13;
  padding: 16px 0;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BackToSignInText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: 'Mulish-Medium';
  margin-left: 8px;
`;
