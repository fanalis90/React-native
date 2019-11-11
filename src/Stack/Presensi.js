import React from 'react';
import {
    Button,
    Text,
    View
} from 'react-native';

class PresensiScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Pilih!</Text>
                <Button
                    title="Absensi"
                    onPress={() => this.props.navigation.navigate('Absensi')}
                />
                <Button
                    title="History"
                    onPress={() => this.props.navigation.navigate('History')}
                />
            </View>
        );
    }
}

export default PresensiScreen;