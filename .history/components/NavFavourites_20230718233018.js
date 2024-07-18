import { FlatList, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const data = [
  {
    id: "123",
    icon: "home",
    location: "book for yourself",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "book for someone",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200 m-1`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { location, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
