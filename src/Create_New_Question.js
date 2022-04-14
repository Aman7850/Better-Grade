import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity, FlatList} from 'react-native';
import { Button, Card, TextInput, Avatar, RadioButton} from 'react-native-paper';
import {Input, Icon, Divider, FAB } from 'react-native-elements';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { NavigationContainer,  useNavigation, useIsFocused } from '@react-navigation/native';

const Create_New_Question = () => {
  const navigation = useNavigation();
  const [value, setValue] = React.useState('Single Correct');

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('OTP')}>
              <Icon name='angle-left' type='font-awesome' color='black' size={35}/>
          </TouchableWithoutFeedback>
          <Text style={{fontSize: 22, fontWeight: '700', color: 'black', marginLeft: 20}}>Create New Question</Text>
      </View>

      <View style={{padding: 10}}>
        <Text style={{fontWeight: '500', color: 'black', fontSize: 15, marginTop: 10, width: '80%'}}>Create question for based on concept and add options and also set marks</Text>
        <Text style={{fontWeight: '800', fontSize: 19, color: 'black', marginTop: 10}}>Question Type</Text>
        <ScrollView horizontal style={{marginTop: 20, padding: 5}}>
            <Card style={{padding: 5, borderRadius: 18, paddingLeft: 18, paddingRight: 18}}>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                  <View style={{flexDirection: 'row'}}>
                    <RadioButton value="Single Correct" />
                    <Text style={{marginTop: 6}}>Single Correct</Text>
                  </View>
                </RadioButton.Group>
            </Card>

            <Card style={{padding: 5, borderRadius: 18, paddingLeft: 18, paddingRight: 18, marginLeft: 10}}>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                  <View style={{flexDirection: 'row'}}>
                    <RadioButton value="Multiple Correct" />
                    <Text style={{marginTop: 6}}>Multiple Correct</Text>
                  </View>
                </RadioButton.Group>
            </Card>

            <Card style={{padding: 5, borderRadius: 18, paddingLeft: 18, paddingRight: 18, marginLeft: 10}}>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                  <View style={{flexDirection: 'row'}}>
                    <RadioButton value="Correct" />
                    <Text style={{marginTop: 6}}>Single Correct</Text>
                  </View>
                </RadioButton.Group>
            </Card>

            <Card style={{padding: 5, borderRadius: 18, paddingLeft: 18, paddingRight: 18, marginLeft: 10}}>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                  <View style={{flexDirection: 'row'}}>
                    <RadioButton value="Correct" />
                    <Text style={{marginTop: 6}}>Single Correct</Text>
                  </View>
                </RadioButton.Group>
            </Card>
        </ScrollView>

        <Text style={{fontWeight: '800', fontSize: 19, color: 'black', marginTop: 20}}>Enter Question</Text>

        <Card style={{marginTop: 20, borderRadius: 15}}>
            <TextInput placeholder='Enter Question...' underlineColor={"transparent"} multiline = {true} numberOfLines={8} activeUnderlineColor='transparent' style={{backgroundColor: 'white', borderRadius: 15}}/>
            <TouchableWithoutFeedback style={{flexDirection: 'row', marginLeft: '70%'}}>
              <Icon name='folder' type='font-awesome' color='black' size={20}/>
              <Text style={{color: 'blue', marginLeft: 5}}>Add Image</Text>
            </TouchableWithoutFeedback>
        </Card>

        <Text style={{fontWeight: '800', fontSize: 19, color: 'black', marginTop: 20}}>Enter Options</Text>
        <Text style={{fontWeight: '400', fontSize: 12, color: 'black', marginTop: 5}}>Mark correct answer</Text>

        <View style={{marginTop: 20}}>
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
              <View style={{flexDirection: 'row'}}>
                <RadioButton value="Option 1" />
                <Text style={{marginTop: 6}}>Option 1</Text>
              </View>
            </RadioButton.Group>

            <Card style={{marginTop: 5, borderRadius: 15}}>
                <TextInput placeholder='Enter Question...' underlineColor={"transparent"} multiline = {true} numberOfLines={4} activeUnderlineColor='transparent' style={{backgroundColor: 'white', borderRadius: 15}}/>
                  <TouchableWithoutFeedback style={{flexDirection: 'row', marginLeft: '90%'}}>
                    <Icon name='folder' type='font-awesome' color='black' size={20}/>
                    
                  </TouchableWithoutFeedback>
            </Card>

            <View style={{marginTop: 15}}>
              <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={{flexDirection: 'row'}}>
                  <RadioButton value="Option 2" />
                  <Text style={{marginTop: 6}}>Option 2</Text>
                </View>
              </RadioButton.Group>

              <Card style={{marginTop: 5, borderRadius: 15}}>
                  <TextInput placeholder='Enter Question...' underlineColor={"transparent"} multiline = {true} numberOfLines={4} activeUnderlineColor='transparent' style={{backgroundColor: 'white', borderRadius: 15}}/>
                    <TouchableWithoutFeedback style={{flexDirection: 'row', marginLeft: '90%'}}>
                      <Icon name='folder' type='font-awesome' color='black' size={20}/>
                      
                    </TouchableWithoutFeedback>
              </Card>
            </View>

            <View style={{marginTop: 15}}>
              <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={{flexDirection: 'row'}}>
                  <RadioButton value="Option 3" />
                  <Text style={{marginTop: 6}}>Option 3</Text>
                </View>
              </RadioButton.Group>

              <Card style={{marginTop: 5, borderRadius: 15}}>
                  <TextInput placeholder='Enter Question...' underlineColor={"transparent"} multiline = {true} numberOfLines={4} activeUnderlineColor='transparent' style={{backgroundColor: 'white', borderRadius: 15}}/>
                    <TouchableWithoutFeedback style={{flexDirection: 'row', marginLeft: '90%'}}>
                      <Icon name='folder' type='font-awesome' color='black' size={20}/>
                      
                    </TouchableWithoutFeedback>
              </Card>
            </View>

            <TouchableWithoutFeedback>
                <Text style={{fontWeight: '700', color: '#0F4C5C', marginLeft: '60%', marginTop: 20}}>+ Add More Options</Text>
            </TouchableWithoutFeedback>

            <Text style={{fontWeight: '800', fontSize: 19, color: 'black', marginTop: 20}}>Choose Concept</Text>

            <View style={{flexDirection: 'column', marginTop: 15}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Card style={{padding: 5, paddingLeft: 20, paddingRight: 20, borderRadius: 20, backgroundColor: '#FFF3DB', borderColor: '#F8D89B'}}>
                        <Text>Concept 1</Text>
                    </Card>

                    <Card style={{padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 20, backgroundColor: '#FFF3DB', borderColor: '#F8D89B'}}>
                        <Text>Food and Types</Text>
                    </Card>

                    <Card style={{padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 20, backgroundColor: '#FFF3DB', borderColor: '#F8D89B'}}>
                        <Text>Role of Nutrition</Text>
                    </Card>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                    <Card style={{padding: 5, paddingLeft: 20, paddingRight: 20, borderRadius: 20, backgroundColor: '#FFF3DB', borderColor: '#F8D89B'}}>
                        <Text>Health</Text>
                    </Card>

                    <Card style={{padding: 5, paddingLeft: 15, paddingRight: 15, borderRadius: 20, backgroundColor: '#FFF3DB', borderColor: '#F8D89B'}}>
                        <Text>Nutrition</Text>
                    </Card>

                    <Card style={{padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 20, backgroundColor: '#FFF3DB', borderColor: '#F8D89B'}}>
                        <Text>Factors affecting food</Text>
                    </Card>
                </View>
            </View>

            <TouchableWithoutFeedback style={{marginTop: 5}}>
                <Text style={{fontWeight: '700', color: '#0F4C5C', marginTop: 20}}>+ Add More Options</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('Schedule_Homework')} style={{marginTop: '3%'}}>
                    <Card style={{backgroundColor: '#0F4C5C', marginTop: 20, paddingBottom: 18, paddingTop: 18, paddingLeft: 60, paddingRight: 60, width: '100%', borderRadius: 30}}>
                        <Text style={{fontSize: 18, fontWeight: '500', color: 'white', textAlign: 'center'}}>Done</Text>
                    </Card>
            </TouchableWithoutFeedback>
        </View>
      </View>
      </ScrollView>
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
export default Create_New_Question;