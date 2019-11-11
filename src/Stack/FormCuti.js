import React from 'react';
import {
    Button,
    Text,
    View
} from 'react-native';

class FormcutiScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>ini halamn Form Cuti!</Text>
                <Button
                    title="Form cuti"
                    onPress={() => this.props.navigation.navigate('Formcuti')}
                />
            </View>
        );
    }
}

export default FormcutiScreen;