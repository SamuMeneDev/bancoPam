import { View, Text, TextInput, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
export default function Login() {
  const navigate = useNavigation();
  return (
    <View className="flex-1">
      <View
        style={styles.banner}
        className="gap-3 items-center justify-around bg-blue-950"
      >
        <Text className="text-white font-bold text-5xl">Login</Text>
        <Image
          style={styles.img}
          tintColor={"#fff"}
          source={require("bootstrap-icons/icons/bank2.svg")}
        />
      </View>
      <View style={styles.form} className="flex flex-col p-3 gap-3 items-center">
        <TextInput
          className="w-[90%] font-semibold text-lg text-stone-800 border-2 rounded-lg p-2 border-stone-300"
          placeholder="EMAIL"
        />
        <TextInput
          className="w-[90%] font-semibold text-lg text-stone-800 border-2 rounded-lg p-2 border-stone-300"
          placeholder="SENHA"
        />

        <Pressable onPress={()=>navigate.navigate('Cadastro')}>
            <Text className="text-orange-500 text-lg font-semibold mb-7">
                Não tem uma conta? Cadastre-se
            </Text>
        </Pressable>

        <Pressable className="bg-orange-500 w-[75%] rounded-md p-2">
          <Text className="text-white text-center font-semibold text-2xl">
            Logar
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
