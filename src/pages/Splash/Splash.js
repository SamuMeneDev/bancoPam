import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react";
import { View, Image, ActivityIndicator } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Splash() {
    const navigate = useNavigation();
     async function isLogin() {
        const login = await AsyncStorage.getItem("@login");
        const loginObj = JSON.parse(login);
        if(login!=null) {
            if(loginObj.email != undefined && loginObj.senha != undefined) {
                navigate.navigate("Home");
            } else {
                navigate.navigate("Login");
            }
        } else {
            navigate.navigate("Login");
        }
     }
    useEffect(()=>{
        setTimeout(()=>{
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