import {  useEffect, useState } from "react";
import { View, Image, Pressable, Text, ScrollView, FlatList } from "react-native";
import ModalRegistro from "../../components/ModalRegistro";
import Feather from '@expo/vector-icons/Feather';

import { useNavigation } from "@react-navigation/native";
import Registro from "../../components/Registro";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Home({ route }) {
  const navigate = useNavigation();
  const [usuario, setUsuario] = useState(route.params);

  const [mostrarSaldo, setMostrarSaldo] = useState(false);
  const [saldo,setSaldo] = useState(usuario.saldo);

  const [modalRegistro, setModalRegistro] = useState(false);

  useEffect(()=>{
    setSaldo(usuario.saldo);
  }, [usuario])

  async function sair() {
    await AsyncStorage.removeItem('@login');
    navigate.navigate('Login');
  }

  function criptoSaldo(valor) {
    const str = valor.toFixed(2).toString();
    console.log(str);
    let rotulo = "";
    for(let i =0; i<Math.abs(str.length); i++) {
      rotulo = rotulo + "*";
    }
    return rotulo;
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.33 }} className="bg-cyan-700 p-3 justify-between">
        <View className="flex-row justify-between items-center">
          <View className="rounded-full p-1 bg-stone-300">
          <Feather name="user" size={24} color="black" />
          </View>
          <View className="flex-row gap-10">
            <Pressable>
            <Feather name="settings" size={24} color="white" />
            </Pressable>
            <Pressable onPress={()=>sair()}>
            <Feather name="log-out" size={24} color="white" />
            </Pressable>
          </View>
        </View>
        <View style={{ flex: 0.4 }} className="justify-center">
          <Text className="text-white font-light text-4xl">Olá, {usuario.nome}</Text>
        </View>
        <View style={{ flex: 0.5 }} className="justify-end">
          <View className="justify-center">
            <Text className="text-white font-light text-base">Saldo atual</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-white font-semibold text-3xl">R$ {mostrarSaldo?saldo.toFixed(2):criptoSaldo(saldo)}</Text>
            <Pressable onPress={()=>setMostrarSaldo(!mostrarSaldo)}>
            <Feather name={mostrarSaldo?'eye-off':'eye'} size={24} color="white" />
            </Pressable>
          </View>
        </View>
      </View>
      <View>
        <View className="flex-row bg-teal-800 p-3 justify-center">
          <Pressable onPress={()=>setModalRegistro(true)} className="rounded-full bg-cyan-600 flex-row items-center p-2">
          <Feather name="dollar-sign" size={24} color="white" />
            <Text className="text-2xl text-white font-normal">Registrar Movimentação</Text>
          </Pressable>
        </View>
      </View>
      <View style={{flex:0.8}} className="p-3">
        <Text className="text-teal-800 font-light text-4xl">Atividades</Text>
        <ScrollView>
          <FlatList
          data={usuario.historico}
          keyExtractor={(item, index)=>index.toString()}
          renderItem={({item})=>(
            <Registro item={item} />
          )}
          />
        </ScrollView>
      </View>
      <ModalRegistro usuario={usuario} setUsuario={setUsuario} visible={modalRegistro} setModalVisible={setModalRegistro} />
    </View>
  );
}
