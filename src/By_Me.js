import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity, FlatList} from 'react-native';
import { Button, Card, TextInput, Avatar} from 'react-native-paper';
import {Input, Icon, Divider, FAB } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { NavigationContainer,  useNavigation, useIsFocused } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const By_Me = () => {
    const navigation = useNavigation();

    const subjectsData = [
        {
          title: "Topic 6",
          questions: 2,
          Concepts: 4,
          bg: '#EEE4F5',
          Assign: 'Assign HW',
          
        },
    ]

  return (
    <View style={styles.container}>
    <FlatList
    data={subjectsData}
    keyExtractor={({ title }, index) => title}
    renderItem={({ item }) => (
      <View style={{padding: 10}}>
        <Card style={{padding: 10, borderRadius: 10, backgroundColor: '#FFFFFF'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
               
            <View style={{padding: 10}}>
              <Text style={{fontSize: 16, fontWeight: '700', color: 'black'}}>{item.title}</Text>
            </View>

              <View style={{marginTop: 5}}>
                  <Icon
                      name='check'
                      type='font-awesome'
                      color='#E36414'
                  />
              </View>
            </View>

            <View style={{flexDirection: 'row', marginTop: 20}}>
                    <View style={{flexDirection: 'row', marginTop: 15}}>
                        <Text style={{fontSize: 15, marginRight: 10}}>{item.Concepts} Concepts</Text>
                        <Divider orientation="vertical" width={2} color={'black'}/>
                        <Text style={{fontSize: 15, marginLeft: 10}}>{item.questions} Questions</Text>
                    </View>
                

                <TouchableWithoutFeedback style={{marginLeft: 40}}>
                    <Card style={{padding: 10, paddingLeft: 20, paddingRight: 20, borderRadius: 20, backgroundColor: '#0F4C5C'}}>
                        <Text style={{color: 'white', fontWeight: '500', textAlign: 'center'}}>{item.Assign}</Text>
                    </Card>
                </TouchableWithoutFeedback>
            </View>
        </Card>
      </View>
    )}
  />

        <TouchableWithoutFeedback style={{marginTop: '10%'}} onPress={() => console.log('Details')}>
            <Card style={{backgroundColor: '#0F4C5C', marginTop: 20, paddingBottom: 17, paddingTop: 17, paddingLeft: 40, paddingRight: 40, width: '90%', alignSelf: 'center', borderRadius: 30}}>
                <Text style={{fontSize: 16, fontWeight: '500', color: 'white', textAlign: 'center'}}>Create Yours</Text>
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
});

export default By_Me;