import { View, Text, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const { width, height } = Dimensions.get('window');
const getStarted = () => {
  return (
    <SafeAreaView style={styles.container}>
        {/* bar with back and continue buttons */}
    <View style={styles.NavBar}>

      <TouchableOpacity
    style={{ flexDirection: 'row', alignItems: 'center' }}
    onPress={() => {
      router.replace('/login');
    }}
  >
    <Icon1 name="arrow-back-ios" size={20} color="#008A39" style={{ marginRight: 4 }} />
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
        <Text style={styles.bigText}>Let’s Get You Started</Text>
        <Text style={styles.smallText}>Provide your email address, let’s get you started</Text>
        <View style={styles.inputContainer}>
          <Icon name="email" size={24} color="#888" style={styles.icon} />

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
            // padding: scale(10),
            borderRadius: scale(8),
            marginTop: scale(10),
            width: scale(200),
            alignItems: 'center',
            
            }}
            > <Text style={styles.lightText}>Use Phone Number Instead</Text> </TouchableOpacity>
    </View>

    {/* two bottom buttons and a text */}
    <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => {
              // Navigate to the next screen
                router.replace('/location');  }
            }>
              <Text style={styles.buttonText} >Create an account</Text>
            </TouchableOpacity>
 
 
    
          </View>
        <View style={{ width: scale(300), alignSelf: 'center' }}>
            <View style={styles.dividerContainer}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>or</Text>
                <View style={styles.dividerLine} />
            </View>
        </View>

        {/* Social login buttons */}
        <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Login with Google</Text>
            <Icon name="google" size={22} color="008A39" style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Login with Apple</Text>
            <Icon name="apple" size={22} color="#000" style={styles.socialIcon} />
        </TouchableOpacity>

        <Text style={styles.lightText}> 
            By continuing you’re agreeing to our Terms and Conditions of Services 
        </Text>
        </View>

            


    </SafeAreaView>
  )
}

export default getStarted

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
    paddingHorizontal: scale(20),
    marginTop: scale(40)  ,
    // marginBottom: scale(40),
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
dividerContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginVertical: scale(30),
},
dividerLine: {
  flex: 1,
  height: 1,
  backgroundColor: '#ccc',
},
dividerText: {
  marginHorizontal: 10,
  color: '#888',
  fontSize: scale(14),
},
socialButtonsContainer: {
  width: '100%',
  alignItems: 'center',
},
socialButton: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 15,
  paddingVertical: 10,
  paddingHorizontal: scale(50),
  width: scale(300),
  marginBottom: 12,
},
socialButtonText: {
  fontSize: scale(16),
  color: '#333',
  flex: 1,
},
socialIcon: {
//   marginLeft: 12,
},
})