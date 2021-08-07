import React, { useEffect, useState } from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getToDoAsync } from '../../Redux/Reducer/ToDoReducer';
import { FlatList } from 'react-native';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const TodoList = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos);
	const auths = useSelector((state) => state.auth);
	useEffect(() => {
		dispatch(getToDoAsync({email:auths.email}))
	}, [todos || dispatch])

	return (
		<FlatList style={styles.cardContainer}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{
				marginTop: 10,
				paddingBottom: 50,
			}}
			keyExtractor={(item) => `${item._id}`}
			data={todos}
			renderItem={itemData =>
				<ToDoItem todoData={itemData.item} id={itemData.item._id} state={true}></ToDoItem>
			}
		>
		</FlatList>
	);
};
const styles = StyleSheet.create({
	cardContainer: {
		
		// width: '90%',
		// marginLeft:'5%',
		// marginRight:'5%'
	},
	
})

export default TodoList;