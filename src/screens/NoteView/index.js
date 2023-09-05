

import { View, Text, TouchableOpacity, TextInput, } from "react-native";
import { useState, useEffect } from 'react';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';

export function NoteView({ route }) {

    const { item } = route.params

    // const [ notes, setNotes ] = useState([])

    // const { getItem, setItem } = useAsyncStorage('@notes')

    // async function getNotes() {
    //     const res = await getItem()
    //     const notes = res ? JSON.parse(res) : []
    //     setNotes(notes)
    // }

    // useFocusEffect(useCallback(() => {
    //     getNotes()
    // }, []))


    return(
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center", }}
        >
            <View
                style={{ borderWidth: 1, borderRadius: 8, borderColor: 'black', padding: 16 }}
            >
                <Text
                    style={{ fontWeight: "bold", fontSize: 25}}
                >Nota</Text>
                <Text
                    style={{ fontWeight: "700", fontSize: 18}}
                >{item.title}</Text>
                <Text>{item.content}</Text>
            </View>
        </View>

    )
}