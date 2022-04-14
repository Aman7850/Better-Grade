import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity, FlatList} from 'react-native';
import { Button, Card, TextInput, Avatar} from 'react-native-paper';
import {Input, Icon, Divider, FAB } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { NavigationContainer,  useNavigation, useIsFocused } from '@react-navigation/native';

const Maths = () => {
    const navigation = useNavigation();


    const subjectsData = [
        {
          title: "Knowing Our Numbers",
          questions: 688,
          topics: 5,
          source: require('./Avatar_image.png'),
          bg: '#EEE4F5'
        },

        {
            title: "Whole Numbers",
            questions: 758,
            topics: 4,
            source: require('./Avatar_image.png'),
            bg: '#EEE4F5'
          },

          {
            title: "Playing With Numbers",
            questions: 258,
            topics: 8,
            source: require('./Avatar_image.png'),
            bg: '#EEE4F5'
          },

    ]

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('OTP')}>
                <Icon name='angle-left' type='font-awesome' color='black' size={35}/>
            </TouchableWithoutFeedback>
            <Text style={{fontSize: 25, fontWeight: '700', color: 'black', marginLeft: 20}}>Maths</Text>
        </View>
        <View style={{flexDirection: 'row', padding: 15, marginTop: '5%'}}>
            <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>7th Chapters</Text>
            <Text style={{fontSize: 20, fontWeight: '600', color: 'black', marginLeft: '46%'}}>6th Std</Text>
        </View>

        <FlatList
            data={subjectsData}
            keyExtractor={({ title }, index) => title}
            renderItem={({ item }) => (
              <View style={{padding: 10}}>
                    <Card style={{borderRadius: 20}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image
                            style={styles.Image}
                            source={item.source}
                        />
                        <View style={{flexDirection: 'row'}}>
                            <View style={{ marginLeft: 20}}>
                                <Text style={{fontSize: 18, fontWeight: '600', color: 'black', width: '58%'}}>{item.title}</Text>
                                <View style={{marginTop: '11%', flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text style={{fontSize: 16}}>{item.topics} Topics</Text>
                                    <Divider orientation="vertical" width={2} color={'black'}/>
                                    <Text style={{fontSize: 16}}>{item.questions} Questions</Text>
                                </View>
                            </View>
                            <TouchableWithoutFeedback onPress={() => navigation.navigate('Knowing_Our_Numbers')} style={{marginTop: '350%'}}>
                                <Icon name='angle-right' type='font-awesome' color='black' size={30}/>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    </Card>
              </View>
            )}
          />
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
    Image: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        borderRadius: 20
    }
  });

export default Maths;