import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity, FlatList} from 'react-native';
import { Button, Card, TextInput, Avatar} from 'react-native-paper';
import {Input, Icon, Divider, FAB } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { NavigationContainer,  useNavigation, useIsFocused } from '@react-navigation/native';

const Select_Group = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('OTP')}>
                <Icon name='angle-left' type='font-awesome' color='black' size={30}/>
            </TouchableWithoutFeedback>
            <Text style={{fontSize: 19, fontWeight: '700', color: 'black', marginLeft: 20}}>Select Group (s)</Text>
        </View>

        <View style={{flexDirection: 'row', padding: 10}}>
            <Icon name='arrow-right' type='font-awesome' color='black' size={20}/>
            <Text style={{fontWeight: '600', color: 'black', marginLeft: 10}}>Rules for the students</Text>
        </View>

        <View style={{padding: 10}}>
            <Card style={{padding: 20, backgroundColor: '#FAD5CC', borderRadius: 10}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{width: '55%'}}>
                    <Text style={{fontSize: 13, fontWeight: '600'}}>1. Questions and their options will be random order.</Text>
                    <Text style={{fontSize: 13, marginTop: 5, fontWeight: '600'}}>2. If the student leaves the app, the HW will be auto submitted.</Text>
                    <Text style={{fontSize: 13, marginTop: 5, fontWeight: '600'}}>3. Teachers need to 'Announce Results' on HW, this will not happen automatically.</Text>
                </View>

                <Image
                            style={styles.Image}
                            source={require('./Select_Group_Image.png')}
                />
                </View>
            </Card>

            <View style={{marginTop: 20}}>
                <Card style={{padding: 25, borderRadius: 10}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name='users' type='font-awesome' color='black' size={20}/>
                            <Text style={{fontSize: 13, fontWeight: '600', marginLeft: 10}}>Class 2nd D</Text>
                        </View>

                        <Icon name='check' type='font-awesome' color='#E36414' size={20}/>
                    </View>
                </Card>

                <Card style={{padding: 25, borderRadius: 10, marginTop: 10}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name='users' type='font-awesome' color='black' size={20}/>
                            <Text style={{fontSize: 13, fontWeight: '600', marginLeft: 10}}>Class 3rd A</Text>
                        </View>

                        <Icon name='check' type='font-awesome' color='#E36414' size={20}/>
                    </View>
                </Card>

                <Card style={{padding: 25, borderRadius: 10, marginTop: 10}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name='users' type='font-awesome' color='black' size={20}/>
                            <Text style={{fontSize: 13, fontWeight: '600', marginLeft: 10}}>Sample Group</Text>
                        </View>

                        <Icon name='check' type='font-awesome' color='#E36414' size={20}/>
                    </View>
                </Card>
            </View>

            <TouchableWithoutFeedback style={{marginTop: '10%'}} onPress={() => console.log('pressed')}>
              <Card style={{backgroundColor: '#0F4C5C', marginTop: 20, paddingBottom: 17, paddingTop: 17, paddingLeft: 45, paddingRight: 45, width: '95%', alignSelf: 'center', borderRadius: 30}}>
                  <Text style={{fontSize: 16, fontWeight: '500', color: 'white', textAlign: 'center'}}>Send to Selected Groups(s)</Text>
              </Card>
          </TouchableWithoutFeedback>
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
export default Select_Group;