import { Provider } from 'react-redux';
import { store } from './src/app/store';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/presentation/navigation/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};
