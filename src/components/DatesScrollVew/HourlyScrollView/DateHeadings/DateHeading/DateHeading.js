// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const dateHeading = props => {
	const eventDot = props.hasEvent ? (
		<Text style={styles.eventDot}>.</Text>
	) : null;

	return (
		<View style={styles.container}>
			<Text style={styles.dayText}>{props.day}</Text>
			<Text style={styles.dateText}>{props.date}</Text>
			{eventDot}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		height: '100%'
	},
	dayText: {
		color: 'white',
		fontSize: 12
	},
	dateText: {
		color: 'white',
		fontSize: 20
	},
	eventDot: {
		color: 'white',
		fontSize: 35,
		marginTop: -30
	}
});

export default dateHeading;