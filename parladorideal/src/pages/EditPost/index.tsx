import React, { useRef, useCallback } from 'react';
import {
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import postImg from '../../assets/post.png';

import Textarea from '../../components/Textarea';
import Button from '../../components/Button';

import { Container, GoToMyPosts, GoToMyPostsText, Title, Form } from './styles';

interface CreatePost {
  text: string;
}

interface RouteParams {
  postId: string;
  text: string;
}

const Post: React.FC = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const { postId, text } = route.params as RouteParams;

  console.log(text);

  const formRef = useRef<FormHandles>(null);

  const handleCreatePost = useCallback(
    async (data: CreatePost) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          text: Yup.string().required('Texto obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.patch(`/posts/${postId}`, data);

        Alert.alert('Publicação atualizada com sucesso!');

        navigation.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        Alert.alert(
          'Erro na edição do post',
          'Ocorreu um erro ao editar o post, tente novamente.',
        );
      }
    },
    [navigation, postId],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <GoToMyPosts onPress={() => navigation.navigate('MyPosts')}>
              <Icon name="arrow-left" size={20} color="#A9A9A9" />
              <GoToMyPostsText>Voltar</GoToMyPostsText>
            </GoToMyPosts>

            <Image source={postImg} />

            <Title>Editar Post</Title>

            <Form
              initialData={{ text }}
              ref={formRef}
              onSubmit={handleCreatePost}
            >
              <Textarea
                name="text"
                placeholder="Compartilhe a sua ideia..."
                multiline
                numberOfLines={6}
                textAlignVertical="top"
              />

              <Button
                primary={false}
                onPress={() => formRef.current?.submitForm()}
              >
                Publicar
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Post;
