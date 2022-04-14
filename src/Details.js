import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity} from 'react-native';
import { Button, Card, TextInput} from 'react-native-paper';
import {Input, Icon, Divider, ListItem } from 'react-native-elements';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { NavigationContainer,  useNavigation, useIsFocused } from '@react-navigation/native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const Details = () => {
    const navigation = useNavigation();
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
    const [expanded, setExpanded] = React.useState(null);
    

    var radio_props = [
        {label: 'CBSE', value: 0 },
        {label: 'param2', value: 1 }
      ];
       
      var radio_props1 = [
        {label: 'ICSE', value: 0 },
        {label: 'param2', value: 1 }
      ];

      var radio_props2 = [
        {label: 'State Board', value: 0 },
        {label: 'param2', value: 1 }
      ];

  return (
    <View style={styles.container}>
        <ScrollView>
            <View style={{padding: 10, marginTop: 20}}>
                <TouchableWithoutFeedback style={{marginRight: '90%'}} onPress={() => navigation.navigate('Verify_otp')}>
                    <Icon name='angle-left' type='font-awesome' color='#0F0A39' size={30}/>
                </TouchableWithoutFeedback>
                <Text style={{fontSize: 25, fontWeight: '900', color: 'black', letterSpacing: 1, marginTop: '12%', marginLeft: 10}}>Tell us your name</Text>
            </View>

            <View style={{padding: 20}}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Enter your full name here..."
                    activeUnderlineColor='transparent'
                    underlineColor="transparent"
                />
            </View>

            <Text style={{fontSize: 25, fontWeight: '900', color: 'black', marginTop: '2%', marginLeft: 10}}>Select Board</Text>

            <View style={{paddingLeft: 20}}>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              onPress={(value) => {console.log({value:value})}}
              labelHorizontal={true}
              buttonColor={'#E36414'}
              buttonInnerColor={'#e74c3c'}
              animation={true}
              style={{marginTop: 20}}
            />

            <Divider width={2}/>

            <RadioForm
              radio_props={radio_props1}
              initial={0}
              onPress={(value) => {console.log({value:value})}}
              labelHorizontal={true}
              buttonColor={'#E36414'}
              buttonInnerColor={'#e74c3c'}
              style={{marginTop: 20}}
            />

            <Divider width={2}/>

            <RadioForm
              radio_props={radio_props2}
              initial={0}
              onPress={(value) => {console.log({value:value})}}
              labelHorizontal={true}
              buttonColor={'#E36414'}
              buttonInnerColor={'#e74c3c'}
              style={{marginTop: 20}}
            />
          </View>

          <View style={{padding: 10, marginLeft: 30}}>
            <Card style={{borderRadius: 50}}>
            <ListItem.Accordion
            content={
              <>
                <Icon name="place" size={30} />
                <ListItem.Content>
                  <ListItem.Title style={{fontSize: 20}}>Gujrati Board</ListItem.Title>
                  
                </ListItem.Content>
              </>
            }
            isExpanded={expanded}
            onPress={() => {
              setExpanded(!expanded);
            }}
          >
            
          </ListItem.Accordion>
            </Card>
          </View>

          <TouchableWithoutFeedback style={{marginTop: '5%'}} onPress={() => navigation.navigate('Profile')}>
              <Card style={{backgroundColor: '#1e2e61', marginTop: 10, paddingBottom: 17, paddingTop: 17, paddingLeft: 40, paddingRight: 40, width: '90%', alignSelf: 'center', borderRadius: 30}}>
                  <Text style={{fontSize: 22, fontWeight: '300', color: 'white', textAlign: 'center'}}>Continue</Text>
              </Card>
          </TouchableWithoutFeedback>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     backgroundColor: '#FDF8EE'
    },
    input: {
        borderRadius: 40,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: 'white'
    }
  });
export default Details;