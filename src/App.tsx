import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Routes from './routes'
import { AuthProvider } from './contexts/auth';

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </NavigationContainer>
    )
}

export default App;