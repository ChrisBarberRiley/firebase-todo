import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { db } from './firebase';

const Todo = ({ todo }) => {
  return (
    <ListItem>
      <ListItemIcon>
        <HighlightOffIcon
          onClick={(e) => db.collection('todos').doc(todo.id).delete()}
        />
      </ListItemIcon>
      <ListItemText primary='Todo' secondary={todo.todo} />
    </ListItem>
  );
};

export default Todo;
