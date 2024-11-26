import React from 'react';
import { View, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Images from '../../../assets/constants/images';
import styles from './Drawer.styles';

const CustomDrawer = (props) => {
  return (
    <View style={styles.drawerContent}>
      <Image source={Images.coverLogo2} style={styles.drawerImage} />
      
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
