
import { Feather } from '@expo/vector-icons'

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from '../screens/Home';
import { Note } from '../screens/Note';
import { NoteEdit } from '../screens/NoteEdit';
import { NoteView } from '../screens/NoteView';



const Tabs = createBottomTabNavigator()
// const ProfileStack = createNativeStackNavigator()

// const ProfileStackScreen = () => {
//     return(
//         <ProfileStack.Navigator
//             initialRouteName="Login"
//             screenOptions={{ headerShown: false }}
//         >
//             <ProfileStack.Screen name="Login" component={Login} />
//             <ProfileStack.Screen name="Register" component={Register} />
//         </ProfileStack.Navigator>
//     )
// }

export function AppRoutes() {
    return(
        <Tabs.Navigator 
            screenOptions={{ 
                headerShown: false, 
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: "#343A40",
                },
            }}
        >
            <Tabs.Screen 
                name="Home"
                component={Home}
                options={{ 
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name='file-text'
                            size={25}
                            color={ focused ? '#FFFFFF' : '#C0C0C0' }
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="Note"
                component={Note}
                options={{ 
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name='file-plus'
                            size={25}
                            color={ focused ? '#FFFFFF' : '#C0C0C0' }
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="NoteEdit"
                component={NoteEdit}
                options={{tabBarButton: () => null}}
            />
            <Tabs.Screen 
                name="NoteView"
                component={NoteView}
                options={{tabBarButton: () => null}}
            />

        </Tabs.Navigator>
    )
}