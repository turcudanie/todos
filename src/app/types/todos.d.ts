import { todos } from "@prisma/client";

interface TodosArray {
    id: number;
    todo: string;
    checked: boolean;
}

interface ModalInputProps{
    create : (todo: TodosArray) => void;
}

interface TodoProps{
    todo: TodosArray;
    deleteTodoItem: (id: number) => void;
    update: (id: number) => void;
    editTodoItem: (id: number)=> void;
}

