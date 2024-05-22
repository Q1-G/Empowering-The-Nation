import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SixMonthCourses from './SixMonthCourses';
import ContactUs from './ContactUs';
import Calculator from './Calculator';
import { Image, View } from 'react-native';

const Drawer = createDrawerNavigator();

const CustomHeader = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Image
        style={{ width: 90, height: 90, position: 'absolute', left: 190 }}
        source={require('./Assets/companyLogo.png')}
        resizeMode="contain"
      />
    </View>
  );
}

export default function App() {
  return (
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
        <Drawer.Screen name="6 Month Courses" component={SixMonthCourses} />
        <Drawer.Screen name="Contact Us" component={ContactUs} />
        <Drawer.Screen name="Calculator" component={Calculator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
