import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity} from 'react-native';
import { Button, Card, TextInput, Avatar} from 'react-native-paper';
import {Input, Icon, Divider, FAB } from 'react-native-elements';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { NavigationContainer,  useNavigation, useIsFocused } from '@react-navigation/native';

const Choose_Chapter = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <ScrollView>
        <View style={styles.header}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('OTP')}>
                <Icon name='angle-left' type='font-awesome' color='black' size={35}/>
            </TouchableWithoutFeedback>
            <Text style={{fontSize: 25, fontWeight: '700', color: 'black', marginLeft: 15}}>Choose Chapter</Text>
        </View>

        <View style={{padding: 10}}>
            <Text style={{fontSize: 19, fontWeight: '900', letterSpacing: 1, color: 'black'}}>You can choose from below subject</Text>
            <Text style={{fontSize: 16, fontWeight: '400', color: 'black'}}>click on the to assign homework</Text>
        </View>

        <View style={{marginTop: '3%', padding: 5}}>
            <Text style={{fontSize: 22, fontWeight: '900', color: 'black', textDecorationLine: 'underline'}}>6th</Text>
            <ScrollView horizontal style={{padding: 10}}>
                <Card style={{backgroundColor: '#EEE4F5', borderRadius: 20, padding: 10, marginTop: '5%'}}>
                    <Card style={{borderRadius: 15}}>
                        <Text style={{fontSize: 16, fontWeight: '400', textAlign: 'center', color: 'black'}}>17 Questions</Text>
                    </Card>
                    <Image
                        style={styles.Image}
                        source={require('./reading-girl.png')}
                    />
                    <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>Maths</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black'}}>7 Chapters</Text>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black', marginLeft: 20}}>12 Topics</Text>
                    </View>
                </Card>

                <Card style={{backgroundColor: '#FFE9BE', borderRadius: 20, padding: 10, marginTop: '5%', marginLeft: 20}}>
                    <Card style={{borderRadius: 15}}>
                        <Text style={{fontSize: 16, fontWeight: '400', color: 'black', textAlign: 'center'}}>15 Questions</Text>
                    </Card>
                    <Image
                        style={styles.Image}
                        source={require('./reading-girl.png')}
                    />
                    <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>Biology</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black'}}>6 Chapters</Text>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black', marginLeft: 20}}>15 Topics</Text>
                    </View>
                </Card>

                <Card style={{backgroundColor: '#EFD7D6', borderRadius: 20, padding: 10, marginTop: '5%', marginLeft: 20}}>
                    <Card style={{borderRadius: 15}}>
                        <Text style={{fontSize: 16, fontWeight: '400', color: 'black', textAlign: 'center'}}>17 Questions</Text>
                    </Card>
                    <Image
                        style={styles.Image}
                        source={require('./reading-girl.png')}
                    />
                    <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>Social Science</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black'}}>6 Chapters</Text>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black', marginLeft: 20}}>18 Topics</Text>
                    </View>
                </Card>

               
            </ScrollView>
        </View>

        <View style={{marginTop: '5%', padding: 5}}>
            <Text style={{fontSize: 22, fontWeight: '900', color: 'black', textDecorationLine: 'underline'}}>7th</Text>
            <ScrollView horizontal style={{padding: 10}}>
                <Card style={{backgroundColor: '#CBE6E3', borderRadius: 20, padding: 10, marginTop: '5%'}}>
                    <Card style={{borderRadius: 15}}>
                        <Text style={{fontSize: 16, fontWeight: '400', color: 'black', textAlign: 'center'}}>17 Questions</Text>
                    </Card>
                    <Image
                        style={styles.Image}
                        source={require('./reading-girl.png')}
                    />
                    <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>Geography</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black'}}>8 Chapters</Text>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black', marginLeft: 20}}>12 Topics</Text>
                    </View>
                </Card>

                <Card style={{backgroundColor: '#E9DDDC', borderRadius: 20, padding: 10, marginTop: '5%', marginLeft: 20}}>
                    <Card style={{borderRadius: 15}}>
                        <Text style={{fontSize: 16, fontWeight: '400', color: 'black', textAlign: 'center'}}>15 Questions</Text>
                    </Card>
                    <Image
                        style={styles.Image}
                        source={require('./reading-girl.png')}
                    />
                    <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>Geometry</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black'}}>6 Chapters</Text>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black', marginLeft: 20}}>15 Topics</Text>
                    </View>
                </Card>

                <Card style={{backgroundColor: '#C8DCAD', borderRadius: 20, padding: 10, marginTop: '5%', marginLeft: 20}}>
                    <Card style={{borderRadius: 15}}>
                        <Text style={{fontSize: 16, fontWeight: '400', color: 'black', textAlign: 'center'}}>17 Questions</Text>
                    </Card>
                    <Image
                        style={styles.Image}
                        source={require('./reading-girl.png')}
                    />
                    <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>English</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black'}}>6 Chapters</Text>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black', marginLeft: 20}}>18 Topics</Text>
                    </View>
                </Card>

               
            </ScrollView>
        </View>

        <View style={{marginTop: '5%', padding: 5}}>
            <Text style={{fontSize: 22, fontWeight: '900', color: 'black', textDecorationLine: 'underline'}}>8th</Text>
            <ScrollView horizontal style={{padding: 10}}>
                <Card style={{backgroundColor: '#EEE4F5', borderRadius: 20, padding: 10, marginTop: '5%'}}>
                    <Card style={{borderRadius: 15}}>
                        <Text style={{fontSize: 16, fontWeight: '400', color: 'black', textAlign: 'center'}}>17 Questions</Text>
                    </Card>
                    <Image
                        style={styles.Image}
                        source={require('./reading-girl.png')}
                    />
                    <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>Geography</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black'}}>7 Chapters</Text>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black', marginLeft: 20}}>12 Topics</Text>
                    </View>
                </Card>

                <Card style={{backgroundColor: '#FFE9BE', borderRadius: 20, padding: 10, marginTop: '5%', marginLeft: 20}}>
                    <Card style={{borderRadius: 15}}>
                        <Text style={{fontSize: 16, fontWeight: '400', color: 'black', textAlign: 'center'}}>15 Questions</Text>
                    </Card>
                    <Image
                        style={styles.Image}
                        source={require('./reading-girl.png')}
                    />
                    <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>Biology</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black'}}>6 Chapters</Text>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black', marginLeft: 20}}>15 Topics</Text>
                    </View>
                </Card>

                <Card style={{backgroundColor: '#E9DDDC', borderRadius: 20, padding: 10, marginTop: '5%', marginLeft: 20}}>
                    <Card style={{borderRadius: 15}}>
                        <Text style={{fontSize: 16, fontWeight: '400', color: 'black', textAlign: 'center'}}>17 Questions</Text>
                    </Card>
                    <Image
                        style={styles.Image}
                        source={require('./reading-girl.png')}
                    />
                    <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>English</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black'}}>6 Chapters</Text>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black', marginLeft: 20}}>18 Topics</Text>
                    </View>
                </Card>

               
            </ScrollView>
        </View>

        <View style={{marginTop: '5%', padding: 5}}>
            <Text style={{fontSize: 22, fontWeight: '900', color: 'black', textDecorationLine: 'underline'}}>9th</Text>
            <ScrollView horizontal style={{padding: 10}}>
                <Card style={{backgroundColor: '#CBE6E3', borderRadius: 20, padding: 10, marginTop: '5%'}}>
                    <Card style={{borderRadius: 15}}>
                        <Text style={{fontSize: 16, fontWeight: '400', color: 'black', textAlign: 'center'}}>17 Questions</Text>
                    </Card>
                    <Image
                        style={styles.Image}
                        source={require('./reading-girl.png')}
                    />
                    <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>Geography</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black'}}>7 Chapters</Text>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black', marginLeft: 20}}>12 Topics</Text>
                    </View>
                </Card>

                <Card style={{backgroundColor: '#FFE9BE', borderRadius: 20, padding: 10, marginTop: '5%', marginLeft: 20}}>
                    <Card style={{borderRadius: 15}}>
                        <Text style={{fontSize: 16, fontWeight: '400', color: 'black', textAlign: 'center'}}>15 Questions</Text>
                    </Card>
                    <Image
                        style={styles.Image}
                        source={require('./reading-girl.png')}
                    />
                    <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>Biology</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black'}}>6 Chapters</Text>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black', marginLeft: 20}}>15 Topics</Text>
                    </View>
                </Card>

                <Card style={{backgroundColor: '#EFD7D6', borderRadius: 20, padding: 10, marginTop: '5%', marginLeft: 20}}>
                    <Card style={{borderRadius: 15}}>
                        <Text style={{fontSize: 16, fontWeight: '400', color: 'black', textAlign: 'center'}}>17 Questions</Text>
                    </Card>
                    <Image
                        style={styles.Image}
                        source={require('./reading-girl.png')}
                    />
                    <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>English</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black'}}>6 Chapters</Text>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black', marginLeft: 20}}>18 Topics</Text>
                    </View>
                </Card>

               
            </ScrollView>
        </View>

        <View style={{marginTop: '5%', padding: 5}}>
            <Text style={{fontSize: 22, fontWeight: '900', color: 'black', textDecorationLine: 'underline'}}>10th</Text>
            <ScrollView horizontal style={{padding: 10}}>
                <Card style={{backgroundColor: '#EEE4F5', borderRadius: 20, padding: 10, marginTop: '5%'}}>
                    <Card style={{borderRadius: 15}}>
                        <Text style={{fontSize: 16, fontWeight: '400', color: 'black', textAlign: 'center'}}>17 Questions</Text>
                    </Card>
                    <Image
                        style={styles.Image}
                        source={require('./reading-girl.png')}
                    />
                    <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>Geography</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black'}}>7 Chapters</Text>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black', marginLeft: 20}}>12 Topics</Text>
                    </View>
                </Card>

                <Card style={{backgroundColor: '#FFE9BE', borderRadius: 20, padding: 10, marginTop: '5%', marginLeft: 20}}>
                    <Card style={{borderRadius: 15}}>
                        <Text style={{fontSize: 16, fontWeight: '400', color: 'black', textAlign: 'center'}}>15 Questions</Text>
                    </Card>
                    <Image
                        style={styles.Image}
                        source={require('./reading-girl.png')}
                    />
                    <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>Biology</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black'}}>6 Chapters</Text>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black', marginLeft: 20}}>15 Topics</Text>
                    </View>
                </Card>

                <Card style={{backgroundColor: '#EFD7D6', borderRadius: 20, padding: 10, marginTop: '5%', marginLeft: 20}}>
                    <Card style={{borderRadius: 15}}>
                        <Text style={{fontSize: 16, fontWeight: '400', color: 'black', textAlign: 'center'}}>17 Questions</Text>
                    </Card>
                    <Image
                        style={styles.Image}
                        source={require('./reading-girl.png')}
                    />
                    <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>English</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black'}}>6 Chapters</Text>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black', marginLeft: 20}}>18 Topics</Text>
                    </View>
                </Card>

               
            </ScrollView>
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
        height: 60,
        backgroundColor: '#FFEECB',
        padding: 10
    },
    Image: {
        width: 180,
        height: 180,
        alignSelf: 'center'
    }
  });
export default Choose_Chapter;