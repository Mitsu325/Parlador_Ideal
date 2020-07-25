import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logoH.png';
import postImg from '../../assets/post.png';

import Textarea from '../../components/Textarea';
import Button from '../../components/Button';

import {
  Container,
  Header,
  GoToMyPosts,
  GoToMyPostsText,
  Title,
} from './styles';

const Post: React.FC = () => {
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

      <Image source={postImg} />

      <Title>Poste sua ideia</Title>

      <Textarea
        name="text"
        placeholder="Compartilhe a sua ideia..."
        multiline
        numberOfLines={6}
        textAlignVertical="top"
      />

      <Button primary={false}>Publicar</Button>
    </Container>
  );
};

export default Post;
