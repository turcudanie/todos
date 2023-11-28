import { prisma } from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json()
    const todos = data?.todos;

    console.log(todos);

    try {
        const savenewtodo = await prisma.todos.create({

            data: {
                id: todos.id,
                todo: todos.todo,
                checked: todos.checked,

            }
        })

        console.log(savenewtodo);
        

        return NextResponse.json({
            status: "success",
        })
    }
    catch (error) {
        throw new Error();
    }
}

export async function GET(req: NextRequest, res: NextResponse){
    const todos = await prisma.todos.findMany({
        orderBy: {createdAt: "desc",}
    })
    return NextResponse.json(todos);
}