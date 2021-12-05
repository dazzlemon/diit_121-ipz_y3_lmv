import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { BoxedBg, CheckInput } from '../components';
import { View } from 'react-native';
import { styles } from '../theme';
import { Link } from 'react-router-native';

const Login = () => (
    <BoxedBg content = {<LoginForm/>}/>
);

const LoginForm = () => {
    const [needsAccount, setNeedsAccount] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [noEmail, setNoEmail] = useState(false);
    const [noPassword, setNoPassword] = useState(false);
    const [forgotPassword, setForgotPassword] = useState(false);
    const [badCredentials, setBadCredentials] = useState(false);
    const [emailDoesntExist, setEmailDoesntExist] = useState(false);

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
                isRequiredError = {noEmail}
                onChangeText = {(text) => setEmail(text)}
                errorMessage = {() => badCredentials   ? 'email or password is invalid' 
                                    : emailDoesntExist ? 'email does not exist'
                                    : null}
            />

            <CheckInput
                title = 'password'
                isRequiredError = {noPassword}
                secureTextEntry = {true}
                onChangeText = {(text) => setPassword(text)}
                errorMessage = {() => badCredentials ? 'email or password is invalid' : null}
            />

            <View
                style = {[styles.inBox, {marginTop: -14}]}
                onMouseEnter = {() => setForgotPassword(true)}
                onMouseLeave = {() => setForgotPassword(false)}    
            >
                <Text
                    style = {forgotPassword ? [styles.clickableText, styles.clickableTextHover]
                                            : styles.clickableText}
                    onPress = {() => {
                        // reset
                        setNoPassword(false);
                        setBadCredentials(false);

                        setNoEmail(!email);
                        if (email == 'registered@email.com') {
                            setEmailDoesntExist(false);
                            alert(`
We sent instructions to change your password to
${email}, please check both your inbox
and spam folder.
                            `);
                        } else {
                            setEmailDoesntExist(true);
                        }
                    }}                            
                >
                    Forgot your password?
                </Text>   
            </View>

            <View style = {styles.inBox}>
                <TouchableOpacity
                    style = {styles.button}
                    onPress = {() => {
                        setNoPassword(!password);
                        setNoEmail(!email);

                        if (!email || !password) {
                            return;
                        }

                        if (email == 'registered@email.com' && password == '12345') {
                            setBadCredentials(false);
                            alert('successfull login');
                        } else {
                            setBadCredentials(true);
                        }
                    }}
                >
                    <Text style = {styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>

            
                <Text style = {styles.tosText}>
                    {'Need an account? '}
                    <Link
                        to = '/register'
                        underlayColor = 'rgba(0, 0, 0, 0)'
                        onMouseEnter = {() => setNeedsAccount(true)}
                        onMouseLeave = {() => setNeedsAccount(false)}
                    >
                        <Text style = {needsAccount ? [styles.clickableText, styles.clickableTextHover]
                                                    : styles.clickableText}>
                            Register
                        </Text>
                    </Link>
                </Text>
            </View>
        </>
    );
};
export default Login;