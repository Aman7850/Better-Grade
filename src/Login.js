import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity,ScrollView,TextInput} from 'react-native';
import { Button, Card} from 'react-native-paper';
import {Input, Divider } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { NavigationContainer,  useNavigation, useIsFocused } from '@react-navigation/native';
import CardSilder from 'react-native-cards-slider';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { gql, useMutation } from '@apollo/client';

// const ADD_TODO = gql`
// mutation ($input: generateOtpInput!) {
//   generateOtp(input: $input) {
//     __typename
//     ... on GenerateOtpPayload {
//       message
//       mobile
//     }
//   }
// }
// `;

const OTP = () => {
    const navigation = useNavigation();
    const [text, setText] = React.useState('');
    const [toggle, setToggle] = React.useState(false)
    // const [addTodo, name] = useMutation(ADD_TODO);


  // console.log("DATA",name)
  return (
    <ScrollView style={styles.container}>
        <View  style={styles.SecondContainer}>
            <ImageBackground
              source={require('./loginBackground.png')}
              style={{ 
              width: '100%',
              height: '100%',
              }}
            >
                <Text style={{fontSize: 22, fontWeight: '900', color: '#4C2C5D', textAlign: 'center', marginTop: '10%'}}>Watch Leaderboard</Text>
                <Text style={{color: '#4C2C5D', textAlign: 'center', width: '75%', letterSpacing: 1, marginLeft: '14%'}}>Our leaderboard, allow you to measure your progress</Text>
                {/* <CardSilder> */}
                    <Image
                        style={styles.tinyLogo}
                        source={require('./Otp_Image.png')}
                    />
                    {/* <Image
                        style={styles.tinyLogo}
                        source={require('../assets/images/login2.png')}
                    />
                    <Image
                        style={styles.tinyLogo}
                        source={require('../assets/images/login3.png')}
                    />
                </CardSilder> */}
            </ImageBackground>
        </View>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#4C2C5D', textAlign: 'center', letterSpacing: 1, marginTop: '20%'}}>Enter your mobile number</Text>
        <Card style={styles.card}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 15, color: 'black', fontWeight: '800', marginLeft: 10, marginRight: 10}}>+91</Text>
                {/* <Divider orientation="vertical"  width={1}/> */}
                <Text style={{fontSize:25,fontWeight:'500',alignSelf:'center'}}>|</Text>
                <TextInput
                    placeholder="Enter mobile number"
                    underlineColor="transparent"
                    autoFocus={true}
                    value={text}
                    underlineColorAndroid ='transparent'
                    keyboardType='numeric'
                    onChangeText={text => setText(text)}
                    style={{width: '80%', height: 55, backgroundColor: 'white', borderRadius: 50}}
                />
            </View>
        </Card>

        <TouchableWithoutFeedback style={styles.otpButton}  
        // onPress={() => navigation.navigate('Otp')
        onPress={()=>{
          addTodo({ variables: 
            {
              "input" : {
              "mobile": "1789099991"
              }
              }
          });
        }}
      
      >
            {/* <Card style={{backgroundColor: '#0F4C5C', marginTop: 30,width: '90%', alignSelf: 'center', borderRadius: 30,height:50,}}> */}
                <Text style={{fontSize: 15, fontWeight: '500', color: 'white', textAlign: 'center'}}>Get OTP</Text>
            {/* </Card> */}
        </TouchableWithoutFeedback>

        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 10}}>
            <Text style={{textAlign: 'center',color:'#4D4D4D'}}>Need help?</Text>
            <TouchableOpacity>
                <Text style={{textAlign: 'center', color: '#0F4C5C'}}> Click Here</Text>
            </TouchableOpacity>
        </View>
       <View style={{marginBottom:'10%',justifyContent:'center',alignItems:'center'}}>
         <Text style={{textAlign: 'center', marginTop: 20}}>Get assignment related updates on WhatsApp </Text>
          <TouchableWithoutFeedback onPress={()=>{toggle ? setToggle(false):setToggle(true)}}>
            {toggle ?
              <Icon
                name={'toggle-on'}
                size={45}
                color={'#707070'}
                />
              :
            <Icon
                name={'toggle-off'}
                size={45}
                color={'#707070'}
                />
            }
          </TouchableWithoutFeedback>
       </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     backgroundColor: '#FDF8EE'
    },
    SecondContainer: {
        flex: 2,
        maxHeight: 450,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        // backgroundColor: '#FFECC7',
        
    },
    tinyLogo: {
        width: '90%',
        height: 360,
        marginTop: '15%',
        // marginLeft: '7%',
        alignSelf:'center',
        
    },
    
    card: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 40,
        // height: '6%'
    },
    otpButton:{
      justifyContent:'center',
      backgroundColor:'#0F4C5C',
      width:'90%',
      justifyContent:'center',
      alignSelf:'center',
    height:50,
    marginTop:'5%',
    borderRadius:25
    }
  });
export default OTP;