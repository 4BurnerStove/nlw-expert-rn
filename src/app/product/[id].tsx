import { View, Image, Text } from "react-native";
import { useLocalSearchParams } from "expo-router" // recuperar ID dos produtos 
import { PRODUCTS } from "@/src/utils/data/products";


export default function Product(){
  const { id } = useLocalSearchParams() 

  const product = PRODUCTS.filter((item) => item.id === id)[0]
  console.log(product)

  return (
    <View className="flex-1">
      <Image 
      source={product.cover} 
      className="w-full h-52" 
      resizeMode="cover"/>
      <Text className="text-lime-400 text-2xl font-heading my-4">
        {product.price}
      </Text>
    </View>
  )
}