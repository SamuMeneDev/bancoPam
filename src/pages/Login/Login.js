import { View, Text, Image, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Checkbox } from "expo-checkbox";
import { useState } from "react";
import InputSenha from "../../components/InputSenha";
import InputIcon from "../../components/InputIcon";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const navigate = useNavigation();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [lembreMim, setlembreMim] = useState(false);
  const [loginFail, setLoginFail] = useState(false);
  
  async function buscaDados() {
    const busca = await AsyncStorage.getItem("@cadastro");
    const buscaObj = JSON.parse(busca);
    try {
      if(buscaObj.email == email && buscaObj.senha == senha) {
        await AsyncStorage.setItem("@login", JSON.stringify({email:email, senha:senha}));
        navigate.navigate("Home");
      }
    } catch(erro) {
      setLoginFail(true);
      setTimeout(()=>{
        setLoginFail(false);
      }, 3000);
    }
    
  }

  function logar() {
    buscaDados();
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ flex: 0.25 }}
        className="rounded-b-3xl bg-emerald-500 items-center p-3 justify-between"
      >
        <Image
          resizeMode="contain"
          style={{ height: "50%" }}
          tintColor={"#ffffff"}
          source={require("../../../assets/img/btg-logo.svg")}
        />
        <Text className="text-4xl text-white font-normal">Bem vindo</Text>
        <Text className="text-2xl text-white font-light">
          Faça login na sua conta
        </Text>
      </View>
      <View style={{ flex: 0.25 }} className="justify-center p-3 gap-7">
        <View>
          {loginFail?<Text className="text-red-800 font-semibold text-sm">* Email ou senha inválidos</Text>:<></>}
          <InputIcon icone={require("bootstrap-icons/icons/envelope.svg")}>
            <TextInput
              value={email}
              onChangeText={(e)=>setEmail(e)}
              placeholder="E-Mail"
              className="text-xl text-stone-600 font-semibold w-full outline-none"
            />
          </InputIcon>
        </View>
        <InputSenha value={senha} onChangeText={setSenha} placeholder="Senha" />
      </View>
      <View
        style={{ flex: 0.04 }}
        className="flex-row gap-2 p-3 ml-3 items-center"
      >
        <Checkbox value={lembreMim} onValueChange={setlembreMim} />
        <Text className="text-2xl font-light">Lembre-se de Mim</Text>
      </View>
      <View style={{ flex: 0.12 }} className="items-center justify-center">
        <Pressable
          onPress={() => logar()}
          className="bg-teal-600 w-[50%] rounded-lg flex items-center p-2 border-2 border-teal-700"
        >
          <Text className="text-white font-bold text-2xl">Login</Text>
        </Pressable>
      </View>
      <View style={{ flex: 0.12 }} className="justify-center items-center">
        <Pressable onPress={() => navigate.navigate("Cadastro")}>
          <Text className="text-xl font-light text-teal-600">
            Não possui uma conta? Cadastre-se
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
