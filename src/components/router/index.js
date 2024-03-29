import React from 'react'
import { createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation'
import CustomMapView from '../map'
import SportSelector from '../sport-selector'
import Meteo from '../userForm/meteo'
import ConnectionView from '../connection'
import SignUpView from '../signup'
import ItinaryView from '../itinary/itinary'
import UserProfilPage from '../userForm/userProfilPage'
import HistoryActivity from '../historyActivity/historyActivity'
import ActivitySumUp from '../activity'

const Router = createStackNavigator({
    ConnectionView: {
        screen: ConnectionView,
        navigationOptions: {
            title: 'Login Page',
            header: null //this will hide the header
        },
    },
    SignUpView: {
        screen: SignUpView,
        navigationOptions: {
            title: 'SignUp Page',
            header: null //this will hide the header
        },
    },
    Meteo: {
        screen: Meteo
    },
    CustomMapView: {
        screen: CustomMapView,
        navigationOptions: {
            title: 'Map',
            header: null //this will hide the header
        },
    },
    ItinaryView: {
        screen: ItinaryView,
        navigationOptions: {
            title: 'Itinary',
        },
    },
    SportSelector: {
        screen: SportSelector,
        navigationOptions: {
            title: 'Sport Selection',
        },
    },
    UserProfilPage: {
        screen: UserProfilPage,
        navigationOptions : {
            title: 'User Profil Page',
            header: null //this will hide the header
        }
    },

    HistoryActivity: {
        screen: HistoryActivity,
        navigationOptions : {
            title: 'Historique',
        }
 
    },
    ActivitySumUp: {
        screen: ActivitySumUp,
        navigationOptions : {
            title: 'Activity SumUp',
            header: null,
        }
    }
})


const Tabs = createAppContainer(Router)
export default Tabs