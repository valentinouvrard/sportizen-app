/* eslint-disable linebreak-style */
/* eslint-disable semi */
import React from 'react'
import { withContext } from '../../context'
import {View, Image, StyleSheet, Text} from 'react-native'
import Background from './BackgroundProfil'
import Meteo from './meteo'
import { TouchableOpacity } from 'react-native-gesture-handler';
import themeStyle from '../../styles/theme.style';

export default class UserProfilPage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={{flex : 1}}>
                <Meteo/>
                <View style={{marginTop: 5, flex: 1}}>
                    <Background/>
                    <View style={{backgroundColor: '#F1F1F3', flex: 1}}>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <TouchableOpacity style={{...styles.container_img, marginRight: 20}}>
                                <Image style={{width: 40, height: 40}} source={require('../../../assets/userProfil/sunny.png')}></Image>
                            </TouchableOpacity>

                            <View style={{width : 80, height : 80, marginTop: -40,backgroundColor : '#FFFFFF', borderRadius: 40, justifyContent: 'center', alignItems: 'center', borderWidth: 4, borderColor: '#D3D3D3'}}>
                            </View>
                            <TouchableOpacity style={{...styles.container_img, marginLeft: 20}}>
                                <Image style={{width: 40, height: 40}} source={require('../../../assets/userProfil/settings.png')}></Image>
                            </TouchableOpacity>
                        </View>

                        <View style={{justifyContent: 'center', alignItems: 'center', height: 60}}>
                            <Text style={styles.user_mail}> test@free.fr</Text>
                            <Text style={{color: '#bdbdbd', fontSize: 12}}> débutant </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container_profil: {
        marginTop: -40, 
        backgroundColor : '#FFFFFF', 
        borderRadius: 40, 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    container_img: {
        marginTop: -20, 
        justifyContent:'center', 
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20
    },

    user_mail : {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    }
})