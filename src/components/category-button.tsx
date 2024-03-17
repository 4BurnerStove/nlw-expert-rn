import { Text, Pressable, PressableProps } from "react-native"

type CategoryProps = {
  title: string,
  isSelected?: boolean
}

export function CategoryButton({ title, isSelected }: CategoryProps){
  return (
    <Pressable>
      <Text>{title}</Text>
    </Pressable>
  )
}