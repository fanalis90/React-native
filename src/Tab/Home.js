import React from 'react';
import {
    Button,
    Text,
    View
} from 'react-native';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button
                    title="Presensi"
                    onPress={() => this.props.navigation.navigate('Presensi')}
                />
            </View>
        );
    }
}

export default HomeScreen;