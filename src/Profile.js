import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity} from 'react-native';
import { Button, Card, TextInput, Avatar} from 'react-native-paper';
import {Input, Icon, Divider, FAB } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { NavigationContainer,  useNavigation, useIsFocused } from '@react-navigation/native';


const Profile = () => {
    const navigation = useNavigation();
    const [visible, setVisible] = React.useState(true);
  return (
    <View style={styles.container}>
        <View style={{padding: 10, marginTop: 20, flexDirection:'row'}}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Details')}>
                <Icon name='angle-left' type='font-awesome' color='black' size={30}/>
            </TouchableWithoutFeedback>
            
                <Text style={{fontSize: 25, fontWeight: '900', textAlign: 'center', color: 'black', width: '70%', marginLeft: 32}}>Hi Amrita, Personalize your look</Text>
                <Text style={{fontSize: 20, fontWeight: '700', color: '#0F4C5C', marginLeft: 10}}>SKIP</Text>
            
        </View>

            <View style={{alignItems: 'center', flexDirection: 'row', marginLeft: '21%'}}>
                <Image
                    style={styles.Image}
                    source={require('./Profile_image.png')}
                />
                <FAB
                    visible={visible}
                    icon={{ name: 'add', color: 'white' }}
                    color="#1e2e61"
                    style={{marginTop: '30%', marginLeft: -50}}
                />
            </View>

            <Text style={{fontSize: 22, fontWeight: '900', color: 'black', textAlign: 'center', marginTop: 20}}>+Add your own</Text>
            <Text style={{fontSize: 18, fontWeight: '400', color: 'black', textAlign: 'center', marginTop: 10, marginBottom: 20}}>Please add your own photo for better identification</Text>
            <Divider width={1} color={'black'}/>
            <Text style={{fontSize: 22, fontWeight: '900', color: 'black', textAlign: 'center', marginTop: 15}}>or</Text>

            <Text style={{fontSize: 22, fontWeight: '700', color: 'black', textAlign: 'center', marginTop: 10}}>Choose from fun Avatars</Text>

            <View style={{padding: 5, flexDirection: 'row'}}>
                <Avatar.Image size={100} source={require('./Avatar_image.png')} />
                <Avatar.Image size={100} source={require('./Avatar_image.png')} />
                <Avatar.Image size={100} source={require('./Avatar_image.png')} />
                <Avatar.Image size={100} source={require('./Avatar_image.png')} />
            </View>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('Maths')}>
              <Card style={{backgroundColor: '#1e2e61', marginTop: 10, paddingBottom: 17, paddingTop: 17, paddingLeft: 40, paddingRight: 40, width: '90%', alignSelf: 'center', borderRadius: 30}}>
                  <Text style={{fontSize: 18, fontWeight: '400', color: 'white', letterSpacing: 1, textAlign: 'center'}}>Let's Get Started</Text>
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
    Image: {
        width: 230,
        height: 230
    }
  });

export default Profile;