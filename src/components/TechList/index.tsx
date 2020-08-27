import React, { useState } from 'react';
import { Text, FlatList } from 'react-native';

import {
  Container,
  TextInput,
  ActionButton,
  ActionButtonText,
  ListContainer,
} from './styles';

const TechList: React.FC = () => {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  return (
    <Container>
      <ListContainer>
        <FlatList
          data={techs}
          keyExtractor={(tech) => tech}
          renderItem={({ item }) => (
            <Text>{item}</Text>
          )}
        />
      </ListContainer>

      <TextInput
        testID="tech-input"
        placeholder="Digite o nome de uma tecnologia"
        value={newTech}
        onChangeText={setNewTech}
      />
      <ActionButton onPress={handleAdd}>
        <ActionButtonText>Adicionar</ActionButtonText>
      </ActionButton>
    </Container>
  );
};

export default TechList;
