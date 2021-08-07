import React from 'react';
import { ScrollView, View ,Text, StyleSheet} from 'react-native';
import Container from '../EmotionComponents/Container';
import CustomButtonNavigate from '../EmotionComponents/CustomButtonNavigate';
import AddTodoForm from '../ToDo/AddToDoForm/AddToDoForm';
import TodoList from '../ToDo/ToDoList/ToDoList';


const styles = StyleSheet.create({
  
    homeButton:{
        justifyContent:'center',
        alignItems:'center'
    }
});


const ProfileScreen = ({navigation}) => {
    return (
        <Container>
          <ScrollView>
            <AddTodoForm></AddTodoForm>
            <TodoList></TodoList>
            <View style={styles.homeButton}>
            <Text title="silvia"></Text>
                <CustomButtonNavigate title='Home' task="Home" navigate='true' textColor='white' backgroundColor='#3b3b3b' />
            </View> 
        </ScrollView>   
        </Container>
       
    );
};

export default ProfileScreen;