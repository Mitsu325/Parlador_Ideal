import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Post } from './index';

export const Container = styled.View`
  flex: 1;
  padding: 20px 20px 0px;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
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
  margin-bottom: 8px;
`;

export const SubTitle = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #a9a9a9;
  font-family: 'Mulish-Bold';
  margin: 8px 0px;
`;

export const GoToPost = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  background: #f26763;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

export const GoToPostText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: 'Mulish-Bold';
`;

export const PostsList = styled(FlatList as new () => FlatList<Post>)`
  width: 100%;
`;

export const CardPost = styled.View`
  background: #ffffff;
  border-width: 2px;
  border-color: #f26763;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 20px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Nome = styled.Text`
  font-size: 16px;
  color: #474a51;
  font-family: 'Mulish-Bold';
`;

export const Data = styled.Text`
  font-size: 16px;
  color: #a9a9a9;
  font-family: 'Mulish-Bold';
`;

export const CardText = styled.Text`
  font-size: 18px;
  color: #474a51;
  font-family: 'Mulish-Medium';
`;
