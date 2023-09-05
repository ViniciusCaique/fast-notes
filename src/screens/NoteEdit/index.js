
import { View, Text, TouchableOpacity, TextInput, } from "react-native";
import { useState, useEffect } from 'react';

import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';




export function NoteEdit({ route }) {

    const { item } = route.params

    const [ note, setNote ] = useState([item])

    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')
    const [ isEdit, setIsEdit ] = useState(false)

    const { getItem, setItem } = useAsyncStorage('@notes')

    async function updateNote() {
        try {
            const res = await getItem()
            let notes = []
            if(res !== null) notes = JSON.parse(res)
            const updateNote = notes.filter(n => {
                if(n.id === note.id ) {
                    n.title = title,
                    n.content = content
                }
                return n;
            })

            setNote(updateNote)
            await setItem(JSON.stringify(updateNote))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        updateNote()
    }, [])
 
    return(
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center", width: "100%" }}
        >
            <View
                style={{ flex: 1, justifyContent: "center", padding: 20 }}
            >
                <Text>Editar Nota</Text>
                <Text>Titulo</Text>
                <TextInput
                    style={{ width: 200, borderWidth: 1, borderStyle: "solid", borderColor: '#000000', borderRadius: 5 , borderRadius: 10, padding: 4 }}
                    placeholder='Titulo'
                    onChangeText={setTitle}
                />
                <Text>Conteúdo</Text>
                <TextInput 
                    style={{ width: 200, borderWidth: 1, borderStyle: "solid", borderColor: '#000000', borderRadius: 10, marginBottom: 5 ,padding: 4 }}
                    placeholder='Conteudo'
                    onChangeText={setContent}
                />
                <TouchableOpacity
                    style={{ borderWidth: 2, borderRadius: 6, borderColor: 'black', padding: 4}}
                    onPress={() => updateNote()}
                >
                <Text> Salvar </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}