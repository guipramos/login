import React, {useContext} from "react";
import { View, StyleSheet, Button } from "react-native";
import AuthContext from "../../contexts/auth";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

const Dashboard: React.FC = () => {    
    const { signOut } = useContext(AuthContext);

    function handleSignOut() {
        signOut();
    }
    
    return (
        <View style={styles.container}>
            <Button title="Sign out" onPress={handleSignOut} />
        </View>
    );
}

export default Dashboard