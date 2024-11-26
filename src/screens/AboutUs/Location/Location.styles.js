import { StyleSheet } from "react-native";
import Color from '../../../../assets/constants/color';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:20,
      position:'relative'
    },
    mapHeader:{
        fontSize:25,
        fontWeight:'bold',
        padding:10,
        textAlign:'center'
    },
    map: {
      flex: 1,
      height:200,
    },
    loadingContainer: {
      flex: 1,
      width:'100%',
      height:200,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Color.primary,
      position:'absolute',
      top:'20%',
      left:'2%'
    },
  });

export default styles;