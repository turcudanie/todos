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
}

interface TodoEditProps{
    id : number;
    todo: TodosArray;
    updateEdit: (id: number) => void;
}

interface EditInputProps{
    edit : (todo: TodosArray) => void;
}

