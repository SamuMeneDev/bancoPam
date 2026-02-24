import { View, Text, Image, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Checkbox } from 'expo-checkbox';
import { useState } from "react";

export default function Login() {
  const navigate = useNavigation();
  const [lembreMim, setlembreMim] = useState(false);
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View
        style={{ flex: 0.25 }}
        className="rounded-b-3xl bg-emerald-500 items-center p-3 justify-between"
      >
        <Image
          resizeMode="contain"
          style={{height: '50%'}}
          tintColor={"#ffffff"}
          source={require("../../../assets/img/btg-logo.svg")}
        />
        <Text className="text-4xl text-white font-normal">Bem vindo</Text>
        <Text className="text-2xl text-white font-light">
          Faça login na sua conta
        </Text>
      </View>
      <View style={{ flex: 0.18 }} className="justify-center p-3 gap-7">
        <View className="gap-2 flex-row border items-center rounded-lg border-stone-300 p-1 bg-stone-200">
          <Image
            style={{ height: 30, width: 30 }}
            tintColor={"#12837E"}
            source={require("bootstrap-icons/icons/envelope.svg")}
          />
          <TextInput
            placeholder="E-Mail"
            className="text-2xl text-stone-600 font-semibold w-full outline-none"
          />
        </View>
        <View className="gap-2 flex-row border items-center rounded-lg border-stone-300 p-1 bg-stone-200">
          <Image
            style={{ height: 30, width: 30 }}
            tintColor={"#12837E"}
            source={require("bootstrap-icons/icons/lock.svg")}
          />
          <TextInput
            placeholder="Senha"
            className="text-2xl text-stone-600 font-semibold w-full outline-none"
          />
          <Pressable>
            <Image
              style={{height:30, width:30}}
              tintColor={"#12837E"}
              source={require("bootstrap-icons/icons/eye-fill.svg")}
            />
          </Pressable>
        </View>
      </View>
      <View  style={{ flex: 0.04 }} className="flex-row gap-2 p-3 ml-3 items-center">
        <Checkbox value={lembreMim} onValueChange={setlembreMim} />
        <Text className="text-2xl font-light">Lembre-se de Mim</Text>
      </View>
      <View style={{flex:0.12}} className="items-center justify-center">
        <Pressable onPress={()=>navigate.navigate("Home")} className="bg-teal-600 w-[50%] rounded-lg flex items-center p-2 border-2 border-teal-700">
          <Text className="text-white font-bold text-2xl">Login</Text>
        </Pressable>
      </View>
      <View style={{flex:0.12}} className="justify-center items-center">
        <Pressable onPress={()=>navigate.navigate("Cadastro")}>
          <Text className="text-xl font-light text-teal-600">Não possui uma conta? Cadastre-se</Text>
        </Pressable>
      </View>
    </View>
  );
}
