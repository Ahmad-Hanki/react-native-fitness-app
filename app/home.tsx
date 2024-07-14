import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Text, SafeAreaView, StatusBar, Image } from "react-native";
import ImageSlider from "@/components/ImageSlider";
import BodyParts from "@/components/BodyParts";

const home = () => {
  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-5 py-10">
      <StatusBar barStyle={"dark-content"} />

      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text className="text-3xl font-bold tracking-wider text-neutral-700">
            Ready to
          </Text>
          <Text className="text-3xl font-bold tracking-wider text-neutral-700">
            Workout
          </Text>
        </View>

        <View className="flex justify-center items-center space-y-2">
          <Image
            className="h-10 w-10 rounded-full"
            source={require("../assets/images/avatar.png")}
          />

          <View className="bg-neutral-200 rounded-full justify-center items-center h-10 w-10">
            <Ionicons name="notifications" size={25} color="gray" />
          </View>
        </View>
      </View>

      <View>
        <ImageSlider />
      </View>

      <View className="flex-1">
        <BodyParts />
      </View>
    </SafeAreaView>
  );
};

export default home;
