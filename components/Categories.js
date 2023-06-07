import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard.js";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="category 1"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="category 2"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="category 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="category 4"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="category 5"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="category 6"
      />
    </ScrollView>
  );
};

export default Categories;
