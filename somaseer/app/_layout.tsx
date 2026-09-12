import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';              import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
                                                  import { useColorScheme } from 'react-native';

//export const unstable_settings = {                  anchor: '(tabs)',};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;
  const customTheme = {
	  ...theme,
	  colors: {
		  ...theme.colors,
		  background: '#fff',
	  },
  };

  return (
    <ThemeProvider value={customTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{title:null, headerShown: false }} />
      </Stack>
      <StatusBar style="dark" />
    </ThemeProvider>
  );
}
