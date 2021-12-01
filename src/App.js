import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const bgImage = process.env.PUBLIC_URL + '/assets/images/bg.jpg';

const ReactApp = () => {
  const [hasAccount, setHasAccount] = useState(false);
  const [isReadingTos, setIsReadingTos] = useState(false);
  const [isReadingPp, setIsReadingPp] = useState(false);

  return (
    <ImageBackground
      source = {bgImage}
      style = {styles.bg}
    >
      <View style = {styles.box}>
        <View style = {styles.inBox}>
          <Text
            style = {styles.textMain}
          >
            Create an account
          </Text>
        </View>

        <View style = {styles.inBox}>
          <Text
            style = {styles.textInputTitle}
          >
            email
          </Text>
          <TextInput
            style = {styles.input}
          />
        </View>

        <View style = {styles.inBox}>
          <Text
            style = {styles.textInputTitle}
          >
            username
          </Text>
          <TextInput
            style = {styles.input}
          />
        </View>

        <View style = {styles.inBox}>
          <Text
            style = {styles.textInputTitle}
          >
            password
          </Text>
          <TextInput
            style = {styles.input}
          />
        </View>

        <View style = {styles.inBox}>
          <Text
            style = {styles.textInputTitle}
          >
            date of birth
          </Text>
          <View style = {{flexDirection: 'row', width: '100%'}}>

            {/* Month */}
            <Picker style = {[styles.picker, {width: '40%'}]}>
              <Picker.Item label = 'Jan' value = '1' />
              <Picker.Item label = 'Feb' value = '2' />
              <Picker.Item label = 'Mar' value = '3' />
            </Picker>

            {/* Day */}
            <Picker style = {[styles.picker, {width: '20%', marginHorizontal: '10%'}]}>
              <Picker.Item label = '1' value = '1' />
              <Picker.Item label = '2' value = '2' />
              <Picker.Item label = '3' value = '3' />
            </Picker>

            {/* Year */}
            <Picker style = {[styles.picker, {width: '30%'}]}>
              <Picker.Item label = '2021' value = '2021' />
              <Picker.Item label = '2020' value = '2020' />
              <Picker.Item label = '2019' value = '2019' />
            </Picker>
          </View>
        </View>

        <View style = {styles.inBox}>
          <TouchableOpacity style = {styles.button}>
            <Text style = {styles.buttonText}>
              Continue
            </Text>
          </TouchableOpacity>
          <Text
            onMouseEnter = {() => setHasAccount(true)}
            onMouseLeave = {() => setHasAccount(false)}
            style = {hasAccount ? [styles.clickableText, styles.clickableTextHover]
                                : styles.clickableText}
          >
            Already have an account?
          </Text>

          <Text style = {styles.tosText}>
            {'By registering, you agree to AppName '}
            <Text
              onMouseEnter = {() => setIsReadingTos(true)}
              onMouseLeave = {() => setIsReadingTos(false)}
              style = {isReadingTos ? [styles.clickableText, styles.clickableTextHover]
                                    : styles.clickableText}
            >Terms of Service</Text>
            {' and '} 
            <Text
              onMouseEnter = {() => setIsReadingPp(true)}
              onMouseLeave = {() => setIsReadingPp(false)}
              style = {isReadingPp ? [styles.clickableText, styles.clickableTextHover]
                                   : styles.clickableText}
            >Privacy Policy</Text>
            .
          </Text>
        </View>
      </View>
    </ImageBackground>
  )
};

const colors = {
  borderColor: '#141414',
  itemBg: '#1e1e1e',
  white: '#ffffff',
  itemFontColor: '#707070',
};

const sizes = {
  height: 40,
  borderRadius: 5,
  borderWidth: 1,
}

const styles = StyleSheet.create({
  input: {
    borderWidth: sizes.borderWidth,
    borderColor: colors.borderColor,
    borderRadius: sizes.borderWidth,
    height: sizes.height,
    backgroundColor: colors.itemBg,
  },
  picker: {
    backgroundColor: colors.itemBg,
    borderColor: colors.borderColor,
    borderWidth: sizes.borderWidth,
    height: sizes.height,
    color: colors.itemFontColor,
    fontWeight: 'bold',
    borderRadius: sizes.borderRadius,
  },
  box: {
    padding: 25,
    backgroundColor: '#1e2124',
    borderRadius: 7,
  },
  textMain: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInputTitle: {
    textTransform: 'uppercase',
    fontSize: 14,
    color: colors.itemFontColor,
    marginBottom: 5,
  },
  bg: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
    inset: '0 0 0 0',// fullscreen
  },
  clickableText: {
    color: '#30b2fd',
  },
  tosText: {
    color: '#404040',
    fontSize: 12,
    marginTop: 15,
  },
  inBox: {
    padding: 7,
  },
  button: {
    borderRadius: sizes.borderRadius,
    backgroundColor: '#6665d2',
    height: sizes.height,
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
  clickableTextHover: {
    textDecorationLine: 'underline',
    cursor: 'pointer',
  },
});

export default ReactApp;