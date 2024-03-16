import { View,Image } from "react-native";

export function Header(){
    return (
        <View className="Flex-row items-center border-b border-slate-700 pb-5 mx-5">
            <Image source={require("@/assets/logo.png")} className="h-6 w-32"></Image>
        </View>
    )
}