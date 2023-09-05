

import { useCallback, useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { Feather } from '@expo/vector-icons'
import { useFocusEffect } from "@react-navigation/native";


export function Home({ navigation }) {

    const [ notes, setNotes ] = useState([])

    const { getItem, setItem, } = useAsyncStorage('@notes')

    async function getNotes() {
        const res = await getItem()
        const notes = res ? JSON.parse(res) : []
        setNotes(notes)
    }

    async function removeNotes(id) {
        const res = await getItem()
        const previousData = res ? JSON.parse(res) : []

        const data = previousData.filter((item) => item.id !== id)
        setItem(JSON.stringify(data))
        setNotes(data)
    }
 
    useFocusEffect(useCallback(() => {
        getNotes()
    }, []))

    // useEffect(() => {
    //     getNotes()
    // }, [notes])

    return(
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "space-between", width: "100%", padding: 20 }}
        >
            <Text
                style={{ fontSize: 25, fontWeight: "bold" }}
            >Notas</Text>
            <FlatList
                style={{ flex: 1, width: '100%', padding: 16,  }}
                data={notes}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View
                        style={{ flex: 1, borderStyle:"solid", borderWidth: 2, borderRadius: 8, padding: 10, margin: 5, }}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.navigate('NoteView', { item })}
                        >
                            <Text
                                style={{ fontWeight: "600", fontSize: 20 }}
                            >{item.title}</Text>
                            <Text>{item.content}</Text>

                            <View
                                style={{ flex: 1, }}
                            >
                                <TouchableOpacity>
                                    <Feather 
                                        name='edit'
                                        size={25}
                                        onPress={() => navigation.navigate('NoteEdit', { item })}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Feather 
                                        name='trash-2'
                                        size={25}
                                        onPress={() => removeNotes(item.id)}
                                    />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}