import { View, Text, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';


const { width, height } = Dimensions.get('window');

const GetStarted = () => {

     const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (timer === 0) {
      setTimer(60);
    }
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : prev));
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);
  return (
    <SafeAreaView style={styles.container}>
        {/* bar with back and continue buttons */}
    <View style={styles.NavBar}>

      <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center' }}
          onPress={() => {
            router.replace('/location');
          }}
        >
          <Icon name="arrow-back-ios" size={20} color="#008A39" style={{ marginRight: 4 }} />
          <Text style={{ color: '#008A39', fontSize: scale(16), fontWeight: '500' }}>Go Back</Text>
        </TouchableOpacity>
      {/* <TouchableOpacity>
        <Text  onPress={() => {
          // Navigate to the next screen
          router.replace('/login');
        }} style={{ color:'#008A39', fontSize: scale(16), fontWeight:400}}> Continue</Text>
      </TouchableOpacity> */}
{/* logo of the app */}
    </View>
    
      <View style={styles.Logo}>
        <Image
                        source={require('../assets/images/logo2.png')}
                        style={{ width: scale(33.65), height: scale(33.65) }}
                        resizeMode="contain" 
        />
        <Text style={{ fontSize: scale(24), fontWeight: '500', color:'#008A39' }}>Craaving</Text>  

      </View>
    <View style={styles.Text}>  
        <Text style={styles.bigText}>Let’s Get You Verified!</Text>
        <Text style={styles.smallText}>Kindly check your mail, a verification OTP has been sent to you!</Text>
        <View style={styles.inputContainer}>
          <Icon name="mail" size={24} color="#888" style={styles.icon} />

          <TextInput
          style={styles.input}
          placeholder="Email address"
          placeholderTextColor="#888"
          />
        </View>



        <TouchableOpacity
            // onPress={() => {
            // // Navigate to the next screen
            // router.replace('/login');
            // }}
            style={{
            backgroundColor: '#none',
            padding: scale(10),
            borderRadius: scale(8),
            marginTop: scale(10),
            width: scale(200),
            alignItems: 'center',
            
            }}
            > 
           <Text style={[styles.lightText, { color: '#00672B' }]}>
      Resend Link ({timer})
    </Text>
            
            </TouchableOpacity>
    </View>

    {/* two bottom buttons and a text */}
    <View style={styles.buttonContainer} >
            <TouchableOpacity style={styles.button}  onPress={() => {
              // Navigate to the next screen
                router.replace('/(tabs)/home');  }
            }>
              <Text style={styles.buttonText} >Continue</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={[styles.button, styles.outlined]} onPress={() => {
              // Navigate to the next screen
              router.replace('/setupProfile');
            }
            }>
              <Text style={[styles.buttonText, { color: '#00ac47' }]} > Skip and do it later! </Text>
            </TouchableOpacity> */}
            
    
          </View>
    


    </SafeAreaView>
  )
}

export default GetStarted

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // input: {
  //   height: scale(40),
  //   width: scale(300),
  //   borderColor: '#ccc',
  //   borderWidth: 1,
  //   borderRadius: 8,
  //   paddingHorizontal: 10,
  //   marginTop: 10,
  // },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginTop: 10,
        height: scale(40),
        width: scale(300),
  },
  icon: {
    marginRight: 8,
  },
    input: {
    flex: 1,
    height: '100%',
  },
   buttonContainer: {
    flexDirection: 'column',
    
    paddingHorizontal: scale(20),
    marginTop: scale(80),
    marginBottom: scale(40),
  },
  button: {
    backgroundColor: '#00ac47',
    paddingVertical: 9,
    borderRadius: 27,
    marginBottom: 15,
    alignItems: 'center',
  },
  outlined: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#00ac47',
  },
  buttonText: {
    // fontFamily: 'EduNSWACTFoundation_700Bold',
    fontFamily: 'InterTight_400Regular',
    color: '#fff',
    
    fontSize: scale(17),
    
  },
  NavBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
    backgroundColor: 'none',
    marginTop: scale(10),
    
    
  },
  Logo:{
    flexDirection:'row',
    justifyContent: 'center',
    // alignContent: 'center',
    marginVertical: scale(40),
  },
  Text: {
    flexDirection: 'column',
    alignItems:'center',
    // justifyContent:'center',
    // width: scale(220),
    marginHorizontal:scale(10)   ,  
  },
  bigText: {
    fontSize: scale(24),
    fontWeight: '500',
    color:'#008A39',
    marginBottom: scale(10),
    textAlign: 'center',
  },
  smallText:{
    fontSize: scale(16),
    color: '#666',
    textAlign: 'center',
    marginBottom: scale(20),
  },
  lightText: {
    fontSize: scale(12),
    color: '#797979d8',
    textAlign: 'center',
    fontFamily: 'InterTight_400Regular',
    marginTop: 0,
    width: scale(300),
  },

})