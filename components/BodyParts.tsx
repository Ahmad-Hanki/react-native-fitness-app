import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import bodyPart from "@/libs/ExreciseData";
const BodyParts = () => {
  return (
    <View className="mx-4">
      <Text className="text-4xl ">Exercises</Text>

      <FlatList
        data={bodyPart ?? []}
        numColumns={2}
        contentContainerStyle={{
          paddingBottom: 50,
          paddingTop: 20,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        keyExtractor={(items) => items.image}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <BodyPartCard item={item} index={index} />
        )}
      />
    </View>
  );
};

export default BodyParts;

const BodyPartCard = ({ item, index }: { item: any; index: number }) => {
  return (
    <View className="flex-1">
      <TouchableOpacity className="flex justify-end px-1 mb-4 relative w-full h-[200px] rounded-2xl overflow-hidden">
        <Image
          source={item.image}
          resizeMode="cover"
          className="max-w-full max-h-full absolute inset-0"
        />

        <View className="absolute w-full h-full bg-black/40 top-[130px]" />

        <Text
        className="text-2xl text-white pb-2"
        >
            {item?.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
