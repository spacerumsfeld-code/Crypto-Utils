import axios from 'axios';

export default async (req, res) => {
  if (req.method === 'GET') {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    try {
      const todo = await axios.get(url);
      res.send(todo.data);
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(200).json({ name: 'John Doe' });
  }
};
