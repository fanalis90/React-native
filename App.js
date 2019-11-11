import React from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';
// import Ionicons from 'react-native-ionicons';
import {
  createAppContainer
} from 'react-navigation';
import {
  createBottomTabNavigator
} from 'react-navigation-tabs';
import {
  createStackNavigator
} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from "./src/Tab/Home"
import CutiScreen from "./src/Tab/Cuti"

import FormcutiScreen from "./src/Stack/FormCuti"
import PresensiScreen from "./src/Stack/Presensi"
import AbsensiScreen from "./src/Stack/Absensi"
import HistoryScreen from "./src/Stack/History"

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Details!</Text>
//       </View>
//     );
//   }
// }

const PresensiStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Presensi: {
    screen: PresensiScreen,
    navigationOptions: ({
      title: 'Presensi',
    }),
  },
  Absensi: {
    screen: AbsensiScreen,
    navigationOptions: ({
      title: 'Absensi',
    }),
  },
  History: {
    screen: HistoryScreen,
    navigationOptions: ({
      title: 'History',
    }),
  },
});

const CutiStack = createStackNavigator({
  Cuti: {
    screen: CutiScreen,

  },
  Formcuti: {
    screen: FormcutiScreen,
    navigationOptions: ({
      title: 'Form Cuti',
    }),
  },

});

PresensiStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

CutiStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};
// const HomeStack = createStackNavigator({
//   Home: { screen: HomeScreen },
//   Details: { screen: DetailsScreen },
// });

// const SettingsStack = createStackNavigator({
//   Settings: { screen: SettingsScreen },
//   Details: { screen: DetailsScreen },
// });
const Tabs = createAppContainer(createBottomTabNavigator(
  {
    Home: PresensiStack,
    Cuti: CutiStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home`;
        } else if (routeName === 'Cuti') {
          iconName = `calendar`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons =  /n ${focused ? '' : '-outline'}
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
  }
));


export default Tabs;