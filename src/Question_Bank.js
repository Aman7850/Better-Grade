import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity, FlatList} from 'react-native';
import { Button, Card, Modal, Portal, TextInput, Avatar, Searchbar, RadioButton, List, Provider} from 'react-native-paper';
import {Input, Icon, Divider, FAB } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { NavigationContainer,  useNavigation, useIsFocused } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Question_Bank = () => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [visible, setVisible] = useState(false);
    const [viewModalStyle, setViewModalStyle] = React.useState('Difficulty Level');
    console.log(viewModalStyle)
    const [showEditModal, setshowEditModal] = useState(false);

  const containerStyle = {backgroundColor: 'white', flex: 2, margin: 0, width: 500, height: 500};
  const [value, setValue] = React.useState('Easy');
  const [expanded, setExpanded] = React.useState(false);
  const handlePress = () => setExpanded(!expanded);

    const subjectsData = [
        {
          Answer: "True or False",
          questions_number: 'Q1.',
          question: 'Would you like to do above activity in summer? Yes or NO',
          bg: '#EEE4F5',
          bank: 'Orient Blackswan',
          Check: 'Answers',
          level: 'Easy'
        },

        {
            Answer: "True or False",
            questions_number: 'Q1.',
            question: 'Would you like to do above activity in summer? Yes or NO',
            bg: '#EEE4F5',
            bank: 'Orient Blackswan',
            Check: 'Answers',
            level: 'Medium'
          },

          {
            Answer: "True or False",
            questions_number: 'Q1.',
            question: 'Would you like to do above activity in summer? Yes or NO',
            bg: '#EEE4F5',
            bank: 'Orient Blackswan',
            Check: 'Answers',
            level: 'Hard'
          },

          {
            Answer: "True or False",
            questions_number: 'Q1.',
            question: 'Would you like to do above activity in summer? Yes or NO',
            bg: '#EEE4F5',
            bank: 'Orient Blackswan',
            Check: 'Answers',
            level: 'Easy'
          },

          {
            Answer: "True or False",
            questions_number: 'Q1.',
            question: 'Would you like to do above activity in summer? Yes or NO',
            bg: '#EEE4F5',
            bank: 'Orient Blackswan',
            Check: 'Answers',
            level: 'Medium'
          },
    ]


  return (
    <View style={styles.container}>
        <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>Please select the Question from the below list to assign the homework</Text>

        <View style={{marginTop: 20, flexDirection: 'row'}}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={{width: '85%'}}
            />
            <TouchableWithoutFeedback onPress={() => setshowEditModal(true)} style={{marginTop: 10, marginLeft: 10}}>
                  <Text style={{color: 'blue', fontWeight: '600', textDecorationLine: 'underline'}}>Filter</Text>
            </TouchableWithoutFeedback>
        </View>
        

        

        <FlatList
    data={subjectsData}
    keyExtractor={({ title }, index) => title}
    renderItem={({ item }) => (
      <View style={{marginTop: 20}}>
        <Card style={{padding: 20, borderRadius: 10, backgroundColor: '#FFFFFF'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                    <Card style={{borderRadius: 20, backgroundColor: '#FFECC7', width: '60%', padding: 5}}>
                        <Text style={{color: 'black', textAlign: 'center', fontSize: 12}}>{item.bank}</Text>
                    </Card>
                    <Text style={{color: 'green', marginTop: 5, marginLeft: 10}}>{item.level}</Text>
                </View>

                <Icon
                    name='check'
                    type='font-awesome'
                    color='#E36414'
                />
            </View>

            
                <View style={{flexDirection: 'column'}}>
                    <View style={{marginTop: 10, padding: 10}}>
                        <Text>{item.Answer}</Text>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 10, width: '80%', marginLeft: 7}}>
                        <Text style={{fontSize: 14, fontWeight: '500', color: 'black', marginRight: 10}}>{item.questions_number}</Text>
                        
                        <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>{item.question}</Text>
                    </View>

                    <Divider width={2}/>

                    <List.Accordion
                      title={item.Check}
                      left={props => <List.Icon {...props} />}
                      expanded={expanded}
                      onPress={handlePress}
                      style={{backgroundColor: 'white', marginLeft: -60}}>
                      <List.Item title="True" left={props => <List.Icon {...props} icon="check" color='blue'/>}/>
                      <List.Item title="False" left={props => <List.Icon {...props} icon="close" color='red'/>}/>
                    </List.Accordion>
                </View>
                      
        </Card>
      </View>
    )}
  />

  <Modal
        animationIn="slideInLeft"
        transparent={true}
        visible={showEditModal}
        style={{margin: 0}}
        >
        <TouchableOpacity
          activeOpacity={1}
          
          style={styles.imagePicture}>
          <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <View style={styles.viewPicture}>
              <View style={styles.header}>
                  
                  <Text style={{fontSize: 22, fontWeight: '700', color: 'black', marginLeft: 20}}>Filter</Text>
                  <TouchableWithoutFeedback onPress={() => setshowEditModal(false)}>
                      <Icon name='close' type='font-awesome' color='black' size={30}/>
                  </TouchableWithoutFeedback>
              </View>

              <View style={{flexDirection: 'row', backgroundColor: 'white', height: 580}}>
                <View style={{width: '40%', backgroundColor: '#FDF8EE'}}>
                  <View style={{marginTop: 10}}>
                  {viewModalStyle == 'Difficulty Level' ?
                    <TouchableWithoutFeedback>
                        <Card style={{backgroundColor: 'white', borderColor: 'red', borderLeftWidth: 3, paddingBottom: 20, paddingTop: 20}}>
                          <Text style={{color: 'black', textAlign: 'center'}}>Difficulty Level</Text>
                        </Card>
                    </TouchableWithoutFeedback>  
                    :
                    <TouchableWithoutFeedback onPress={() => setViewModalStyle('Difficulty Level')} style="Difficulty Level">
                      <View style={{backgroundColor: 'transparent', paddingBottom: 20, paddingTop: 20}}>
                          <Text style={{color: 'black', textAlign: 'center'}}>Difficulty Level </Text>
                      </View>
                    </TouchableWithoutFeedback>  

                  }
                    
                  </View>

                  <View style={{marginTop: 10}}>
                  {viewModalStyle== 'Publications' ?
                    <TouchableWithoutFeedback onPress={() => setViewModalStyle('Publications')}>
                      <Card style={{backgroundColor: 'white', borderColor: 'red', borderLeftWidth: 3, paddingBottom: 20, paddingTop: 20}}>
                          <Text style={{color: 'black', textAlign: 'center'}}>Publications</Text>
                      </Card>
                    </TouchableWithoutFeedback>
                    : 
                    <TouchableWithoutFeedback onPress={() => setViewModalStyle('Publications')} style="Publications">
                      <View style={{backgroundColor: 'transparent', paddingBottom: 20, paddingTop: 20}}>
                        <Text style={{color: 'black', textAlign: 'center'}}>Publications</Text>
                      </View>
                  </TouchableWithoutFeedback>
                  }
                  </View>

                <View style={{marginTop: 10}}>
                    {viewModalStyle == 'Concepts' ?
                      <TouchableWithoutFeedback onPress={() => setViewModalStyle('Concepts')}>
                          <Card style={{backgroundColor: 'white', borderColor: 'red', borderLeftWidth: 3, paddingBottom: 20, paddingTop: 20}}>
                            <Text style={{color: 'black', textAlign: 'center'}}>Concepts</Text>
                          </Card>
                      </TouchableWithoutFeedback>
                      :
                      <TouchableWithoutFeedback onPress={() => setViewModalStyle('Concepts')} style="Concepts">
                          <View style={{backgroundColor: 'transparent', paddingBottom: 20, paddingTop: 20}}>
                              <Text style={{color: 'black', textAlign: 'center'}}>Concepts</Text>
                          </View>
                    </TouchableWithoutFeedback>
                  }
                  </View>

                  <View style={{marginTop: 10}}>
                    {viewModalStyle == 'Question Type' ?
                    <TouchableWithoutFeedback onPress={() => setViewModalStyle('Question Type')}>
                        <Card style={{backgroundColor: 'white', borderColor: 'red', borderLeftWidth: 3, paddingBottom: 20, paddingTop: 20}}>
                              <Text style={{color: 'black', textAlign: 'center'}}>Question Type</Text>
                        </Card>
                    </TouchableWithoutFeedback>
                    :
                    <TouchableWithoutFeedback onPress={() => setViewModalStyle('Question Type')} style="Question Type">
                        <View style={{backgroundColor: 'transparent', paddingBottom: 20, paddingTop: 20}}>
                              <Text style={{color: 'black', textAlign: 'center'}}>Question Type</Text>
                        </View>
                    </TouchableWithoutFeedback>
                  }
                  </View>
                </View>

                <View style={{width: '60%', backgroundColor: 'white'}}>
                  {viewModalStyle == 'Difficulty Level' && 
                  <View style={{marginTop: 10}}>
                  <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                    <View style={{flexDirection: 'column'}}>
                      <View style={{flexDirection: 'row'}}>
                        <RadioButton value="Easy" />
                        <Text style={{marginTop: 6}}>Easy</Text>
                      </View>

                      <View style={{flexDirection: 'row'}}>
                        <RadioButton value="Medium" />
                        <Text style={{marginTop: 6}}>Medium</Text>
                      </View>

                      <View style={{flexDirection: 'row'}}>
                        <RadioButton value="Hard" />
                        <Text style={{marginTop: 6}}>Hard</Text>
                      </View>
                    </View>
                  </RadioButton.Group>
                </View>
                }

                  {viewModalStyle == 'Publications' && 
                  <View style={{marginTop: 10}}>
                  <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                    <View style={{flexDirection: 'column'}}>
                      <View style={{flexDirection: 'row'}}>
                        <RadioButton value="Modern Abc" />
                        <Text style={{marginTop: 6}}>Modern Abc</Text>
                      </View>

                      <View style={{flexDirection: 'row'}}>
                        <RadioButton value="Cordova" />
                        <Text style={{marginTop: 6}}>Cordova</Text>
                      </View>

                      <View style={{flexDirection: 'row'}}>
                        <RadioButton value="Orient Groups" />
                        <Text style={{marginTop: 6}}>Orient Groups</Text>
                      </View>

                      <View style={{flexDirection: 'row'}}>
                        <RadioButton value="Oswaal" />
                        <Text style={{marginTop: 6}}>Oswaal</Text>
                      </View>

                      <View style={{flexDirection: 'row'}}>
                        <RadioButton value="NCERT" />
                        <Text style={{marginTop: 6}}>NCERT</Text>
                      </View>

                      <View style={{flexDirection: 'row'}}>
                        <RadioButton value="Ncert Examplar" />
                        <Text style={{marginTop: 6}}>Ncert Examplar</Text>
                      </View>
                    </View>
                  </RadioButton.Group>
                </View>
                }

                {viewModalStyle == 'Concepts' && 
                <View style={{marginTop: 10}}>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                  <View style={{flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row'}}>
                      <RadioButton value="Number System" />
                      <Text style={{marginTop: 6}}>Number System</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                      <RadioButton value="Expanding Brackets" />
                      <Text style={{marginTop: 6}}>Expanding Brackets</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                      <RadioButton value="Knowing Our Numbers" />
                      <Text style={{marginTop: 6}}>Knowing Our Numbers</Text>
                    </View>
                  </View>
                </RadioButton.Group>
              </View>
                }

                {viewModalStyle == 'Question Type' && 
                <View style={{marginTop: 10}}>
                    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                      <View style={{flexDirection: 'column'}}>
                        <View style={{flexDirection: 'row'}}>
                          <RadioButton value="Single Correct" />
                          <Text style={{marginTop: 6}}>Single Correct</Text>
                        </View>

                        <View style={{flexDirection: 'row'}}>
                          <RadioButton value="Multiple Correct" />
                          <Text style={{marginTop: 6}}>Multiple Correct</Text>
                        </View>

                        <View style={{flexDirection: 'row'}}>
                          <RadioButton value="Subjective" />
                          <Text style={{marginTop: 6}}>Subjective</Text>
                        </View>
                      </View>
                    </RadioButton.Group>
                  </View>
                }

                  
                </View>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginLeft: '10%'}}>
                <TouchableWithoutFeedback style={{marginTop: '10%'}} onPress={() => console.log('pressed')}>
                    <Card style={{marginTop: 10, paddingBottom: 10, paddingTop: 10, paddingLeft: 50, paddingRight: 50, width: '100%', borderRadius: 30, borderWidth: 2, borderColor: '#0F4C5C'}}>
                        <Text style={{fontSize: 18, fontWeight: '500', color: '#0F4C5C', textAlign: 'center'}}>Reset</Text>
                    </Card>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback style={{marginTop: '10%'}} onPress={() => this.props.navigation.navigate('Select_Group')}>
                    <Card style={{backgroundColor: '#0F4C5C', marginTop: 10, paddingBottom: 14, paddingTop: 14, paddingLeft: 50, paddingRight: 50, width: '100%', borderRadius: 30}}>
                        <Text style={{fontSize: 18, fontWeight: '500', color: 'white', textAlign: 'center'}}>Apply</Text>
                    </Card>
                </TouchableWithoutFeedback>
            </View>
              
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FDF8EE', 
      padding: 15
    },
    SecondContainer: {
      flex: 2,
      
    },
    header: {
      flexDirection: 'row',
      height: 90,
      backgroundColor: '#FFEECB',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'space-between'
  },
  imagePicture: {
    width: '90%',
    height: '100%',
  },
  viewPicture: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    // height: 200,
    backgroundColor: 'white',
  },
  
  
});
export default Question_Bank;