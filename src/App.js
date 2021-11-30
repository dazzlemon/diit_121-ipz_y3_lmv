import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, ImageBackground } from 'react-native';

const bgImage = process.env.PUBLIC_URL + '/assets/images/bg.jpg';

const ReactApp = () => {
  const [counter, setCounter] = useState(0);
  return (
    <ImageBackground
      source = {bgImage}
      style = {styles.bg}
    >
      <View style = {styles.screen}>
        <View style = {styles.box}>
          <Text
            style = {styles.textMain}
          >
            Create an account
          </Text>

          <Text
            style = {styles.textInputTitle}
          >
            email
          </Text>
          <TextInput
            style = {styles.input}
          />

          <Text
            style = {styles.textInputTitle}
          >
            username
          </Text>
          <TextInput
            style = {styles.input}
          />

          <Text
            style = {styles.textInputTitle}
          >
            password
          </Text>
          <TextInput
            style = {styles.input}
          />

          <Text
            style = {styles.textInputTitle}
          >
            date of birth
          </Text>
          <TextInput
            style = {styles.input}
          />

          <Button
            title = 'Continue'
            color = '#6665d2'
          />
          <Text>
            Already have an account?
          </Text>

          <Text>
            By registering, you agree to AppName Terms of Service and Privacy Policy.
          </Text>

        </View>
      </View>
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    height: 40,
    margin: 2,
    backgroundColor: '#1e1e1e',
  },
  box: {
    padding: 40,
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
    fontSize: 18,
    color: '#707070',
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
  },
  bg: {
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
    inset: '0 0 0 0',
  }
});

export default ReactApp;