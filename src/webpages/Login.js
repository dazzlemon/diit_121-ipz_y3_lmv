import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { BoxedBg, CheckInput } from '../components';
import { View } from 'react-native';
import { styles } from '../theme';
import { Link } from 'react-router-native';

const Login = () => (
    <BoxedBg content = {<LoginForm/>}/>
);

const LoginForm = () => {
    return (
        <>
            <View style = {styles.inBox}>
                <Text
                    style = {styles.textMain}
                >
                    Welcome back!
                </Text>
            </View>

            <CheckInput
                title = 'email'
                isRequiredError = {null}
                errorMessage = {() => null}
            />

            <CheckInput
                title = 'password'
                isRequiredError = {null}
                secureTextEntry = {true}
            />

            <View style = {[styles.inBox, {marginTop: -14}]}>
                <Text style = {false ? [styles.clickableText, styles.clickableTextHover]
                                     : styles.clickableText}>
                    Forgot your password?
                </Text>   
            </View>

            <View style = {styles.inBox}>
                <TouchableOpacity
                    style = {styles.button}
                >
                    <Text style = {styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
                
                <Text style = {styles.tosText}>
                    {'Need an account? '}
                    <Text style = {styles.clickableText}>
                        Register
                    </Text>
                </Text>
            </View>
        </>
    );
};
export default Login;