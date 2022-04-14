import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { Button, Card, Modal, Portal, TextInput, Avatar, Searchbar, Provider} from 'react-native-paper';
import { NavigationContainer,  useNavigation, useIsFocused } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Animatable from 'react-native-animatable';
import {Input, Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import 'react-native-gesture-handler';
import CardSilder from 'react-native-cards-slider';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import moment from "moment";
import CalendarPicker from 'react-native-calendar-picker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from 'react-native-confirmation-code-field';
import OTP from './OTP';
import Verify_otp from './Verify_otp';
import Details from './Details';
import Profile from './Profile';
import Login from './Login';
import Choose_Chapter from './Choose_Chapter';
import Maths from './Maths';
import Knowing_Our_Numbers from './Knowing_Our_Numbers';
import Topics from './Topics';
import Question_Bank from './Question_Bank';
import By_Me from './By_Me';
import Schedule_Homework from './Schedule_Homework';
import Add_Topic_Name from './Add_Topic_Name';
import Select_Group from './Select_Group';
import Create_New_Question from './Create_New_Question';


function MyTabs() {
  return (
    <Tab.Navigator initialRouteName={'Knowing_Our_Numbers'} screenOptions={{ 
      tabBarIndicatorStyle: {backgroundColor: '#E36414', height: 5},
      // swipeEnabled: (false), 
      tabBarActiveTintColor: '#E36414',
      tabBarInactiveTintColor: 'black',
      tabBarStyle: { backgroundColor: 'white', height:70,}, 
      tabBarLabelStyle: { fontSize: 12, fontWeight:'bold', letterSpacing:1}, 
      gestureEnabled: false,
      headerShown: true,
      }} >
          <Tab.Screen name="Topics (5)" component={Topics} />
          <Tab.Screen name="Ques_Bank (688 Q)" component={Question_Bank} />
          <Tab.Screen name="By_Me" component={By_Me} />
      </Tab.Navigator>
  );
}

const App = () => {
  
    return(
      
        <NavigationContainer>
        
          <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'OTP'}>
          <Stack.Screen name="OTP" component={OTP} />
          <Stack.Screen name="Verify_otp" component={Verify_otp} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Choose_Chapter" component={Choose_Chapter} />
          <Stack.Screen name="Maths" component={Maths} />
          <Stack.Screen name="Knowing_Our_Numbers" component={MyTabs} />
          <Stack.Screen name="Topics" component={MyTabs} />
          <Stack.Screen name="Question_Bank" component={MyTabs} />
          <Stack.Screen name="By_Me" component={MyTabs} />
          <Stack.Screen name="Schedule_Homework" component={Schedule_Homework} />
          <Stack.Screen name="Add_Topic_Name" component={Add_Topic_Name} />
          <Stack.Screen name="Select_Group" component={Select_Group} />
          <Stack.Screen name="Create_New_Question" component={Create_New_Question} />
          
            </Stack.Navigator>
       
      </NavigationContainer>
     
     
    )
}
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
 
});

export default App;