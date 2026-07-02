import express from "express";
import bodyParser from "body-parser";

const router = express.Router();
const app = express();
const PORT = process.env.PORT || 4010;

app.use(bodyParser.json());

const todoData = [
  {
    id: 1,
    title: "Buy groceries",
    completed: false,
  },
  {
    id: 2,
    title: "Clean the house",
    completed: true,
  },
  {
    id: 3,
    title: "Finish the project",
    completed: false,
  },
  {
    id: 4,
    title: "Read a book",
    completed: true,
  },
];

router.get("/todo", (req, res) => {
  res.status(200).json(todoData);
});

router.post("/todo", (req, res) => {
  const { title, completed } = req.body;
  const newTodo = {
    id: todoData.length + 1,
    title,
    completed,
  };
  todoData.push(newTodo);
  res.status(201).json(todoData);
});

router.put("/todo/:id", (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const todo = todoData.find((todo) => todo.id === parseInt(id));
  if (!todo) {
    return res.status(400).json({ message: "Todo not found" });
  }

  todo.title = title;
  todo.completed = completed;
  res.status(202).json(todoData);
});

router.delete("/todo/:id", (req, res) => {
  const { id } = req.params;
  const todoIndex = todoData.findIndex((todo) => todo.id === parseInt(id));
  if (todoIndex === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }
  todoData.splice(todoIndex, 1);
  res.status(200).json(todoData);
});

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
