import React, { useState } from "react";
import styles from "./Footer.styles";
import { Image, Text, TouchableHighlight, View } from "react-native";

// footer logo
import Images from "../../../assets/constants/images";
import data from "./Footer.data";
import facebookLink from './Footer.link';
import contactInfo from "./Footer.contactInfo";

function Footer() {

  // State to track the currently pressed index
  const [pressedIndex, setPressedIndex] = useState(null);
  const [pressed, setPressed] = useState(false);

  return (
    <View style={styles.container}>
      <Image style={styles.footerLogo} source={Images.footer} />
      <Text style={styles.header}>City of Sipalay</Text>
      {
        contactInfo.map((item,index)=>(
          <Text key={index} style={styles.paragraph}>{item}</Text>
        ))
      }

      <Text style={styles.header}>Republic of the Philippines</Text>
      <Text style={styles.paragraph}>
        All content is in the public domain unless otherwise stated.
      </Text>
      <Text style={styles.header}>About GOVPH</Text>
      <Text style={styles.paragraph}>
        Learn more about the Philippine government, its structure, how
        government works and the people behind it.
      </Text>
      <Text style={styles.header}>Government Links</Text>
      {data.map((item, index) => (
        <TouchableHighlight
          onPress={() => {
            setPressedIndex(index);
            item.link();
          }}
          onPressIn={() => setPressedIndex(index)}
          onPressOut={() => setPressedIndex(null)}
          key={index}
          underlayColor="none"
        >
          <Text
            style={[styles.link, pressedIndex === index && styles.pressedText]}
          >
            {item.name}
          </Text>
        </TouchableHighlight>
      ))}

      {/* Copy rigght */}
      <TouchableHighlight
        underlayColor="none"
        onPress={()=> facebookLink.facebook()}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
      >
        <Text style={[styles.copyRight, pressed == true && styles.copyRightHover]}>Copyright © 2024 | Quivir Cutanda</Text>
      </TouchableHighlight>
    </View>
  );
}

export default Footer;
