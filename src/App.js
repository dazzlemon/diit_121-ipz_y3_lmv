import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const ReactApp = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View
      style = {styles.view}
    >
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
        title='Continue'
      />
      <Text>
        Already have an account?
      </Text>

      <Text>
        By registering, you agree to AppName Terms of Service and Privacy Policy.
      </Text>

    </View>
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
  view: {
    padding: 100,
    backgroundColor: '#1e2124',
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
});

export default ReactApp;