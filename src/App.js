import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, ImageBackground, TouchableOpacity } from 'react-native';

const bgImage = process.env.PUBLIC_URL + '/assets/images/bg.jpg';

const ReactApp = () => {
  const [counter, setCounter] = useState(0);
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
          <TextInput
            style = {styles.input}
          />
        </View>

        <View style = {styles.inBox}>
          <TouchableOpacity style = {styles.button}>
            <Text style = {styles.buttonText}>
              Continue
            </Text>
          </TouchableOpacity>
          <Text style = {styles.clickableText}>
            Already have an account?
          </Text>

          <Text style = {styles.tosText}>
            {'By registering, you agree to AppName '}
            <Text style = {styles.clickableText}>Terms of Service</Text>
            {' and '} 
            <Text style = {styles.clickableText}>Privacy Policy</Text>
            .
          </Text>
        </View>
      </View>
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#141414',
    borderRadius: 5,
    height: 40,
    backgroundColor: '#1e1e1e',
  },
  box: {
    padding: 33,
    backgroundColor: '#1e2124',
    borderRadius: 7,
  },
  textMain: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInputTitle: {
    textTransform: 'uppercase',
    fontSize: 14,
    color: '#707070',
  },
  bg: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
    inset: '0 0 0 0',
  },
  clickableText: {
    color: '#30b2fd',
  },
  tosText: {
    color: '#404040',
    fontSize: 12,
  },
  inBox: {
    padding: 7,
  },
  button: {
    borderRadius: 7,
    backgroundColor: '#6665d2',
    height: 40,
    borderColor: '#1e2124',// hack because its bit to wide otherwise
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  }
});

export default ReactApp;