import { View, Image, Text, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <View className="bg-white pt-5">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon size={35} color="#00CCBB" />
        </View>

        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p3">
            <MagnifyingGlassIcon color="#00CCBB" />
            <TextInput
              placeholder="Restaurants and cuisines"
              keyboardType="default"
            />
          </View>

          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>
      </View>

      <ScrollView>
        <Categories />

        {/* Featured */}
        <FeaturedRow
          id="1"
          title="Featured"
          description="Paid placements from our partners"
        />

        {/* Tasty Discount */}
        <FeaturedRow
          id="2"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts."
        />

        {/* Offers near you */}
        <FeaturedRow
          id="3"
          title="Offers near you!"
          description="Why not support your local restaurant tonight."
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
