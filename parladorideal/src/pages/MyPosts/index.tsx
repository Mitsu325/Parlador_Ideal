import React, { useState, useEffect, useCallback } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import ideaImg from '../../assets/myIdea.png';

import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

import {
  Container,
  Header,
  GoToMyPosts,
  GoToMyPostsText,
  Title,
  PostsList,
  CardPost,
  CardHeader,
  Data,
  CardText,
} from './styles';

export interface Post {
  id: string;
  text: string;
  updated_at: string;
  formattedDate: string;
}

const MyPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const navigation = useNavigation();
  const { signOut } = useAuth();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      async function loadPosts(): Promise<void> {
        const response = await api.get('users');

        const postsFormatted = response.data.map((post: Post) => ({
          ...post,
          formattedDate: new Date(post.updated_at).toLocaleDateString('pt-br'),
        }));

        setPosts(postsFormatted);
      }

      loadPosts();
    });

    return unsubscribe;
  }, [navigation]);

  const navigateToDeletePost = useCallback(
    (postId: string) => {
      navigation.navigate('DeletePost', { postId });
    },
    [navigation],
  );

  const navigateToEditPost = useCallback(
    (postId: string, text: string) => {
      navigation.navigate('EditPost', { postId, text });
    },
    [navigation],
  );

  return (
    <Container>
      <Header>
        <GoToMyPosts onPress={() => navigation.navigate('Feed')}>
          <Icon name="arrow-left" size={20} color="#A9A9A9" />
          <GoToMyPostsText>Voltar</GoToMyPostsText>
        </GoToMyPosts>

        <GoToMyPosts onPress={signOut}>
          <GoToMyPostsText>Sair</GoToMyPostsText>
          <Icon name="log-out" size={20} color="#A9A9A9" />
        </GoToMyPosts>
      </Header>

      <Image source={ideaImg} />

      <Title>Minhas ideias</Title>

      <PostsList
        data={posts}
        keyExtractor={post => post.id}
        renderItem={({ item }) => (
          <CardPost>
            <CardHeader>
              <Icon
                name="trash"
                size={24}
                color="#a9a9a9"
                onPress={() => navigateToDeletePost(item.id)}
              />
              <Icon
                name="edit"
                size={24}
                color="#f26763"
                onPress={() => navigateToEditPost(item.id, item.text)}
              />
            </CardHeader>
            <Data>{item.formattedDate}</Data>
            <CardText>{item.text}</CardText>
          </CardPost>
        )}
      />
    </Container>
  );
};

export default MyPosts;
