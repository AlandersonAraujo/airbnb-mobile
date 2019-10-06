import React, { useState, useEffect } from "react";
import { Image, AsyncStorage } from "react-native";
import logo from "../../assets/logo.png";
import {
  Container,
  TextLabel,
  ContainerForm,
  InputLabel,
  ButtonLabel,
  TextButton
} from "./styles";
import api from "../../services/api";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [techs, setTechs] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("user").then(user => {
      if (user) {
        navigation.navigate("List");
      }
    });
  }, []);

  async function handleSubmit() {
    const response = await api.post("/sessions", {
      email
    });

    const { _id } = response.data;

    await AsyncStorage.setItem("user", _id);
    await AsyncStorage.setItem("techs", techs);

    navigation.navigate("List");
  }

  return (
    <Container>
      <Image source={logo} />
      <ContainerForm>
        <TextLabel>E-mail</TextLabel>
        <InputLabel
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        <TextLabel>Tecnologias</TextLabel>
        <InputLabel
          placeholder="Digite as tecnologias"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
        />

        <ButtonLabel onPress={handleSubmit}>
          <TextButton>Buscar</TextButton>
        </ButtonLabel>
      </ContainerForm>
    </Container>
  );
}
