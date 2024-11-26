import { StyleSheet } from "react-native";
import Color from '../../../../assets/constants/color';

const styles = StyleSheet.create({
    coverLogo:{
        width:'100%',
        height:100,
        resizeMode:'contain',
        backgroundColor:Color.primary
    },
    brgyOfficials:{
        width:'100%',
        height:900,
        resizeMode:'contain'
    }
});

export default styles;