import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import styles from './Officials.styles';
import Images from '../../../../assets/constants/images';
import FooterScreen from '../../Footer/Footer';

const OfficialsScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.cityOfficials} source={Images.electedOffiles}/>
      </View>

      <FooterScreen />
    </ScrollView>
  )
}

export default OfficialsScreen