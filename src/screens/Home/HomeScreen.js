import React from 'react';import styles from "./Home.styles";

//importing screens
import Footer from '../Footer/Footer';
import Location from '../AboutUs/Location/LocationScreen';

import {Image, ImageBackground, ScrollView, Text, View } from "react-native";

// import Images & icons
import Images from "../../../assets/constants/images";
import data from "./data";

function HomeScreen() {

  return (
   
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.imageContainer}>
        <Image style={styles.coverLogo} source={Images.coverLogo} />
      </View>

      {/* Main Content */}
      <View style={styles.cityContainer}>
        <ImageBackground
          style={styles.imageBackground}
          source={Images.imageBackground}
        >
          <Text style={styles.cityTitle}>sipalay</Text>
          <Text style={styles.cityTitle}>city</Text>
        </ImageBackground>
        <View style={styles.logoContainer}>
        <Image style={styles.cityLogo} source={Images.cityLogo} />
        </View>
      </View>

      <View style={styles.cardContainer}>
      {data.map((item, index) => (
          <View style={styles.innerContainer}key={index}>
            <View style={styles.iconWrapper}>
              <Image style={styles.icons} source={item.icon} />
            </View>
            <Text style={styles.heading}>{item.size}</Text>
            <Text style={styles.description}>{item.title}</Text>
        </View>
      ))}
      </View>
      <Location />
      <Footer />

    </ScrollView>
  );
}

export default HomeScreen;
