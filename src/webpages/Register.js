import React, { useState } from 'react';
import { View, ScrollView, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Link } from 'react-router-native';
import { CheckInput } from '../components';
import { styles } from '../theme';

const bgImage = process.env.PUBLIC_URL + '/assets/images/bg.jpg';

function isEmail(str) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(str.toLowerCase());
}

const BoxedBg = (props) => {
  return (<ImageBackground
    source = {bgImage}
    style = {styles.bg}
  >
    <ScrollView style = {styles.box}>
      {props.content}
    </ScrollView>
  </ImageBackground>);
};

const Register = () => {
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
    <BoxedBg content = {(<>
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
          return !isEmailValid     ? 'please enter an email address'
               : isEmailRegistered ? 'email address already registered'
               : null;
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
        <Text style = {styles.textInputTitle}>
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
        <Link 
          onMouseEnter = {() => setHasAccount(true)}
          onMouseLeave = {() => setHasAccount(false)}
          to='/login'
          underlayColor = 'rgba(0, 0, 0, 0)'
        >
          <Text style = {hasAccount ? [styles.clickableText, styles.clickableTextHover]
                                    : styles.clickableText}>
            Already have an account?
          </Text>    
        </Link>

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
    </>)}/>
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

export default Register;