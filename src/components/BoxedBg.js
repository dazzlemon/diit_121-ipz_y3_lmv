import { styles } from "../theme";
import { ScrollView, ImageBackground } from "react-native";

const bgImage = process.env.PUBLIC_URL + '/assets/images/bg.jpg';

const BoxedBg = (props) => (
    <ImageBackground
        source = {bgImage}
        style = {styles.bg}
    >
        <ScrollView style = {styles.box}>
            {props.content}
        </ScrollView>
    </ImageBackground>
);

export default BoxedBg;