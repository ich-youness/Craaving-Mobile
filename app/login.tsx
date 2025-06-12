
import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from '@expo-google-fonts/edu-nsw-act-foundation/useFonts';
import { EduNSWACTFoundation_400Regular } from '@expo-google-fonts/edu-nsw-act-foundation/400Regular';
import { EduNSWACTFoundation_500Medium } from '@expo-google-fonts/edu-nsw-act-foundation/500Medium';
import { EduNSWACTFoundation_600SemiBold } from '@expo-google-fonts/edu-nsw-act-foundation/600SemiBold';
import { EduNSWACTFoundation_700Bold } from '@expo-google-fonts/edu-nsw-act-foundation/700Bold';



const login = () => {
  return (
    <View style= {[  styles.view ]}>
      <Text style={[styles.Content, styles.font ]}>login</Text>
      <Link style={styles.font } href={"/"}>      Go to Home index      </Link>
    </View>
  )
}

const styles =  StyleSheet.create({
  Content: {
    fontSize: 30,
    // fontWeight: 'bold',
    fontFamily: 'EduNSWACTFoundation_700Bold',
    color: '#000',
    marginBottom: 20,
  },
  font: {
    fontFamily: 'EduNSWACTFoundation_400Regular',
  },
  view:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})





export default login