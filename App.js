import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/Home';
import FirstAidScreen from './screens/FirstAid';
import SewingScreen from './screens/Sewing';
import LandscapingScreen from './screens/Landscaping';
import LifeSkillsScreen from './screens/LifeSkills';
import CalculatorScreen from './screens/Calculator';
import ContactUsScreen from './screens/ContactUs';
import SixMonthSumm from './screens/SixMonthSumm';
import ChildMindingScreen from './screens/ChildMinding';
import CookingScreen from './screens/Cooking';
import GardenMaintenanceScreen from './screens/GardenMaintenance';
import WeekSumm from './screens/WeekSumm';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const ScreenStackNavigator= () => {
  return( 
  <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component= {HomeScreen}/>
        <Stack.Screen name="FirstAidCourse" component= {FirstAidScreen}/>
        <Stack.Screen name="SewingCourse" component={SewingScreen} />
        <Stack.Screen name="LandscapingCourse" component={LandscapingScreen} />
        <Stack.Screen name="LifeSkillsCourse" component={LifeSkillsScreen} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} />
        <Stack.Screen name="Calculator" component={CalculatorScreen} />
        <Stack.Screen name="SixMonthSummary" component={SixMonthSumm} />
        <Stack.Screen name="ChildMinding" component={ChildMindingScreen} />
        <Stack.Screen name="Cooking" component={CookingScreen} />
        <Stack.Screen name="GardenMaintenance" component={GardenMaintenanceScreen} />
        <Stack.Screen name="SixWeekSummary" component={WeekSumm} />
      
      </Stack.Navigator>
  );
};

const DrawerNavigator= () => {
  return( 
<Drawer.Navigator initialRouteName="Home">
<Drawer.Screen name="Home" component={HomeScreen} options={{title: 'Home', headerTitle:'',
          headerStyle: {
            backgroundColor: '#313b74',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
      <Drawer.Screen name="FirstAid" component={FirstAidScreen} options={{title: 'First Aid', headerTitle:'', headerStyle: {
            backgroundColor: '#313b74',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
      <Drawer.Screen name="Sewing" component={SewingScreen} options={{title: 'Sewing', headerTitle:'',  headerStyle: {
            backgroundColor: '#313b74',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
      <Drawer.Screen name="Landscaping" component={LandscapingScreen} options={{title: 'Landscaping', headerTitle:'', headerStyle: {
            backgroundColor: '#313b74',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
      <Drawer.Screen name="LifeSkills" component={LifeSkillsScreen} options={{title: 'Life Skills', headerTitle:'', headerStyle: {
            backgroundColor: '#313b74',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
          <Drawer.Screen name="MonthCourses" component={SixMonthSumm} options={{title: 'Six Month Courses', headerTitle:'', headerStyle: {
            backgroundColor: '#313b74',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
        <Drawer.Screen name="ContactUs" component={ContactUsScreen} options={{title: 'Contact Us', headerTitle:'', headerStyle: {
            backgroundColor: '#313b74',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
        <Drawer.Screen name="Calculator" component={CalculatorScreen} options={{title: 'Fee Calculator', headerTitle:'', headerStyle: {
            backgroundColor: '#313b74',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
        <Drawer.Screen name="ChildMinding" component={ChildMindingScreen} options={{title: 'Child Minding', headerTitle:'', headerStyle: {
            backgroundColor: '#313b74',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
        <Drawer.Screen name="Cooking" component={CookingScreen} options={{title: 'Cooking', headerTitle:'', headerStyle: {
            backgroundColor: '#313b74',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
        <Drawer.Screen name="GardenMaintenance" component={GardenMaintenanceScreen} options={{title: 'Garden Maintenance', headerTitle:'', headerStyle: {
            backgroundColor: '#313b74',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
        <Drawer.Screen name="WeekSummary" component={WeekSumm} options={{title: 'Six Week Courses', headerTitle:'', headerStyle: {
            backgroundColor: '#313b74',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>

    </Drawer.Navigator>
  );
};


const App= () => {
  return(
    
    <NavigationContainer>

      <DrawerNavigator/>
    </NavigationContainer>
  );
};

export default App;