import { View, Text, ScrollView ,Image} from "react-native";
import React from "react";
import styles from "./History.styles";
import data from "./History.data";
import Images from '../../../../assets/constants/images';
import FooterScreen from '../../Footer/Footer';

const HistoryScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.coverLogo} source={Images.coverLogo2}/>
      <View style={styles.container}>
        <Text style={styles.heading}>History</Text>
        {data.map((item, index) => (
          <Text key={index} style={styles.paragraph}>
            {item}
          </Text>
        ))}

        <FooterScreen />
      </View>
    </ScrollView>
  );
};

export default HistoryScreen;
