import { StyleSheet } from "react-native";
import Color from "../../../assets/constants/color";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Color.footer,
        justifyContent:'center',
        padding:20
    },
    footerLogo:{
        width:'100%',
        height:200,
        resizeMode:'contain'
    },
    header:{
        fontSize:18,
        fontWeight:'700',
        color:Color.black,
        marginBottom:5,
        marginTop:10,
    },
    paragraph:{
        fontSize:12
    },
    link:{
        fontSize:12,
    },
    pressedText: {
        color: Color.secondary, 
        textDecorationLine: 'underline'
      },
      copyRight:{
        paddingTop:40,
        textAlign:'center'
      },
      copyRightHover:{
        color:Color.secondary
      }
})

export default styles;