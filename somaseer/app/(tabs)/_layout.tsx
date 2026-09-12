import { Tabs } from 'expo-router';
import React from 'react';                        
import { useColorScheme } from 'react-native';    
import {Colors} from '@/constants/colors';
import {IconSymbol} from '@/components/ui/icon-symbol';
import Header from '@/components/header'

export default function TabLayout() {
  const colorScheme = useColorScheme();                                                               
  return (
	  <>
	  <Header/>
    <Tabs                                               
    screenOptions={{
        tabBarActiveTintColor: Colors.secondary,
	tabBarInactiveTintColor: Colors.primary,
        headerShown: false,
      }}>
      <Tabs.Screen                                        name="index"
        options={{
          title: '',
	  tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />
        }}
      />
      <Tabs.Screen                                        name="health-check"
        options={{                                                   title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="waveform.path.ecg" color={color} />                        }}
      />
      <Tabs.Screen                                        
      name="monitoring-dashboard"                         
      options={{    
	      title: '',
	      tabBarIcon: ({ color }) => <IconSymbol size={28} name="square.grid.2x2.fill" color={color} />                        }}                                                                />
    </Tabs>
    </>
  );
}
