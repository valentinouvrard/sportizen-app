// Dependencies
import React from 'react'

// Components
import { Text, View, Image, TextInput, StyleSheet } from 'react-native'
import { withContext } from '../../context'

// Assets
import logo from '../../../assets/logo.png'

@withContext(['network_status'], ['signUpUser'])
class ConnectionView extends React.Component {
    state = {
        username: undefined,
        password: undefined
    }
    componentDidMount() {
        const { actions: { signUpUser } } = this.props
        signUpUser('test@test.fr', 'AntoineNul87')
    }
    render() {
        const { state: {network_status} } = this.props
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.image}/>
                <View style={styles.form}>
                    <TextInput
                        style={styles.text}
                        placeholder="Nom d'utilisateur / Mail"
                        textAlign={'center'}
                        onChangeText={(username) => this.setState({username})}
                    />
                    <TextInput
                        style={styles.text}
                        placeholder='Mot de passe'
                        textAlign={'center'}
                        onChangeText={(password) => this.setState({password})}
                    />
                    <Text>
                        Network status: {(network_status === undefined) ? 
                            'Waiting for network' 
                            : network_status}
                    </Text>
                </View>
            </View>
        )
    }
}

export default ConnectionView
    
// CSS
const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'contain',
        margin: 5,
        marginTop: 200,
        marginBottom: 50
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        flex:3
    },
    text: {
        height: 60,
        fontSize: 20,
        textAlign: 'center',
    }
})