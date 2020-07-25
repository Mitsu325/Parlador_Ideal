import React from 'react';
import { Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logoH.png';
import ideaImg from '../../assets/myIdea.png';

import {
  Container,
  Header,
  GoToMyPosts,
  GoToMyPostsText,
  Title,
  CardPost,
  CardHeader,
  Data,
  CardText,
} from './styles';

const MyPosts: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <GoToMyPosts onPress={() => navigation.navigate('Feed')}>
          <Icon name="arrow-left" size={20} color="#A9A9A9" />
          <GoToMyPostsText>Voltar</GoToMyPostsText>
        </GoToMyPosts>
      </Header>

      <Image source={ideaImg} />

      <Title>Minhas ideias</Title>

      <ScrollView>
        <CardPost>
          <CardHeader>
            <Icon name="trash" size={24} color="#a9a9a9" />
            <Icon name="edit" size={24} color="#f26763" />
          </CardHeader>
          <Data>23 jul 2020</Data>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </CardText>
        </CardPost>

        <CardPost>
          <CardHeader>
            <Icon name="trash" size={24} color="#a9a9a9" />
            <Icon name="edit" size={24} color="#f26763" />
          </CardHeader>
          <Data>23 jul 2020</Data>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </CardText>
        </CardPost>

        <CardPost>
          <CardHeader>
            <Icon name="trash" size={24} color="#a9a9a9" />
            <Icon name="edit" size={24} color="#f26763" />
          </CardHeader>
          <Data>23 jul 2020</Data>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </CardText>
        </CardPost>
      </ScrollView>
    </Container>
  );
};

export default MyPosts;
