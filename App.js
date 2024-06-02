import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'react-native';
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

const Drawer = createDrawerNavigator();

function LogoImage() {
  return (
      <Image
        style={{ left: "209%", width: 50, height: 50 }}
        source={require('./assets/companyLogo.png')}
      />
  );
}


const DrawerNavigator= () => {
  return( 
<Drawer.Navigator initialRouteName="Home">
<Drawer.Screen name="Home" component={HomeScreen} options={{title: 'Home', headerTitle: ()=><LogoImage/>,
          headerStyle: {
            backgroundColor: '#313b74',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
          <Drawer.Screen name="MonthCourses" component={SixMonthSumm} options={{title: 'Six Month Courses', headerTitle:()=><LogoImage/>, headerStyle: {
            backgroundColor: '#313b74',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
          <Drawer.Screen name="WeekSummary" component={WeekSumm} options={{title: 'Six Week Courses', headerTitle:()=><LogoImage/>, headerStyle: {
            backgroundColor: '#313b74',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
          <Drawer.Screen name="Cart" component={CalculatorScreen} options={{title: 'Cart', headerTitle:()=><LogoImage/>, headerStyle: {
            backgroundColor: '#313b74',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
        <Drawer.Screen name="Contact Us" component={ContactUsScreen} options={{title: 'Contact Us', headerTitle:()=><LogoImage/>, headerStyle: {
            backgroundColor: '#313b74',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
          <Drawer.Screen name="Child Minding" component={ChildMindingScreen} options={{drawerLabel:()=>null, drawerItemStyle:{display:'none'}, headerTitle:()=><LogoImage/>, headerStyle: {
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