import { StyleSheet } from "react-native";
import Color from "../../../assets/constants/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
  },

  // Header
  imageContainer: {
    backgroundColor: Color.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  coverLogo: {
    width: "90%",
    height: 100,
    resizeMode: "contain",
  },

  //   Main content
  cityContainer: {
    backgroundColor: Color.primary,
  },
  imageBackground: {
    width: "100%",
    height: 500,
    resizeMode: "stretch",
    display: "flex",
    justifyContent: "center",
  },
  cityTitle: {
    textAlign: "center",
    fontSize: 45,
    fontWeight: "700",
    textTransform: "uppercase",
    color: Color.primary,
  },
  logoContainer:{
    backgroundColor:Color.primary,
    position:'relative',
    height:130
  },
  cityLogo: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    position: "absolute",
    top: -100,
  },
 cardContainer: {
    flexDirection: "row", 
    flexWrap: "wrap", 
    justifyContent: "space-between",
    backgroundColor:Color.primary,
    padding: 10,
  },
  innerContainer: {
    width: "48%",
    height: 200, 
    alignItems: "center",
    justifyContent: "center",
    marginBottom:10, 
  },

  iconWrapper: {
    width: 100,
    height: 100,
    backgroundColor: Color.secondary,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:10
  },
  icons: {
    width: "100%",
    height: 50,
    resizeMode: "contain",
  },
  heading: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: 700,
    color: Color.txtColor,
  },
  description: {
    fontSize: 14,
    fontWeight: 500,
    textAlign: "center",
    color: Color.txtColor,
  },
});

export default styles;
