import styled from 'styled-components/native';
import { Form as FormUnform } from '@unform/mobile';

export const Container = styled.View`
  flex: 1;
  padding: 20px 20px 0px;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const GoToMyPosts = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const GoToMyPostsText = styled.Text`
  font-size: 16px;
  color: #a9a9a9;
  font-family: 'Mulish-Bold';
  margin-right: 8px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #474a51;
  font-family: 'Rowdies-Regular';
  margin: 24px 0px;
`;

export const Form = styled(FormUnform)`
  width: 100%;
`;
