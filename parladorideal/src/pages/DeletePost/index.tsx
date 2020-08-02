import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../services/api';

import Button from '../../components/Button';

import { Container, Title } from './styles';

interface RouteParams {
  postId: string;
}

const DeletePost: React.FC = () => {
  const { goBack } = useNavigation();

  const route = useRoute();
  const { postId } = route.params as RouteParams;

  const handleDeletePost = useCallback(async () => {
    await api.delete(`posts/${postId}`);

    goBack();
  }, [postId, goBack]);

  return (
    <Container>
      <Icon name="alert-circle" size={80} color="#e51a13" />

      <Title>Deseja excluir o post?</Title>

      <Button primary={false} onPress={handleDeletePost}>
        Sim
      </Button>
    </Container>
  );
};

export default DeletePost;
