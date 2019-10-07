import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  margin-top: 40px;
`;

export const ContainerTitle = styled.Text`
  font-size: 16px;
  color: #444;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: #121212;
  font-size: 20px;
`;

export const ListItem = styled.View`
  margin-right: 10px;
  margin-left: 20px;
  margin-top: 5px;
`;

export const ImageItem = styled.Image`
  width: 200px;
  height: 120px;
  border-radius: 4px;
`;

export const TitleCompany = styled.Text`
  font-size: 20px;
  font-weight: normal;
  color: #444;
  margin-top: 10px;
`;

export const TitlePrice = styled.Text`
  margin-top: 2px;
  font-size: 15px;
  color: #121212;
  font-weight: bold;
`;

export const ListButton = styled(RectButton)`
  height: 32px;
  background-color: #f05a5b;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-top: 15px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;
