import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './Barangay.styles';
import Images from '../../../../assets/constants/images';
import FooterScreen from '../../Footer/Footer';

export default function BarangayScreen() {
  return (
    <ScrollView>
    <View>
      <Image style={styles.coverLogo} source={Images.coverLogo2}/>
      <Image style={styles.brgyOfficials} source={Images.barangayOfficials}/>
      
      <FooterScreen />
    </View>
    </ScrollView>
  )
}