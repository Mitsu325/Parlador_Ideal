import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logoH.png';
import ideaImg from '../../assets/idea.png';

import api from '../../services/api';

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
  PostsList,
} from './styles';

export interface Post {
  id: string;
  text: string;
  updated_at: string;
  formattedDate: string;
  user: {
    name: string;
  };
}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const navigation = useNavigation();
  const { user } = useAuth();

  useEffect(() => {
    async function loadPosts(): Promise<void> {
      const response = await api.get('posts');

      const postsFormatted = response.data.map((post: Post) => ({
        ...post,
        formattedDate: new Date(post.updated_at).toLocaleDateString('pt-br'),
      }));

      setPosts(postsFormatted);
    }

    loadPosts();
  }, []);

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <GoToMyPosts onPress={() => navigation.navigate('MyPosts')}>
          <GoToMyPostsText>Meus Posts</GoToMyPostsText>
          <Icon name="arrow-right" size={20} color="#A9A9A9" />
        </GoToMyPosts>
      </Header>

      <Title>Mural de ideias</Title>

      <Image source={ideaImg} />

      <SubTitle>
        {user.name},{'\n'}O que você está pensando?
      </SubTitle>

      <GoToPost onPress={() => navigation.navigate('Post')}>
        <GoToPostText>Compartilhe!</GoToPostText>
      </GoToPost>

      <PostsList
        data={posts}
        keyExtractor={post => post.id}
        renderItem={({ item }) => (
          <CardPost>
            <CardHeader>
              <Nome>{item.user.name}</Nome>
              <Data>{item.formattedDate}</Data>
            </CardHeader>
            <CardText>{item.text}</CardText>
          </CardPost>
        )}
      />
    </Container>
  );
};

export default Feed;
