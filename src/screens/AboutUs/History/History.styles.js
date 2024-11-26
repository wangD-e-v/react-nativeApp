import { StyleSheet } from "react-native";
import Color from '../../../../assets/constants/color';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Color.primary
    },
    coverLogo:{
        width:'100%',
        height:100,
        resizeMode:'contain',
        marginTop:10,
        marginBottom:10
    },
    heading:{
        padding:10,
        fontSize:40,
        fontWeight:700,
    },
    paragraph:{
        padding:10,
        fontSize:13,

    }
})

export default styles;