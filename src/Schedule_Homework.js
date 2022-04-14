import React, {useState, useEffect, Component} from 'react';
import {Text, StyleSheet, ScrollView, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity} from 'react-native';
import { Button, Card, TextInput} from 'react-native-paper';
import {Input, Icon, Divider } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { NavigationContainer,  useNavigation, useIsFocused } from '@react-navigation/native';
import CalendarPicker from 'react-native-calendar-picker';
import { color } from 'react-native-elements/dist/helpers';


export default class Schedule_Homework extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }
  
  onDateChange(date, type) {
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: date,
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
      });
    }
  }
  render() {
    const { selectedStartDate, selectedEndDate } = this.state;
    const minDate = new Date(1); // Today
    const maxDate = new Date(2022, 6, 3);
    const startDate  =  selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';
    
    let customDayHeaderStyles = [];
        
    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('OTP')}>
            <Icon name='angle-left' type='font-awesome' color='black' size={35}/>
        </TouchableWithoutFeedback>
        <Text style={{fontSize: 25, fontWeight: '700', color: 'black', marginLeft: 20}}>Schedule Homework</Text>
    </View>

    <View style={{padding: 10}}>
        <Card style={{padding: 10, borderRadius: 20}}>
            <View style={{flexDirection: 'row'}}>
                <Text>Chapter:</Text>
                <Text style={{fontSize: 15, fontWeight: '700', color: 'black'}}>Knowing Our Numbers</Text>
            </View>

            <Text style={{fontSize: 18, fontWeight: '700', color: 'black', marginTop: 10}}>Topic 1 Lorem Ipsum</Text>

            <View style={{marginTop: 20, padding: 5}}>
                <Image
                    style={styles.Image}
                    source={require('./Homework_1.png')}
                />
            </View>

            <View style={{flexDirection: 'row', marginTop: 20, padding: 5, justifyContent: 'space-around'}}>
                <View style={{flexDirection: 'row'}}>
                    <Icon name='graduation-cap' type='font-awesome' color='black' size={22}/>
                    <Text style={{fontSize: 16, fontWeight: '400', color: 'black', marginLeft: 5}}>6th Class</Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <Icon name='book' type='font-awesome' color='black' size={22}/>
                    <Text style={{fontSize: 16, fontWeight: '400', color: 'black', marginLeft: 5}}>Maths</Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <Icon name='question' type='font-awesome' color='black' size={22}/>
                    <Text style={{fontSize: 16, fontWeight: '400', color: 'black', marginLeft: 5}}>17 questions</Text>
                </View>
            </View>
        </Card>

        <Text style={{fontSize: 18, fontWeight: '400', color: 'black', marginTop: 20}}>Student can complete this homework below selected timeline</Text>

        <View style={{flexDirection: 'row'}}>
            <View style={{marginTop: 25}}>
                <Icon name='calendar' type='font-awesome' color='black' size={22}/>
            </View>
            <Text style={{fontSize: 22, fontWeight: '900', color: 'black', marginTop: 20, marginLeft: 15}}>Select Submission Date</Text>
        </View>
        
            <Card style={{borderRadius: 20, padding: 10, marginTop: 25}}>
                <CalendarPicker
                    startFromMonday={true}
                    minDate={new Date()}
                    weekdays={['M', 'T', 'W', 'T', 'F', 'S', 'S']}
                    monthYearHeaderWrapperStyle={{ marginLeft: 0}}
                    dayOfWeekStyles={{backgroundColor:'red'}}
                    headerWrapperStyle={{flexDirection: 'row', justifyContent: 'flex-start', color: 'blue'}}
                    dayLabelsWrapper={{backgroundColor: '#FFECC7', borderRadius: 10, borderColor: 'transparent'}}
                    monthTitleStyle={{color: '#4C2C5D'}}
                    yearTitleStyle={{color: '#4C2C5D'}}
                    selectedDayColor="#E36414"
                    selectedDayTextColor="#FFFFFF"
                    previousTitleStyle={styles.icon}
                    nextTitleStyle={styles.icon}
                    previousTitle={<View><Icon name={'chevron-left'} size={30} color={'#4C2C5D'} /></View>}
                    nextTitle={<View><Icon name={'navigate-next'} size={30} color={'#4C2C5D'} /></View>}
                    onDateChange={(e)=>this.onDateChange(e)}
                />

                <View>
                    <Text>SELECTED START DATE:{ startDate }</Text>
                    <Text>SELECTED END DATE:{ endDate }</Text>
                </View>
            </Card>
            
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableWithoutFeedback style={{marginTop: '10%'}} onPress={() => console.log('pressed')}>
                    <Card style={{marginTop: 20, paddingBottom: 17, paddingTop: 17, paddingLeft: 30, paddingRight: 30, width: '100%', borderRadius: 30, borderWidth: 2, borderColor: '#0F4C5C'}}>
                        <Text style={{fontSize: 18, fontWeight: '500', color: '#0F4C5C', textAlign: 'center'}}>Save as Draft</Text>
                    </Card>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback style={{marginTop: '10%'}} onPress={() => this.props.navigation.navigate('Select_Group')}>
                    <Card style={{backgroundColor: '#0F4C5C', marginTop: 20, paddingBottom: 18, paddingTop: 18, paddingLeft: 60, paddingRight: 60, width: '100%', borderRadius: 30}}>
                        <Text style={{fontSize: 18, fontWeight: '500', color: 'white', textAlign: 'center'}}>Assign</Text>
                    </Card>
                </TouchableWithoutFeedback>
            </View>
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF8EE',
    
  },
  header: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: '#FFEECB',
    padding: 10,
    alignItems: 'center'
},
Image: {
    width: '100%',
    height: 170,
    alignSelf: 'center',
    borderRadius: 10,
    
},
icon: {
  
  justifyContent: 'flex-end'
}
});