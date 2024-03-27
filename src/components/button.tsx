import { ReactNode } from "react";
import { Text } from "react-native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  children: ReactNode
}

type ButtonTextProps = {
  children: ReactNode
}

function Button({ children, ...rest}: ButtonProps){
  return (
    <TouchableOpacity className="h-12 bg-lime-400 rounded-md items-center flex-row" {...rest}>
      {children}
    </TouchableOpacity>
  )
}

function ButtonText({ children }: ButtonTextProps){
  return (
    <Text className="text-black font-heading text-base mx-2">
      {children}
    </Text>
  )
}