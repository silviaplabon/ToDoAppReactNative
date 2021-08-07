import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import styled, { css } from '@emotion/native'
import { useDispatch, useSelector } from 'react-redux';
import { addToDoAsync } from '../../Redux/Reducer/ToDoReducer';
import Container from '../../EmotionComponents/Container';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	addBtn: {
		width: 100,
		height: 40,
		marginTop: 10,
		marginBottom: 10,
		backgroundColor: '#212729',
		borderRadius: 10
	},
	touchableStyle: {
		textAlign: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: '#212729',
		padding: 9,
		margin: 5,
		borderRadius: 20
	},
	addItemText: {
		color: 'white',
		fontSize: 20,
	},
	textInputStyle: {
		height: 50,
		padding: 8,
		margin: 5,
		fontSize: 16,
		backgroundColor:'#fff',
		color:'black'
	}
})


const AddTodoForm = () => {
	const [todoTitle, setTodoTitle] = useState('');
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);

	const submitButtonClick = () => {
		if (todoTitle) {
			dispatch(
				addToDoAsync({
					title: todoTitle,
					completed: false,
					email: auth.email
				})
			);
		}
	};

	return (
		<View >
			<TextInput
				style={styles.textInputStyle}
				onChangeText={title => setTodoTitle(title)}
				value={todoTitle}
				placeholder="ADD TO DO....."
				keyboardType="default"
			/>
			<TouchableOpacity onPress={() => submitButtonClick()} style={styles.touchableStyle}>
				<Icon name="plus"
					color='white'
					size={25}
				/>
				<Text style={styles.addItemText}>Add Item</Text>
			</TouchableOpacity>
		</View>
	);
};

export default AddTodoForm;
