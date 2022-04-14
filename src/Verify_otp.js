import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity} from 'react-native';
import { Button, Card, TextInput} from 'react-native-paper';
import {Input, Icon, Divider } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { NavigationContainer,  useNavigation, useIsFocused } from '@react-navigation/native';
import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from 'react-native-confirmation-code-field';

const Verify_otp = () => {
    const navigation = useNavigation();
    const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
    
  return (
    <View style={styles.container}>
        <Text style={{fontSize: 22, fontWeight: '900', color: 'black', textAlign: 'center', marginTop: '10%'}}>Enter OTP</Text>
        <Text style={{color: 'black', fontWeight: '400', textAlign: 'center', marginTop: 30}}>Please enter the 5 digit OTP sent to</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'black', fontSize: 15, fontWeight: '700', textAlign: 'center', marginTop: 10}}>+91 1234567892</Text>
            <View style={{marginLeft: 10}}>
                <Icon
                name='pencil'
                type='font-awesome'
                color='black'
                onPress={() => console.log('hello')} />
            </View>
        </View>

        <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View style={{padding:10}}>
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
          </View>
        )}
      />
          <View style={{flexDirection: 'row', marginLeft: 30}}>
            <Text style={{color: 'black', fontWeight: '400'}}>00:20</Text>
            <TouchableWithoutFeedback>
              <Text style={{color: 'blue', fontWeight: '600', marginLeft: '67%', textDecorationLine: 'underline',}}>Resend OTP</Text>
            </TouchableWithoutFeedback>
          </View>

          <TouchableWithoutFeedback style={{marginTop: '10%'}} onPress={() => navigation.navigate('Details')}>
              <Card style={{backgroundColor: '#1e2e61', marginTop: 20, paddingBottom: 17, paddingTop: 17, paddingLeft: 40, paddingRight: 40, width: '90%', alignSelf: 'center', borderRadius: 30}}>
                  <Text style={{fontSize: 16, fontWeight: '500', color: 'white', textAlign: 'center'}}>Confirm & Verify</Text>
              </Card>
          </TouchableWithoutFeedback>

          <View style={{flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', width: '50%', marginTop: '10%'}}>
              <Text>Your agree to</Text>
              <TouchableWithoutFeedback>
                  <Text style={{color: 'blue', fontWeight: '600', fontStyle: 'normal', textDecorationLine: 'underline',}}>Terms & Conditions and Privacy Policy</Text>
              </TouchableWithoutFeedback>
          </View>
    </View>
  )
}
const CELL_COUNT = 5;
const styles = StyleSheet.create({
    container: {
      flex: 1,
     backgroundColor: '#fae6f1'
    },
    root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 60},
  cell: {
    width: 60,
    height: 60,
    lineHeight: 40,
    fontSize: 24,
    borderWidth: 2,
    borderColor: 'white',
    textAlign: 'center',
    color: 'black'
  },
  focusCell: {
    borderColor: '#000',
   
  },
    
  });
export default Verify_otp;