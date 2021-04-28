import {
  Button,
  FormControl,
  Input,
  InputLabel,
  List,
} from '@material-ui/core';
import firebase from 'firebase';
import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // fetch all todos from database
  useEffect(() => {
    db.collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => doc.data().todo));
      });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
  };

  return (
    <div className='App'>
      <h1>Todo list 🚀! </h1>

      <form onSubmit={addTodo}>
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />

          <Button
            disabled={!input}
            variant='contained'
            color='primary'
            type='submit'
          >
            Add todo
          </Button>
        </FormControl>
      </form>

      <List>
        {todos.map((todo) => {
          return <Todo todo={todo} />;
        })}
      </List>
    </div>
  );
}

export default App;
