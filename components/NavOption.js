import React from "react";
import {FlatList,Image ,TouchableOpacity,Text,View} from "react-native";
import tw from "tailwind-react-native-classnames"
import { Icon } from "react-native-elements";
import {useNavigation} from "@react-navigation/native";
import { selectOrigin } from "../slices/navSlice";
import { useSelector } from "react-redux";


const data = [
    {
        id:"123",
        title : "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    }
    ,
    {
        id:"456",
        title : "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    }
]

const NavOptions =() => {

    const navigation =useNavigation();
    const origin = useSelector(selectOrigin);
    return (
       <FlatList 
       data= {data}
       horizontal
       ketExtractor={(item) => item.id}
       renderItem ={({item}) => (
        <TouchableOpacity 
        onPress={() => navigation.navigate(item.screen)}
        style ={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        disabled ={!origin}
        >
        
            <View style = {tw`${!origin && "opacity-20"}`}>
                <Image 
                style ={{width:120,
                    height:120 ,
                    resizeMode: "contain"
                }}
                source = {{uri : item.image}}
                />

                <Text style = {tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                <Icon 

                style ={tw`p-2 bg-black rounded-full w-10 mt-4`}
                    name="arrowright"
                    color="white"
                    type="antdesign"
                />

                
            </View>
        </TouchableOpacity>
       )}
       />
    );
};
export default NavOptions