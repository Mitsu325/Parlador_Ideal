import React, { useRef, useCallback } from 'react';
import {
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

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
  Form,
} from './styles';

interface CreatePost {
  text: string;
}

const Post: React.FC = () => {
  const navigation = useNavigation();

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

        await api.post('/posts', data);

        Alert.alert(
          'Publicação realizada com sucesso!',
          'Continue explorando as outras ideias.',
        );

        navigation.navigate('Feed');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        Alert.alert(
          'Erro na publicação',
          'Ocorreu um erro ao fazer a publicação, tente novamente.',
        );
      }
    },
    [navigation],
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
            <Header>
              <Image source={logoImg} />
              <GoToMyPosts onPress={() => navigation.navigate('Feed')}>
                <Icon name="arrow-left" size={20} color="#A9A9A9" />
                <GoToMyPostsText>Voltar</GoToMyPostsText>
              </GoToMyPosts>
            </Header>

            <Image source={postImg} />

            <Title>Poste sua ideia</Title>

            <Form ref={formRef} onSubmit={handleCreatePost}>
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
