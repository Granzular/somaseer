import {StyleSheet,Pressable,Text} from "react-native";
import {Colors} from "@/constants/colors";

type BtnProps = {
	onPress?: ()=>void,
	variant: string,
	disabled?: bool,
	children: React.Node
}

export  function Btn({onPress,variant,disabled,children}:BtnProps){
	return (<Pressable style={({pressed})=>[styles.cont,styles[variant], pressed && styles[`${variant}Pressed`],disabled && styles['disabled']]} onPress={!disabled ?onPress : ()=>console.log("disabled")}>
	<Text style={[styles.font,styles[`${variant}Font`],disabled && styles["priFont"]]}>{children}</Text>	
	</Pressable>)
}

const styles = StyleSheet.create({
	cont: {
		borderRadius: 20,
		paddingHorizontal: 12,
		paddingVertical: 12,
		minWidth: 80,
		alignItems: 'center'
	},
	font: {
		fontSize: 16,
		fontWeight: '500'
	},
	pri:{
		backgroundColor: Colors.button.primaryBg
	},
	priFont: {
		color:  Colors.button.primaryText

	},
	priPressed:{
		backgroundColor: Colors.button.primaryPressed
	},
	sec:{
		backgroundColor: Colors.button.secondaryBg
	},
	secFont:{
		color: Colors.button.secondaryText
	},
	secPressed:{
		backgroundColor: Colors.button.secondaryPressed
	},
	ter:{
		backgroundColor: Colors.background,
		borderWidth: 1,
		borderColor: Colors.primary
	},
	terFont:{
		color: Colors.primary
	},
	terPressed:{
		backgroundColor: Colors.backgroundAlt
	},
	disabled: {
		backgroundColor: "#aaa",
	}
})
