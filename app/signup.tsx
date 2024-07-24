import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'

const Page = () => {
    const [countryCode, setCountryCode] = useState('+229');
    const [phoneNumber, setPhoneNumber] = useState('');
    const onSignup = async () => { }
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding' keyboardVerticalOffset={80}>
            <View style={defaultStyles.container}>
                <Text style={defaultStyles.header}>Let's get started</Text>
                <Text style={defaultStyles.descriptionText}>
                    Entry your phone number. We will send you a confirmation code there
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={Colors.gray}
                        placeholder='Countru Code'
                        value={countryCode}
                    />
                    <TextInput
                        style={[styles.input, { flex: 1 }]}
                        placeholder='Mobile Number'
                        placeholderTextColor={Colors.gray}
                        keyboardType='numeric'
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                </View>
                <Link href={'/login'} replace asChild>
                    <TouchableOpacity>
                        <Text style={defaultStyles.pillButton}>Already have an account? Log in</Text>
                    </TouchableOpacity>
                </Link>
                <View style={{ flex: 1 }} />

                <TouchableOpacity
                    onPress={onSignup}
                    style={[defaultStyles.pillButton,
                    phoneNumber !== '' ? styles.enabled : styles.desabled,
                    { marginTop: 20}]}>
                    <Text style={[defaultStyles.buttonText]}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 40,
        flexDirection: "row",
    },
    input: {
        backgroundColor: Colors.lightGray,
        padding: 20,
        borderRadius: 16,
        fontSize: 20,
        marginRight: 10,
    },
    enabled: {
        backgroundColor: Colors.primary

    },
    desabled: {
        backgroundColor: Colors.primaryMuted

    }
})

export default Page