import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Screens from "./src/screens/screens";
import CustomDrawer from "./src/screens/CustomDrawerContent/Drawer";
import { Ionicons } from "react-native-vector-icons";

//  Drawer Navigator
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen
          name="Home"
          component={Screens.HomeScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Vision and Mission"
          component={Screens.VissionMissionScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="eye-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="History"
          component={Screens.HistoryScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="book-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Key Officials"
          component={Screens.OfficialsScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Barangay"
          component={Screens.BarangayScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="location-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
