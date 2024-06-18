import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, View } from 'react-native';
import HomeScreen from './screens/Home';
import SixMonthSumm from './screens/SixMonthSumm';
import WeekSumm from './screens/WeekSumm';
import Calculator from './screens/Calculator';
import ContactUs from './screens/ContactUs';
import FirstAidScreen from './screens/FirstAid';
import SewingScreen from './screens/Sewing';
import LandscapingScreen from './screens/Landscaping';
import LifeSkillsScreen from './screens/LifeSkills';
import ChildMindingScreen from './screens/ChildMinding';
import CookingScreen from './screens/Cooking';
import GardenMaintenanceScreen from './screens/GardenMaintenance';
import { CourseProvider } from './CourseContext';
import AboutScreen from './screens/AboutUs';

const Drawer = createDrawerNavigator();

const CustomHeader = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Image
        style={{ width: 90, height: 90, position: 'absolute', left: 190 }}
        source={require('./Assets/TransparentLogo.png')}
        resizeMode="contain"
      />
    </View>
  );
}

export default function App() {
  return (
    <CourseProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#525C91',
              height: 100,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitle: props => <CustomHeader {...props} />,
          }}
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="About Us" component={AboutScreen} />
          <Drawer.Screen name="Six Month Courses" component={SixMonthSumm} />
          <Drawer.Screen name="Six Week Courses" component={WeekSumm} />
          <Drawer.Screen name="Calculator" component={Calculator} />
          <Drawer.Screen name="Contact Us" component={ContactUs} />
          <Drawer.Screen
            name="First Aid"
            component={FirstAidScreen}
            options={{
              drawerLabel: () => null,
              drawerItemStyle: { display: 'none' },
            }}
          />
          <Drawer.Screen
            name="Sewing"
            component={SewingScreen}
            options={{
              drawerLabel: () => null,
              drawerItemStyle: { display: 'none' },
            }}
          />
          <Drawer.Screen
            name="Landscaping"
            component={LandscapingScreen}
            options={{
              drawerLabel: () => null,
              drawerItemStyle: { display: 'none' },
            }}
          />
          <Drawer.Screen
            name="Life Skills"
            component={LifeSkillsScreen}
            options={{
              drawerLabel: () => null,
              drawerItemStyle: { display: 'none' },
            }}
          />
          <Drawer.Screen
            name="Child Minding"
            component={ChildMindingScreen}
            options={{
              drawerLabel: () => null,
              drawerItemStyle: { display: 'none' },
            }}
          />
          <Drawer.Screen
            name="Cooking"
            component={CookingScreen}
            options={{
              drawerLabel: () => null,
              drawerItemStyle: { display: 'none' },
            }}
          />
          <Drawer.Screen
            name="Garden Maintenance"
            component={GardenMaintenanceScreen}
            options={{
              drawerLabel: () => null,
              drawerItemStyle: { display: 'none' },
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </CourseProvider>
  );
}
