import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export const requestData = [
  {
    name: "For Me",
    id: 0
  },
  {
    name: "For Someone",
    id: 1
  }
];

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

// If we have a SURGE pricing, this goes up
const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);

  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  const formatCurrency = (value) => {
    // Format the currency as per your requirements
    return `₵${value}`;
  };

  const handleBooking = () => {
    if (selectedOption?.id === 0) {
      // Book for yourself
      console.log("Book for yourself");
    } else if (selectedOption?.id === 1) {
      // Book for someone else
      console.log("Book for someone else");
    }
  };

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="font-awesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Select a Ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedOption(item)}
            style={tw`flex-row justify-between items-center px-10 ${
              item.id === selectedOption?.id ? "bg-gray-200" : ""
            }`}
            disabled={!travelTimeInformation}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{ uri: item.image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
              <Text>
                {travelTimeInformation?.duration?.text} Travel Time
              </Text>
            </View>
            <Text style={tw`text-xl`}>
              {formatCurrency(
                (travelTimeInformation?.duration?.value *
                  SURGE_CHARGE_RATE *
                  item.multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          disabled={!selectedOption}
          onPress={handleBooking}
          style={tw`bg-black py-3 m-3 ${
            !selectedOption ? "bg-gray-300" : ""
          }`}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selectedOption?.name}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
