import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './pages/LoginScreen';
import SeriesScreen from './pages/SeriesScreen';
import SerieDetailScreen from './pages/SerieDetailScreen';
import SeriesFormScreen from './pages/SeriesFormScreen';

const AppNavigator = createStackNavigator({
  
  'Login': {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Bem vindo!'
    }
  },
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
  'SerieForm': {
    screen: SeriesFormScreen,
    navigationOptions: {
      title: 'Nova série!'
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
