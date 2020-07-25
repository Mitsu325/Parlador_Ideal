import React from 'react';
import { Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logoH.png';
import ideaImg from '../../assets/idea.png';

import {
  Container,
  Header,
  GoToMyPosts,
  GoToMyPostsText,
  Title,
  SubTitle,
  GoToPost,
  GoToPostText,
  CardPost,
  CardHeader,
  Nome,
  Data,
  CardText,
} from './styles';

const Feed: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <GoToMyPosts onPress={() => navigation.navigate('MyPosts')}>
          <GoToMyPostsText>Meus Posts</GoToMyPostsText>
          <Icon name="arrow-right" size={20} color="#A9A9A9" />
        </GoToMyPosts>
      </Header>

      <Image source={ideaImg} />

      <Title>Mural de ideias</Title>

      <SubTitle>O que você está pensando?</SubTitle>

      <GoToPost onPress={() => navigation.navigate('Post')}>
        <GoToPostText>Compartilhe!</GoToPostText>
      </GoToPost>

      <ScrollView>
        <CardPost>
          <CardHeader>
            <Nome>Patrícia</Nome>
            <Data>23 jul 2020</Data>
          </CardHeader>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </CardText>
        </CardPost>

        <CardPost>
          <CardHeader>
            <Nome>Patrícia</Nome>
            <Data>23 jul 2020</Data>
          </CardHeader>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </CardText>
        </CardPost>

        <CardPost>
          <CardHeader>
            <Nome>Patrícia</Nome>
            <Data>23 jul 2020</Data>
          </CardHeader>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </CardText>
        </CardPost>
      </ScrollView>
    </Container>
  );
};

export default Feed;
