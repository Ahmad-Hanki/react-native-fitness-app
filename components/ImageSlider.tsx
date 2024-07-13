import { Images } from "@/libs/ImagesData";
import { Dimensions, Image, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const ImageCard = ({ item }: any) => {
  return (
    <>
      <Image source={item} className="w-full h-full" resizeMode="cover" />
    </>
  );
};

const ImageSlider = () => {
  const width = Dimensions.get("window").width;
  return (
    <View >
      <Carousel
        loop
        width={width}
        height={width / 2}
        
        autoPlay={true}
        data={Images}
        scrollAnimationDuration={2000}
        onSnapToItem={() => console.log("current index:")}
        renderItem={({ item }) => (
          <View className="w-full mx-auto border border-black">
            <ImageCard item={item} />
          </View>
        )}
      />
    </View>
  );
};

export default ImageSlider;
