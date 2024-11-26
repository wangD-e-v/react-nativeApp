import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './VisionMission.styles';
import Images from '../../../../assets/constants/images';
import FooterScreen from '../../Footer/Footer';
import { ScrollView } from 'react-native-gesture-handler';

const VisionMissionScreen = () => {
  return (
    <ScrollView>

    
    <View style={styles.container}> 
      <Image style={styles.coverLogo}  source={Images.coverLogo2}/>
      <Image style={styles.visionMission} source={Images.visionMission}/>
      {/* Footer */}
    <FooterScreen />
    </View>
    </ScrollView>
  )
}

export default VisionMissionScreen