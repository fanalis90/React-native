import React, { Component } from 'react';
import {
    Button,
    Text,
    StyleSheet,
    View,
    TextInput,
    Platform,
    Image,
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Icon, Left, Right } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';

class FormcutiScreen extends Component {
    state = {
        date: new Date('2020-06-12T14:42:42'),
        mode: 'date',
        show: false,
    }

    setDate = (event, date) => {
        date = date || this.state.date;

        this.setState({
            show: Platform.OS === 'ios' ? true : false,
            date,
        });
    }

    show = mode => {
        this.setState({
            show: true,
            mode,
        });
    }

    datepicker = () => {
        this.show('date');
    }

    timepicker = () => {
        this.show('time');
    }

    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
    }
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

    render() {
        const { show, date, mode } = this.state;
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem bordered>

                            <Body>
                                <Text note>LeaveType</Text>
                                <Text>Cuti Tahunan</Text>
                            </Body>

                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>LeaveDate</Text>
                                {/* <RNDateTimePicker
                                    defaultDate={new Date(2018, 4, 4)}
                                    minimumDate={new Date(2018, 1, 1)}
                                    maximumDate={new Date(2200, 12, 31)}
                                    locale={"en"}
                                    timeZoneOffsetInMinutes={undefined}
                                    modalTransparent={false}
                                    animationType={"fade"}
                                    androidMode={"default"}
                                    placeHolderText="Select date"
                                    textStyle={{ color: "green" }}
                                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                                    onDateChange={this.setDate}
                                    disabled={false}
                                /> */}
                                {/* <View>
                                    <View>
                                        <Button onPress={this.datepicker} title="Show date picker!" />
                                    </View>
                                    <View>
                                        <Button onPress={this.timepicker} title="Show time picker!" />
                                    </View>
                                    {show && <DateTimePicker
                                        value={date}
                                        mode={mode}
                                        is24Hour={true}
                                        display="default"
                                        onChange={this.setDate} />
                                    }
                                </View> */}
                                <Text>
                                    Date: {this.state.chosenDate.toString().substr(0, 15)}
                                </Text>
                            </Body>

                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem bordered>
                            <Body>
                                <Text>Ur Number</Text>
                                <TextInput
                                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                    onChangeText={text => onChangeText("text")}
                                    value={"value"}
                                />
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>Lampiran</Text>
                                <Image source={require('../Images/example.jpg')} style={{ height: 150, width: 150, flex: 1 }} />
                            </Body>

                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <TextInput
                                    style={{ height: 40, borderColor: 'gray', borderWidth: 0 }}
                                    onChangeText={text => onChangeText("text")}
                                    value={"value"}
                                />
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Text>atribut detail can't be greater than 255 characters</Text>
                        </CardItem>
                        <CardItem footer bordered>
                            <Text>please submit the real doctor notes to the admin to be proccessed. /n
                                the attachment format should be JPG/PNG and not greater than 2 MB.
                            </Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        height: 50,
        width: 50,
        backgroundColor: '#a76e69',
        margin: 10,
    }
})

// const [value, onChangeText] = React.useState('number')

export default FormcutiScreen;
// import React from 'react';
// import {
//     Button,
//     Text,
//     View
// } from 'react-native';

// class FormcutiScreen extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <Text>ini halamn Form Cuti!</Text>
//                 <Button
//                     title="Form cuti"
//                     onPress={() => this.props.navigation.navigate('Formcuti')}
//                 />
//             </View>
//         );
//     }
// }

// export default FormcutiScreen;