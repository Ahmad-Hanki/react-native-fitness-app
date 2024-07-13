import { useRouter } from "expo-router";
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import Animated, { FadeIn, FadeInDown, FadeOut } from "react-native-reanimated";

const Index = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 flex justify-end ">
      <StatusBar barStyle={"light-content"} />
      <Image
        source={require("../assets/images/welcome.png")}
        className="h-full w-full absolute "
      />
      <View className="h-full w-full absolute bg-black/25 " />
      <Animated.View 
      
      entering={FadeInDown.delay(200).springify()} className="items-center z-10 py-8">
        <Text className="text-white tracking-wide text-3xl font-bold">
          Best <Text className="text-rose-500 ">Workouts</Text>
        </Text>
        <Text className="text-white tracking-wide text-3xl font-bold">
          For you
        </Text>

        <View className="pt-7">
          <TouchableOpacity onPress={() => {
            router.push('/home')
          }} className="w-[80vw] h-14 bg-red-500 rounded-full justify-center items-center ">
            <Text className="text-2xl text-white font-bold tracking-widest">
              Get started
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Index;
