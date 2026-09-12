import  {ScrollView,StyleSheet} from 'react-native';
import {Colors} from '@/constants/colors';


type ThemedViewProps = {
	style?: object,
	children: React.Node
}
export function ThemedView({style,children}:ThemedViewProps){

	return <ScrollView style={[styles.cont,style]} contentContainerStyle={styles.content}>
	{children}
	</ScrollView>
}

const styles = StyleSheet.create({
	cont: {
		flex:1
	},
	content: {
		gap: 10,
		padding: 20,
		paddingTop: 30,
	}
})
