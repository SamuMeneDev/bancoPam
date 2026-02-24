import { View, TextInput, Image } from "react-native";

export default function InputEmail({ value, onChangeText, placeholder }) {
  return (
    <View className="gap-2 flex-row border items-center rounded-lg border-stone-300 p-1 bg-stone-200">
      <Image
        style={{ height: 30, width: 30 }}
        tintColor={"#12837E"}
        source={require("bootstrap-icons/icons/envelope.svg")}
      />
      <TextInput
        placeholder={placeholder}
        className="text-2xl text-stone-600 font-semibold w-full outline-none"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
