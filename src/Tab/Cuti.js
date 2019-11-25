import React, { Component } from 'react';
import {
    Button,
    Text,
    StyleSheet,
    View,
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Icon } from 'native-base';


const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 8,
        marginBottom: 8,
    },
    controw: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-around',

    },
    contver: {
        justifyContent: 'space-around',
    },
    padbot: {
        paddingTop: 16,
        paddingBottom: 8,
    },
})

class CutiScreen extends React.Component {

    // render() {
    //     return (


    //         // <div>
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <Text>Form Cuti!</Text>
    //             <Button
    //                 title="Ajukan Cuti"
    //                 onPress={() => this.props.navigation.navigate('Formcuti')}
    //             />
    //         </View>
    //         //     </div>
    //         // </div>
    //     );
    // }
    render() {
        return (
            // <div id="parent">
            //     <div>
            <Container  >
                <Content style={{ paddingLeft: 8, paddingRight: 8, }} >
                    <Card style={style.container}>

                        <Text style={{ fontSize: 20, alignSelf: 'center' }}>
                            Cuti Tahunan
                        </Text>
                        <CardItem >

                            <View style={style.controw}  >

                                <Text>Sisa</Text>
                                <Text>balance</Text>
                                <Text>digunakan</Text>
                            </View>

                        </CardItem>
                        <CardItem>
                            <View style={style.controw}>
                                <Text>0</Text>
                                <Text>6</Text>
                                <Text>4</Text>

                            </View>
                        </CardItem>

                    </Card>
                    <View style={style.contver}>
                        <Button
                            color='green'
                            onPress={() => this.props.navigation.navigate('Formcuti')}
                            title="ajukan cuti"
                        >
                        </Button>
                        <Text style={style.padbot}>
                            Aktivitas Cuti
                    </Text>
                        <Card >
                            <CardItem >
                                <Body style={{ alignItems: 'center' }}>
                                    <Icon name="calendar" style={{ fontSize: 80, color: 'blue', }} />
                                    <Text style={{ fontSize: 30 }}>Cuti</Text>
                                    <Text style={{ fontSize: 15, fontStyle: 'normal' }}>Aktivitas cuti kamu ditampilkan disini</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                </Content>
            </Container >
            // {/* </div> */ }
        );
    }
}

export default CutiScreen;