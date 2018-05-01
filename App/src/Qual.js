import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import config from "./config";
import { PostFeed } from './components/container'

class Qual extends Component {

	

	render(){

		return(

			<View style={{ flex: 1, width: 100 + "%", height: 100 + "%"}}>
				<View style={styles.tempQ}>
					<Image
					style={{alignItems:"center", width:100, height:45, marginTop:18, marginBottom:3}}
					source={config.images.qualIcon}/>
				</View>
				<PostFeed />
			</View>

		);
	
	}
}

const styles = StyleSheet.create({
	tempQ: { 
			width: 100 + "%", 
			height: 65,
			backgroundColor: "rgb(153,220,230)",
			borderBottomColor: "rgb(233,233,233)",
			borderBottomWidth: StyleSheet.hairlineWidth,
			justifyContent: "center",
			alignItems: "center"
	}

});

export default Qual;