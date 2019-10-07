import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const TextLabel = styled.Text`
  font-weight: bold;
  color: #444;
  margin-bottom: 6px;
`;

export const ContainerForm = styled.View`
  align-self: stretch;
  padding: 30px 30px;
`;

export const InputLabel = styled.TextInput.attrs({
  placeholderTextColor: "#999"
})`
  border: 1px solid #ddd;
  padding: 0 10px;
  font-size: 16px;
  color: #444;
  height: 44px;
  margin-bottom: 20px;
  border-radius: 8px;
`;

export const ButtonLabel = styled(RectButton)`
  height: 42px;
  background-color: #f05a5b;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const ButtonLabelCancel = styled(RectButton)`
  height: 42px;
  background-color: #ccc;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-top: 5px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
