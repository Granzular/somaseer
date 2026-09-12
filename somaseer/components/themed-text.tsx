import {Text,StyleSheet} from 'react-native';
import {Colors} from '@/constants/colors.ts';

type ThemedTextProps = {
	type: string,
	bold?: bool,
	children: React.Node
}

export function ThemedText({type,bold,children}:ThemedTextProps){

	return <Text style={[styles[type],bold && styles["bold"]]}>{children}</Text>
}

const styles = StyleSheet.create({

	h1: {
		color: Colors.primary,
		fontSize: 32,
		fontWeight: "400"
	},
	h2: {
		color: Colors.primary,
		fontSize: 24,
		fontWeight: "300"
	},
	bold: {
		fontWeight: "bold"
	}, 
	p: {
		color: "#222",
		fontSize: 18,
		fontWeight: "300",
		lineHeight: 24
	},
	psm: {
		color: "#777",
		fontSize: 14,
		fontWeight: "400"
	}
}
)
