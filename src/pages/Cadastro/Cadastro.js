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
import Feather from '@expo/vector-icons/Feather';
import InputSenha from "../../components/InputSenha";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UsuarioService from "../../service/UsuarioService";

export default function Cadastro() {

  const navigate = useNavigation();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirm, setSenhaConfirm] = useState("");
  const [cpf, setCpf] = useState("");
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState("");
  
  function criarConta() {
    try {
      const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        cpf: cpf,
        saldo: 0,
        historico: [],
        dataNasc: {
          dia: dia,
          mes: mes,
          ano: ano
        }
      }
      UsuarioService.saveUsuario(usuario);
      navigate.navigate("Login");
    } catch(erro) {
      console.log(erro);
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
          <InputIcon>
          <Feather name="user" size={24} color="black" />
            <TextInput
              keyboardType="default"
              textContentType="name"
              placeholder="Nome Completo"
              value={nome}
              onChangeText={setNome}
              className="text-xl text-stone-600 font-semibold w-full outline-none"
            />
          </InputIcon>
          <InputIcon>
          <Feather name="mail" size={24} color="black" />
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
          <InputIcon>
          <Feather name="key" size={24} color="black" />
            <TextInput
              placeholder="CPF"
              value={cpf}
              onChangeText={setCpf}
              keyboardType="numeric"
              inputMode="numeric"
              className="text-xl pl-3 text-stone-600 font-semibold w-full outline-none"
            />
          </InputIcon>
        </View>
        <View style={{ flex: 0.15 }} className="p-3 gap-5 justify-between">
          <View className="flex-row items-center gap-2 pl-5">
          <Feather name="calendar" size={24} color="black" />
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
