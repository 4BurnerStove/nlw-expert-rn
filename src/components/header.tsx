import { View, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons"
import colors from "tailwindcss/colors";

type HeaderProps = {
    title: string,
    cartQuantityItems?: number
}

export function Header({title, cartQuantityItems = 0 }: HeaderProps){
    return (
        <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
            <View className="flex-1">
                <Image source={require("@/assets/logo.png")} className="h-6 w-32"></Image>
                <Text className="text-white text-xl font-heading mt-1">{title}</Text>

            </View>
            
         {
            cartQuantityItems > 0 &&
            
            <TouchableOpacity className="relative">
                <View className="bg-lime-300 h-4 w-4 rounded-full top-2.5 z-10 -right-3.5">
                    <Text className="text-center justify-center text-xs text-slate-900 ">{cartQuantityItems}</Text>
                </View>
                <Feather name="shopping-bag" color={colors.white} size={24}></Feather>
            </TouchableOpacity>
        }
        </View>
    )
}