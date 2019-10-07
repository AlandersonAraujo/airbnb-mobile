import React, { useState, useEffect } from "react";
import { withNavigation } from "react-navigation";
import { FlatList } from "react-native";
import api from "../../services/api";
import {
  Container,
  ContainerTitle,
  Title,
  ListItem,
  ImageItem,
  TitleCompany,
  TitlePrice,
  ListButton,
  TextButton
} from "./styles";

function SpotList({ tech, navigation }) {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get("/spots", {
        params: { tech }
      });

      setSpots(response.data);
    }

    loadSpots();
  }, []);

  function handlerNavigate(id) {
    navigation.navigate("Book", { id });
  }

  return (
    <Container>
      <ContainerTitle>
        Empresas que usam <Title>{tech}</Title>
      </ContainerTitle>

      <FlatList
        data={spots}
        keyExtractor={spot => spot._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ListItem>
            <ImageItem
              source={{
                uri: item.thumbnail_url.replace(/localhost/g, "192.168.56.1")
              }}
            />
            <TitleCompany>{item.company}</TitleCompany>
            <TitlePrice>
              {item.price ? `R$${item.price}/dia` : "Gratuito"}
            </TitlePrice>
            <ListButton onPress={() => handlerNavigate(item._id)}>
              <TextButton>Solicitar reserva</TextButton>
            </ListButton>
          </ListItem>
        )}
      />
    </Container>
  );
}

export default withNavigation(SpotList);
