import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputIcon from "../../components/InputIcon";
import InputSenha from "../../components/InputSenha";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Cadastro() {

  const navigate = useNavigation();

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [senhaConfirm, setSenhaConfirm] = useState();
  const [cpf, setCpf] = useState();
  const [dia, setDia] = useState();
  const [mes, setMes] = useState();
  const [ano, setAno] = useState();

  async function salvarDados(dado) {
    await AsyncStorage.setItem("@cadastro", JSON.stringify(dado));
  }
  
  function criarConta() {
    try {
      const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        cpf: cpf,
        dataNasc: {
          dia: dia,
          mes: mes,
          ano: ano
        }
      }
      salvarDados(usuario);
      // Tratamento de Exeções e erros
      navigate.navigate("Login");
    } catch(erro) {

    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.2 }} className="items-center p-3 justify-between">
        <Image
          resizeMode="contain"
          style={{ height: "50%" }}
          tintColor={"#1c398e"}
          source={require("../../../assets/img/btg-logo.svg")}
        />
        <Text className="text-4xl text-center text-cyan-900 font-normal">
          Crie sua Conta BTG
        </Text>
      </View>
      <ScrollView style={{ flex: 0.8 }} className="p-1">
        <View style={{ flex: 0.55 }} className="p-3 gap-3">
          <InputIcon icone={require("bootstrap-icons/icons/person.svg")}>
            <TextInput
              keyboardType="default"
              textContentType="name"
              placeholder="Nome Completo"
              value={nome}
              onChangeText={setNome}
              className="text-xl text-stone-600 font-semibold w-full outline-none"
            />
          </InputIcon>
          <InputIcon icone={require("bootstrap-icons/icons/envelope.svg")}>
            <TextInput
              keyboardType="email-address"
              textContentType="emailAddress"
              value={email}
              onChangeText={setEmail}
              placeholder="E-Mail"
              className="text-xl text-stone-600 font-semibold w-full outline-none"
            />
          </InputIcon>
          <InputSenha value={senha} onChangeText={setSenha} placeholder="Senha" />
          <InputSenha value={senhaConfirm} onChangeText={setSenhaConfirm} placeholder="Confirme a Senha" />
          <View className="border items-center rounded-lg border-stone-300 p-1 bg-stone-200">
            <TextInput
              placeholder="CPF"
              value={cpf}
              onChangeText={setCpf}
              keyboardType="numeric"
              inputMode="numeric"
              className="text-xl pl-3 text-stone-600 font-semibold w-full outline-none"
            />
          </View>
        </View>
        <View style={{ flex: 0.15 }} className="p-3 gap-5 justify-between">
          <View className="flex-row items-center gap-2 pl-5">
            <Image
              style={{ height: 30, width: 30 }}
              tintColor={"#00598a"}
              source={require("bootstrap-icons/icons/calendar.svg")}
            />
            <Text className="font-semibold text-xl text-sky-800">
              Data de Nascimento
            </Text>
          </View>
          <View className="flex-row justify-around ">
            <TextInput
              keyboardType="number-pad"
              maxLength={2}
              value={dia}
              onChangeText={setDia}
              placeholder="DD"
              className="w-[20%] placeholder:text-stone-400 text-stone-700 text-center outline-none text-xl border items-center rounded-lg border-stone-300 p-1 bg-stone-200"
            />
            <TextInput
              keyboardType="number-pad"
              maxLength={2}
              value={mes}
              onChangeText={setMes}
              placeholder="MM"
              className="w-[20%] placeholder:text-stone-400 text-stone-700 text-center outline-none text-xl border items-center rounded-lg border-stone-300 p-1 bg-stone-200"
            />
            <TextInput
              keyboardType="number-pad"
              maxLength={4}
              value={ano}
              onChangeText={setAno}
              placeholder="AAAA"
              className="w-[25%] placeholder:text-stone-400 text-stone-700 text-center outline-none text-xl border items-center rounded-lg border-stone-300 p-1 bg-stone-200"
            />
          </View>
        </View>
        <View style={{ flex: 0.3 }} className="justify-end items-center gap-5">
          <Pressable
            onPress={()=>criarConta()}
            className="rounded-lg border-2 border-teal-800 items-center w-[60%] bg-teal-700 p-2 "
          >
            <Text className="text-xl text-white font-bold">Criar Conta</Text>
          </Pressable>

          <Pressable onPress={() => navigate.navigate("Login")}>
            <Text className="font-light text-teal-700 text-xl">
              Já possui uma conta? Faça Login
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
