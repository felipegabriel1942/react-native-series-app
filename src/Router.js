import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './pages/LoginScreen';
import SeriesScreen from './pages/SeriesScreen';
import SerieDetailScreen from './pages/SerieDetailScreen';

const AppNavigator = createStackNavigator({
  
  'Main': {
    screen: SeriesScreen
  },
  'SerieDetail': {
    screen: SerieDetailScreen,
    navigationOptions: ({ navigation }) => {
      const { serie } = navigation.state.params;
      
      return {
        title: serie.title
      }
    }
  },  
  'Login': {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Bem vindo!'
    }
  }
}, { 
    defaultNavigationOptions: {
      title: 'Minhas Series',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#6ca2f7',
        borderBottomWidth: 1,
        borderBottomColor: '#c5c5c5'
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 25
      }
    }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
