import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity} from 'react-native';
import { Button, Card, TextInput} from 'react-native-paper';
import {Input, Icon, Divider, ListItem } from 'react-native-elements';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { NavigationContainer,  useNavigation, useIsFocused } from '@react-navigation/native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const Add_Topic_Name = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('OTP')}>
                <Icon name='angle-left' type='font-awesome' color='black' size={35}/>
            </TouchableWithoutFeedback>
            <Text style={{fontSize: 25, fontWeight: '700', color: 'black', marginLeft: 20}}>Add Topic Name</Text>
        </View>

        <View style={{padding: 20, marginTop : 20}}>
            <Text style={{fontSize: 20, fontWeight: '500', color: 'black'}}>Topic Name</Text>

            <View style={{padding: 5, marginTop: 10}}>
                    <TextInput placeholder='Topic 6' underlineColor={"transparent"} activeUnderlineColor='transparent' style={{backgroundColor: 'white', borderRadius: 40, borderTopRightRadius: 40, borderTopLeftRadius: 40}}/> 
            </View>
        </View>

        <TouchableWithoutFeedback style={{marginTop: '100%'}} onPress={() => navigation.navigate('Create_New_Question')}>
              <Card style={{backgroundColor: '#0F4C5C', marginTop: 20, paddingBottom: 17, paddingTop: 17, paddingLeft: 40, paddingRight: 40, width: '90%', alignSelf: 'center', borderRadius: 30}}>
                  <Text style={{fontSize: 18, fontWeight: '500', color: 'white', textAlign: 'center'}}>Save and Continue</Text>
              </Card>
        </TouchableWithoutFeedback>
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
export default Add_Topic_Name;