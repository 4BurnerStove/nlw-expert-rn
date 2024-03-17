import { Text, Pressable, PressableProps } from "react-native"

type CategoryProps = PressableProps & {
  title: string,
  isSelected?: boolean
}



export function CategoryButton({ title, isSelected, ...rest }: CategoryProps){
  return (
    <Pressable className="bg-slate-800 px-4 justify-center rounded-md h-10" 
    {...rest}>      
      <Text className="text-slate-100 font-sub font-subtitle text-sm" >{title}</Text>
    </Pressable>
  )
}