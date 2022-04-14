import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity} from 'react-native';
import { Button, Card, TextInput} from 'react-native-paper';
import {Input, Icon, Divider } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { NavigationContainer,  useNavigation, useIsFocused } from '@react-navigation/native';
import CardSilder from 'react-native-cards-slider';

const OTP = () => {
    const navigation = useNavigation();
    const [text, setText] = React.useState("");
  return (
    <View style={styles.container}>
        <View style={styles.SecondContainer}>
            <Text style={{fontSize: 22, fontWeight: '900', color: 'black', textAlign: 'center', marginTop: '10%'}}>Watch Leaderboard</Text>
            <Text style={{color: 'black', textAlign: 'center', width: '75%', letterSpacing: 1, marginLeft: '14%'}}>Our leaderboard, allow you to measure your progress</Text>
            <CardSilder>
                <Image
                    style={styles.tinyLogo}
                    source={require('./Otp_Image.png')}
                />
                <Image
                    style={styles.tinyLogo}
                    source={require('./Otp_Image2.png')}
                />
                <Image
                    style={styles.tinyLogo}
                    source={require('./Otp_Image3.png')}
                />
            </CardSilder>
        </View>
        <Text style={{fontSize: 16, fontWeight: '800', color: 'black', textAlign: 'center', letterSpacing: 1, marginTop: '30%'}}>Enter your mobile number</Text>
        <Card style={styles.card}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 15, color: 'black', fontWeight: '800', marginLeft: 10, marginRight: 10}}>+91</Text>
                <Divider orientation="vertical"  width={2}/>
                <TextInput
                    label="Enter mobile number"
                    value={text}
                    underlineColorAndroid ='transparent'
                    keyboardType='numeric'
                    onChangeText={text => setText(text)}
                    style={{width: '80%', height: 50, backgroundColor: 'white', borderRadius: 50}}
                />
            </View>
        </Card>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('Question_Bank')}>
            <Card style={{backgroundColor: '#1e2e61', marginTop: 20, paddingBottom: 10, paddingTop: 10, paddingLeft: 40, paddingRight: 40, width: '90%', alignSelf: 'center', borderRadius: 30}}>
                <Text style={{fontSize: 15, fontWeight: '500', color: 'white', textAlign: 'center'}}>Get OTP</Text>
            </Card>
        </TouchableWithoutFeedback>

        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 10}}>
            <Text style={{textAlign: 'center'}}>Need help?</Text>
            <TouchableWithoutFeedback>
                <Text style={{textAlign: 'center', color: 'blue'}}>Click Here</Text>
            </TouchableWithoutFeedback>
        </View>
        <Text style={{textAlign: 'center', marginTop: 20}}>Get assignment related updates on WhatsApp </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     backgroundColor: '#f6edf7'
    },
    SecondContainer: {
        flex: 2,
        maxHeight: 450,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: '#FFECC7',
        
    },
    tinyLogo: {
        width: '97%',
        height: '90%',
        marginTop: '10%',
        marginLeft: '7%',
        
    },
    
    card: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 40,
        height: '6%'
    }
  });
export default OTP;