import { View, Text, Image, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function Cadastro() {
    const navigate = useNavigation();
    return (
        <View className="flex-1">
      <View
        style={styles.banner}
        className="gap-3 items-center justify-around bg-sky-950"
      >
        <Text className="text-white font-bold text-5xl">Cadastro</Text>
        <Image
          style={styles.img}
          tintColor={"#fff"}
          source={require("bootstrap-icons/icons/bank.svg")}
        />
      </View>
      <View style={styles.form} className="flex flex-col p-3 gap-3 items-center">
        <TextInput
          className="w-[90%] font-semibold text-lg text-stone-800 border-2 rounded-lg p-2 border-stone-300"
          placeholder="NOME COMPLETO"
        />
        <TextInput
          className="w-[90%] font-semibold text-lg text-stone-800 border-2 rounded-lg p-2 border-stone-300"
          placeholder="EMAIL"
        />
        <TextInput
          className="w-[90%] font-semibold text-lg text-stone-800 border-2 rounded-lg p-2 border-stone-300"
          placeholder="SENHA"
        />
        <TextInput
          className="w-[90%] font-semibold text-lg text-stone-800 border-2 rounded-lg p-2 border-stone-300"
          placeholder="CPF"
        />

        <Pressable onPress={()=>navigate.navigate('Login')}>
            <Text className="text-orange-500 text-lg font-semibold mb-7">
                Já tem uma conta? Faça Login
            </Text>
        </Pressable>

        <Pressable className="bg-orange-500 w-[75%] rounded-md p-2">
          <Text className="text-white text-center font-semibold text-2xl">
            Logar
          </Text>
        </Pressable>
      </View>
    </View>
    )

}