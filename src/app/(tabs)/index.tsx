import { View,StyleSheet } from "react-native";
import {Btn} from "@/components/themed-btn";
import {ThemedText} from '@/components/themed-text';
import {ThemedView} from '@/components/themed-view';
import {router} from 'expo-router';

export default function Index() {
  return (
    <ThemedView>
      <ThemedText type="p">
      Know how you're doing.
Help catch outbreaks before they spread.
Somaseer is your personal health check-in. In aggregate and de-identified form, it also becomes a real-time signal for public health specialists watching for unusual patterns across a region.
</ThemedText>

      <Btn variant="sec" onPress={()=>router.push('/health-check')}>Start Health Check</Btn>
      <Btn variant="pri" onPress={()=>router.push('/monitoring-dashboard')}>Explore Monitoring Dashboard</Btn>
    </ThemedView>
  );
}
 
