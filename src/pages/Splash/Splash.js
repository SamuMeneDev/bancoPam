import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react";
import { View, Image, ActivityIndicator } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import UsuarioService from "../../service/UsuarioService";
export default function Splash() {


    const navigate = useNavigation();
    
    async function isLogin() {
        const loginObj = await UsuarioService.getLogged();
        if(loginObj!=null) {
            if(loginObj.email != undefined && loginObj.senha != undefined) {
                navigate.navigate("Home", loginObj);
            } else {
                navigate.navigate("Login");
            }
        } else {
            navigate.navigate("Login");
        }
     }
    useEffect(()=>{
        setTimeout(()=>{
            UsuarioService.init();
            isLogin();
        }, 2000)
    }, [])

    return (
        <View style={{flex: 1}} className="justify-center bg-teal-600">
            <View style={{flex:0.5}} className="items-center justify-end p-3">
                <Image style={{width: "100%", height:"50%"}} resizeMode="contain" tintColor={"#ffffff"} source={require('../../../assets/img/btg-logo.svg')} />
            </View>
            <View style={{flex:0.5}} className="items-center justify-start">
                <ActivityIndicator size="large" color="#ffffff" />
            </View>
        </View>
    )
}