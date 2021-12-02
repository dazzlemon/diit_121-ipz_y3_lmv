import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const bgImage = process.env.PUBLIC_URL + '/assets/images/bg.jpg';

function isEmail(str) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(str.toLowerCase());
}

function CheckInput(props) {
  var errorMessage = props.isRequiredError ? 'this field is required'
                                           : props.errorMessage?.();
  var isError = errorMessage != null;
  return (
    <View style = {styles.inBox}>
      <Text style = {styles.textInputTitle}>
        {props.title}
        <Text style = {styles.textInputError}>
          {isError ? " - " + errorMessage
                   : null}
        </Text>
      </Text>
      <TextInput
        spellCheck = {false}
        style = {isError ? [styles.input, {borderColor: colors.errorRed, borderWidth: 2}]
                         : styles.input}
        onChangeText = {props.onChangeText}
        secureTextEntry = {props.secureTextEntry ?? null}
      />
    </View>
  )
}

const ReactApp = () => {
  const [hasAccount, setHasAccount] = useState(false);
  const [isReadingTos, setIsReadingTos] = useState(false);
  const [isReadingPp, setIsReadingPp] = useState(false);
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  // jan 1 of current year
  const [birthday, setBirthday] = useState(1);
  const [birthMonth, setBirthMonth] = useState(0);
  const [birthYear, setBirthYear] = useState(new Date().getFullYear());

  const [noEmail, setNoEmail] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailRegistered, setIsEmailRegistered] = useState(false);
  const [isValidBirthday, setIsValidBirthday] = useState(true);
  const [noUsername, setNoUsername] = useState(false);
  const [noPassword, setNoPassword] = useState(false);

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

        <CheckInput
          title = {'email'}
          isRequiredError = {noEmail}
          errorMessage = {() => {
            if (!isEmailValid) {
              return 'please enter an email address';
            }
            if (isEmailRegistered) {
              return 'email address already registered';
            }
          }}
          onChangeText = {(text) => setEmail(text)}
        />

        <CheckInput
          title = {'username'}
          isRequiredError = {noUsername}
          onChangeText = {(text) => setUsername(text)}
        />

        <CheckInput
          title = {'password'}
          isRequiredError = {noPassword}
          onChangeText = {(text) => setPassword(text)}
          secureTextEntry = {true}
        />

        <View style = {styles.inBox}>
          <Text
            style = {styles.textInputTitle}
          >
            date of birth
            
          </Text>
          <View style = {{flexDirection: 'row', width: '100%'}}>

            {/* Month */}
            <Picker
              style = {[styles.picker, {width: '40%'}]}
              onValueChange = {(val, id) => setBirthMonth(val)}  
            >
              <Picker.Item label = 'Jan' value = '0' />
              <Picker.Item label = 'Feb' value = '1' />
              <Picker.Item label = 'Mar' value = '2' />
            </Picker>

            {/* Day */}
            <Picker
              style = {[styles.picker, {width: '20%', marginHorizontal: '10%'}]}
              onValueChange = {(val, id) => setBirthday(val)}  
            >
              <Picker.Item label = '1' value = '1' />
              <Picker.Item label = '2' value = '2' />
              <Picker.Item label = '3' value = '3' />
              <Picker.Item label = '28' value = '28' />
              <Picker.Item label = '29' value = '29' />
              <Picker.Item label = '30' value = '30' />
              <Picker.Item label = '31' value = '31' />
            </Picker>

            {/* Year */}
            <Picker
              style = {[styles.picker, {width: '30%'}]}
              onValueChange = {(val, id) => setBirthYear(val)}
            >
              <Picker.Item label = '2021' value = '2021' />
              <Picker.Item label = '2020' value = '2020' />
              <Picker.Item label = '2019' value = '2019' />
            </Picker>
          </View>
          <Text style = {styles.textInputError}>
              {!isValidBirthday ? 'Please enter a valid date of birth'
                                : null}
            </Text>
        </View>

        <View style = {styles.inBox}>
          <TouchableOpacity
            style = {styles.button}
            onPress = {() => {
              var noEmail_ = email == null || email == '';
              setNoEmail(noEmail_);
              var isEmailValid_ = !noEmail_ && isEmail(email);
              setIsEmailValid(isEmailValid_);
              var isEmailRegistered_ = isEmailValid_ && email == 'registered@email.com';
              setIsEmailRegistered(isEmailRegistered_);

              var birthdate = new Date(birthYear, birthMonth, birthday);
              var isValidBirthday_ = birthdate.getDate() == birthday
                                  && birthdate.getFullYear() == birthYear
                                  && birthdate.getMonth() == birthMonth;
              setIsValidBirthday(isValidBirthday_);

              var noUsername = username == null || username == '';
              setNoUsername(noUsername);
              var noPassword = password == null || password == '';
              setNoPassword(noPassword);

              if (isEmailValid_ && !isEmailRegistered_ && isValidBirthday_ && !noPassword && !noUsername) {
                register(email, username, password, birthdate);
              }
            }}
          >
            <Text style = {styles.buttonText}>
              Continue
            </Text>
          </TouchableOpacity>
          <Text
            onMouseEnter = {() => setHasAccount(true)}
            onMouseLeave = {() => setHasAccount(false)}
            style = {hasAccount ? [styles.clickableText, styles.clickableTextHover]
                                : styles.clickableText}
            onPress = {() => alert('Redirect to login page')}
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
              onPress = {() => alert('Redirect to ToS')}
            >Terms of Service</Text>
            {' and '} 
            <Text
              onMouseEnter = {() => setIsReadingPp(true)}
              onMouseLeave = {() => setIsReadingPp(false)}
              style = {isReadingPp ? [styles.clickableText, styles.clickableTextHover]
                                   : styles.clickableText}
              onPress = {() => alert('Redirect to PP')}
            >Privacy Policy</Text>
            .
          </Text>
        </View>
      </View>
    </ImageBackground>
  )
};

function register(email, username, password, birthday) {
  alert(`
    Email: ${email}
    Username: ${username}
    Password hash: ${password.hashCode()}
    birthday: ${birthday.toDateString()}
  `)
}

String.prototype.hashCode = function() {
  var hash = 0;
  if (this.length == 0) {
      return hash;
  }
  for (var i = 0; i < this.length; i++) {
      var char = this.charCodeAt(i);
      hash = ((hash<<5)-hash)+char;
      hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

const colors = {
  borderColor: '#141414',
  itemBg: '#1e1e1e',
  white: '#ffffff',
  itemFontColor: '#707070',
  errorRed: '#ff1f1f',
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
    borderRadius: sizes.borderRadius,
    height: sizes.height,
    backgroundColor: colors.itemBg,
    color: colors.itemFontColor,
    fontSize: 18,
    borderStyle: 'inset',
  },
  picker: {
    backgroundColor: colors.itemBg,
    borderColor: colors.borderColor,
    borderWidth: sizes.borderWidth,
    height: sizes.height,
    color: colors.itemFontColor,
    fontWeight: 'bold',
    borderRadius: sizes.borderRadius,
    borderStyle: 'inset',
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
    fontWeight: 'bold',
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
  textInputError: {
    color : colors.errorRed,
  }
});

export default ReactApp;