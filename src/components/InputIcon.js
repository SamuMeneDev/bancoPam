import { View, TextInput, Image } from "react-native";

export default function InputIcon({ children }) {
  return (
    <View className="gap-2 flex-row border items-center rounded-lg border-stone-300 p-1 bg-stone-200">
      {children}
    </View>
  );
}
