import React from 'react';
import {
    Button,
    Text,
    View
} from 'react-native';

class CutiScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Form Cuti!</Text>
                <Button
                    title="Ajukan Cuti"
                    onPress={() => this.props.navigation.navigate('Formcuti')}
                />
            </View>
        );
    }
}

export default CutiScreen;