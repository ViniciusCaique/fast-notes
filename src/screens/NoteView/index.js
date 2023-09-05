

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
        <View>
            <Text>Nota</Text>
            <Text>{item.title}</Text>
            <Text>{item.content}</Text>
        </View>

    )
}