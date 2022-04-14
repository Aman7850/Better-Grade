import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity, FlatList} from 'react-native';
import { Button, Card, TextInput, Avatar} from 'react-native-paper';
import {Input, Icon, Divider, FAB } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { NavigationContainer,  useNavigation, useIsFocused } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Topics = () => {
    const navigation = useNavigation();

    const subjectsData = [
        {
          title: "Topic 1",
          questions: 15,
          Concepts: 4,
          bg: '#EEE4F5',
          Assign: 'Assign HW',
          teachers: '32+',
        },

        {
            title: "Topic 2",
            questions: 12,
            Concepts: 6,
            bg: '#EEE4F5',
            Assign: 'Assign HW',
            teachers: '7+',
          },

          {
            title: "Topic 3",
            questions: 15,
            Concepts: 4,
            bg: '#EEE4F5',
            Assign: 'Assign HW',
            teachers: '14+',
          },

          {
            title: "Topic 4",
            questions: 15,
            Concepts: 4,
            bg: '#EEE4F5',
            Assign: 'Assign HW',
            teachers: '10+',
          },

          {
            title: "Topic 5",
            questions: 15,
            Concepts: 4,
            bg: '#EEE4F5',
            Assign: 'Assign HW',
            teachers: '10+',
          },
    ]
  return (
    <View style={styles.container}>
    <FlatList
    data={subjectsData}
    keyExtractor={({ title }, index) => title}
    renderItem={({ item }) => (
      <View style={{padding: 10}}>
        <Card style={{padding: 20, borderRadius: 10, backgroundColor: '#FFFFFF'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Card style={{borderRadius: 20, backgroundColor: '#FFECC7', width: '50%', padding: 5}}>
                    <Text style={{color: 'black', textAlign: 'center'}}>{item.teachers} teachers used it</Text>
                </Card>

                <Icon
                    name='check'
                    type='font-awesome'
                    color='#E36414'
                />
            </View>

            <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column'}}>
                    <View style={{marginTop: 10, padding: 10}}>
                        <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>{item.title}</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 14, marginRight: 10}}>{item.Concepts} Concepts</Text>
                        <Divider orientation="vertical" width={2} color={'black'}/>
                        <Text style={{fontSize: 14, marginLeft: 10}}>{item.questions} Questions</Text>
                    </View>
                </View>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('Schedule_Homework')} style={{marginTop: 30, marginLeft: 40}}>
                <Card style={{padding: 10, paddingLeft: 20, paddingRight: 20, borderRadius: 20, backgroundColor: '#0F4C5C'}}>
                    <Text style={{color: 'white', fontWeight: '500', textAlign: 'center'}}>{item.Assign}</Text>
                </Card>
            </TouchableWithoutFeedback>
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
    Image: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        borderRadius: 20
    }
});
export default Topics;