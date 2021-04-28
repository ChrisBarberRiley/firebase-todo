import { ListItem, ListItemText } from '@material-ui/core';

const Todo = ({ todo }) => {
  return (
    <ListItem>
      <ListItemText primary='Todo' secondary={todo} />
    </ListItem>
  );
};

export default Todo;
