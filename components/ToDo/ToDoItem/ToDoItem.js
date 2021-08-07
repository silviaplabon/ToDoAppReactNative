import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteToDo, deleteToDoAsync, toggleCompleteAsync } from '../../Redux/Reducer/ToDoReducer';
import { View, CheckBox, TouchableOpacity, StyleSheet } from 'react-native';
import DescriptionTag from '../../EmotionComponents/DescriptionTag';
import Icon from 'react-native-vector-icons/Ionicons';

const TodoItem = (props) => {

	const { _id, title, completed } = props.todoData;
	const dispatch = useDispatch();
	const handleDeleteClick = () => {
		dispatch(deleteToDoAsync({ id: _id }));
	};
	const handleCompleteClick = () => {
		dispatch(toggleCompleteAsync({ id: _id, completed: !completed }))
	}

	return (
		<View style={styles.todoContainer}>
			<View style={styles.todoFlex}>
				{
					props.state==true?
					<CheckBox
					value={completed}
					onValueChange={handleCompleteClick}
					style={styles.checkbox}
				/>:<></>
				}
				
				<DescriptionTag text={title} ></DescriptionTag>
			</View>
			<TouchableOpacity style={{ paddingHorizontal: 20, height: 50, alignSelf: 'flex-end' }} onPress={() => onPress()}>
				<Icon.Button name="ios-trash" size={32} color="#212729" backgroundColor='white'
					onPress={() => handleDeleteClick()}></Icon.Button>
			</TouchableOpacity>

		</View>
	);
};

const styles = StyleSheet.create({
	checkbox: {
		padding: 2,
		height: 20,
		width: 20,
		marginRight:20
	},
	todoFlex: {
		flexDirection: 'row',
		justifyContent:'space-evenly'
	},
	todoContainer: {
		width: '90%',
		height: 60,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.20,
		elevation: 8,
		padding: 10,
		backgroundColor: 'white',
		borderRadius: 10,
		marginLeft: '5%',
		marginTop: 10,
		marginBottom: 3,
		marginRight: '5%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},

})

export default TodoItem;
