import React from 'react'
import {View, Image, StyleSheet, Text, Animated, Easing, Platform} from 'react-native'
import Background from './BackgroundProfil'
import { TouchableOpacity } from 'react-native-gesture-handler'
import UserActivity from './UserActivities'
import ProfileOptions from './profile-options'
import { withContext } from '../../context'

@withContext(['user'],[])
class UserProfilPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            xValue: new Animated.Value(-1000)
        }
    }

    componentDidMount(){
        this._moveAnimation()
    }

    _moveAnimation = () => {
        Animated.timing(this.state.xValue, {
            toValue: 0,
            duration: 1000,
            easing: Easing.linear
        }).start()
    }

    render(){
        return(
            <View style={{flex : 1}}>
                <View style={{marginTop: 5, flex: 1}}>
                    <Background/>
                    <ProfileOptions/>
                    <View style={{backgroundColor: '#F1F1F3', flex: 1}}>

                        <View style={{marginTop: Platform.OS === 'ios' ? -15 : 0,justifyContent: 'center', alignItems: 'center', height: 60}}>
                            <Text style={styles.user_mail}> test@free.fr</Text>
                            <Text style={{color: '#bdbdbd', fontSize: 12}}> Débutant </Text>
                        </View>
                        <Animated.View style={[{marginTop: 15}, {left: this.state.xValue}]}>
                            <View>
                                <UserActivity index={0}/>
                            </View>
                            <View style={{marginTop: 15}}>
                                <UserActivity index={1}/>
                            </View>
                            <View style={{marginTop: 15}}>
                                <UserActivity index={2}/>
                            </View>
                        </Animated.View>
                        <View style={{justifyContent: 'center', flex: 1, justifyContent: 'flex-end', paddingBottom: 30}}>
                            <TouchableOpacity style={styles.button_start} onPress={() => this.props.navigation.navigate('SportSelector')} >
                                <Image style={{width: 32, height: 32}} source={require('../../../assets/userProfil/running_man.png')}></Image>
                                <Text style={styles.button_text_color}> Generer un Itinéraire</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
export default UserProfilPage
const styles = StyleSheet.create({

    container_profil: {
        marginTop: -40, 
        backgroundColor : '#FFFFFF', 
        borderRadius: 40, 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    user_mail : {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    button_start: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#00AEEF',
        borderRadius: 20,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    button_text_color: {
        color: 'white',
        fontSize: 15
    }
})