import React from "react";
import {KeyboardAvoidingView ,Platform} from 'react-native';
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./screens/Login&Register/Login";
import RegisterPage from "./screens/Login&Register/Register";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store ={store}>
      <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios"?"padding":"height"}
        style ={{flex:1}}
        keyboardVerticalOffset ={Platform.OS ==="ios" ? -64 :0}
        >
          
          <Stack.Navigator>
          <Stack.Screen 
            name="Login"
            component ={LoginPage} 
            options ={{
              headerShown :false ,
            }}
            />
            <Stack.Screen 
            name="Register"
            component ={RegisterPage} 
            options ={{
              headerShown :false ,
            }}
            />

            <Stack.Screen 
            name="HomeScreen"
            component ={HomeScreen} 
            options ={{
              headerShown :false ,
            }}
            />
            <Stack.Screen 
            name="MapScreen"
            component ={MapScreen} 
            options ={{
              headerShown :false ,
            }}
            />
            
          </Stack.Navigator>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
    
  );
}


