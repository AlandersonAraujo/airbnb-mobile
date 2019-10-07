import React, { useState } from "react";
import { AsyncStorage, Alert } from "react-native";
import {
  Container,
  TextLabel,
  ContainerForm,
  InputLabel,
  ButtonLabel,
  TextButton,
  ButtonLabelCancel
} from "./styles";
import api from "../../services/api";

export default function Book({ navigation }) {
  const [date, setDate] = useState("");

  const id = navigation.getParam("id");

  async function handleSubmit() {
    const user_id = await AsyncStorage.getItem("user");

    await api.post(
      `/spots/${id}/bookings`,
      {
        date
      },
      {
        headers: { user_id }
      }
    );

    Alert.alert("Solicitação de reserva enviada com sucesso");

    navigation.navigate("List");
  }

  function handleCancel() {
    navigation.navigate("List");
  }

  return (
    <Container>
      <ContainerForm>
        <TextLabel>Data de interesse*</TextLabel>
        <InputLabel
          placeholder="Data da reserva"
          autoCapitalize="words"
          autoCorrect={false}
          value={date}
          onChangeText={setDate}
        />

        <ButtonLabel onPress={handleSubmit}>
          <TextButton>Solicitar reserva</TextButton>
        </ButtonLabel>
        <ButtonLabelCancel onPress={handleCancel}>
          <TextButton>Cancelar</TextButton>
        </ButtonLabelCancel>
      </ContainerForm>
    </Container>
  );
}
