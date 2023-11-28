import { prisma } from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json()
    const todos = data.todos;

    try {
        const savenewtodo = prisma.todos.createMany({

            data: {
                id: todos.id,
                todo: todos.todo,
                checked: todos.checked,

            }
        })
        if (savenewtodo !== null) {
            return NextResponse.json({
                status: 'success'
            });
        }
        else {
            throw new Error();

        }
    }
    catch (error) {
        throw new Error();
    }
}