import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity} from 'react-native';
import { Button, Card, TextInput, Avatar} from 'react-native-paper';
import {Input, Icon, Divider, FAB } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { NavigationContainer,  useNavigation, useIsFocused } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Knowing_Our_Numbers = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('OTP')}>
                <Icon name='angle-left' type='font-awesome' color='black' size={35}/>
            </TouchableWithoutFeedback>
            <Text style={{fontSize: 25, fontWeight: '700', color: 'black', marginLeft: 20}}>Knowing Our Numbers</Text>
        </View>

        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF8EE'
  },
  header: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: '#FFEECB',
    padding: 10,
    alignItems: 'center'
},
});

export default Knowing_Our_Numbers;