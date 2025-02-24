
import React , { useState } from "react";
import {SafeAreaView,StyleSheet , Text, View ,TouchableOpacity ,FlatList ,Image} from "react-native";
import tw from"tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

 
const data =[
    {
        id:"Uber-X-123",
        title:"UberX",
        multiplier:1,
        image:"https://links.papareact.com/3pn",
    },
    {
        id:"Uber-XL-456",
        title:"Uber XL",
        multiplier:1.2,
        image:"https://links.papareact.com/5w8",
    },
    {id:"Uber-LUX-789",
        title:"Uber LUX",
        multiplier:1.75,
        image:"https://links.papareact.com/7pf",
    },
];

const SURGE_CHARGE_RATE =1.5;  
const exchangeRate = 4.5;

const RideOptionsCard =() => {
    const navigation=useNavigation();
    const [selected , setSelected] = useState(null);
    const travelTimeInformation =useSelector(selectTravelTimeInformation);
    const distanceInKm = travelTimeInformation?.distance.text ? parseFloat(travelTimeInformation?.distance?.text) * 1.60934 : 'Distance unavailable';
    const roundedDistanceInKm = parseFloat (distanceInKm).toFixed(2);


    return (
        <SafeAreaView style ={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity 
                onPress ={() => navigation.navigate("NavigateCard")} 
                style = {tw`absolute  top-1 left-2 z-50 p-3 rounded-full`}
                >
                    <Icon name = "chevron-left" type="fontawesome"/>
                </TouchableOpacity>
            <Text style ={tw`text-center py-3 text-xl`}>     Select a Ride - {roundedDistanceInKm} Km</Text>  
                
            </View>
    

            <FlatList
                data={data}
                keyExtractor ={(item) =>item.id}
                renderItem ={({item :{id,title,multiplier ,image} , item}) => (
                    <TouchableOpacity 
                    onPress={() => setSelected(item)}
                    style ={tw`flex-row justify-between items-center px-4 ${id===
                        selected?.id && "bg-gray-200"
                    }`}>
                        <Image 
                        style={{
                            width:100,
                            height:100,
                            resizeMode: "contain",
                            
                        }}
                        source ={{uri:image}}
                        />
                        <View style ={tw`-ml-4`}>
                            <Text style ={tw`text-xl font-semibold`}>{title}</Text>
                            <Text>{travelTimeInformation?.duration?.text} Travel Time </Text>
                        </View>
                        <Text style ={tw`text-xl`}>

                        {new Intl.NumberFormat('en-IN', {
                            style: 'currency',
                            currency: 'INR'
                            }).format(

                            (travelTimeInformation?.duration.value *SURGE_CHARGE_RATE*multiplier)/100 *exchangeRate
                        )}


                        </Text>
                    </TouchableOpacity>
                )}
            />

            <SafeAreaView style ={tw`mt-auto border-t border-gray-200`}>
                <TouchableOpacity disabled ={!selected} style ={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
                    <Text style = {tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </SafeAreaView>
        
        </SafeAreaView>
    );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});