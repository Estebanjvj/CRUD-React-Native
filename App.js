import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import IndexScreen from './src/screen/indexScreen';
import ShowScreen from './src/screen/ShowScreen';
import CreateScreen from './src/screen/CreateScreen';
import EditScreen from './src/screen/EditScreen';
import { Provider } from './src/context/BlogContest';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen
  }, 
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs'
  }
});

const App = createAppContainer(navigator);

export default () => {
  return (<Provider>
      <App />
    </Provider>);
}