import { View, Image, Text } from "react-native";
import { useLocalSearchParams } from "expo-router" // recuperar ID dos produtos 
import { Feather } from "@expo/vector-icons"

import { PRODUCTS } from "@/src/utils/data/products";
import { formatCurrency } from "@/utils/functions/format-currency"
import { Button } from "@/src/components/button";
import { LinkButton } from "@/src/components/link-button";

export default function Product(){
  const { id } = useLocalSearchParams() 

  const product = PRODUCTS.filter((item) => item.id === id)[0]

  return (
    <View className="flex-1">
      <Image 
      source={product.cover} 
      className="w-full h-52" 
      resizeMode="cover"/>
      <View className="flex-1 p-4">
        <Text className="text-lime-400 text-2xl font-heading my-4">
          {formatCurrency(product.price)}
        </Text>
        <Text className="text-slate-400 font-body text-base leading-6  mb-6">
          {product.description}
        </Text>
        {
          product.ingredients.map((ingredient) => (
            <Text key={ingredient} className="text-slate-400 text-base leading-6">{"\u2022"} {ingredient}</Text>
          ))}
      </View>

      <View className="p-5 pb-8 gap-5">
            <Button>
              <Button.Icon>
                <Feather name="plus-circle" size={20}/>
              </Button.Icon>
              <Button.Text>
                Adicionar ao pedido
              </Button.Text>
            </Button>

            <LinkButton title="Voltar ao cardápio" href="/"></LinkButton>
      </View>
    </View>
  )
}