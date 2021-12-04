import { View, Text, TextInput } from 'react-native';
import { styles, colors } from '../theme';

const CheckInput = (props) => {
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
};

export default CheckInput;