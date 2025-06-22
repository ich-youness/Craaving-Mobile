import { Tabs } from 'expo-router';
import { Chrome as Home, MessageSquare, Pizza, Rss, Search, Send, Settings, User } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { scale } from 'react-native-size-matters';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textSecondary,
        tabBarStyle: {
          backgroundColor: Colors.white,
          borderTopColor: Colors.borderLight,
          borderTopWidth: 1,
          height: scale(60),
          paddingBottom: scale(8),
          paddingTop: scale(8),
          // marginBottom: scale(15), instead of marginBottom, hide the phone's buttons(home, back...)
          
        },
        tabBarLabelStyle: {
          fontSize: scale(12),
          fontFamily: Fonts.inter.medium,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Food',
          tabBarIcon: ({ size, color }) => (
            // <Home size={size} color={color} strokeWidth={2} />
            <Pizza size={size} color={color} strokeWidth={2} />
          ),
        }}
      />
           <Tabs.Screen
            name="search"
            options={{
              title: 'Search',
              tabBarIcon: ({ size, color }) => (
                // <Home  />
                <Search size={size} color={color} strokeWidth={2} />
              ),
            }}
          />
      <Tabs.Screen
        name="feed"
        options={{
          title: 'feed',
          tabBarIcon: ({ size, color }) => (
            <Rss size={size} color={color} strokeWidth={2} />
          ),
        }}
      />

      <Tabs.Screen
        name="message"
        options={{
          title: 'Message',
          tabBarIcon: ({ size, color }) => (
            <MessageSquare  size={size} color={color} strokeWidth={2} />
          ),
        }}
      />
      <Tabs.Screen
        name="request"
        options={{
          title: 'Request',
          tabBarIcon: ({ size, color }) => (
            <Send  size={size} color={color} strokeWidth={2} />
          ),
        }}
        />
 

    </Tabs>

  );
}