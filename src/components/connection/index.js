import React from 'react'
import { View, Image, TextInput, StyleSheet, KeyboardAvoidingView} from 'react-native'
import logo from '../../../assets/logo.png'
import themeStyle from '../../styles/theme.style'
import DefaultButton from './button'


class ConnectionView extends React.Component {
    state = {
        username: undefined,
        password: undefined
    }
    
    render() {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView style={{flex : 1}} enabled >
                    <View style={styles.divider_img}>
                        <Image source={logo} style={styles.image}/>
                    </View>

                    <View style={styles.form}>                
                        <View style={[styles.divider, styles.simple_margin]}>
                            <TextInput
                                style={styles.text}
                                maxLength={13}
                                placeholder="Nom d'utilisateur / Mail"
                                textAlign={'left'}
                                scrollEnabled={true}
                                onChangeText={(username) => this.setState({username})}
                            />
                        </View>
                        <View style={[styles.divider, styles.simple_margin]}>
                            <TextInput
                                style={styles.text}
                                placeholder='Mot de passe'
                                textAlign={'left'}
                                onChangeText={(password) => this.setState({password})}
                            />
                        </View>
                        <DefaultButton button_text='Connect'/>
                    </View>
                </KeyboardAvoidingView>

            </View>
        )
    }
}

export default ConnectionView
    
// CSS
const styles = StyleSheet.create({
    divider_img: {
        flex: 1,
        margin: 5,
        marginTop: 150,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    form: {
        flex:3
    },
    color: {
        backgroundColor: '#000'
    },

    simple_margin: {
        marginBottom: 5
    },

    text: {
        margin: 20,
        height: 30,
        fontSize: 15,
        borderBottomWidth: 1,
        borderBottomColor:'#D3D3D3'    },

    divider: {
        backgroundColor: '#EFEFEF',
        alignItems:'center',
        justifyContent: 'center',
        height: 50,
        margin: 15
    },

    ButtonView : {
        marginTop: 10,
        alignItems: 'center',
        width: 100,
        backgroundColor: '#000'
    }
})