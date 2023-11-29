'use server'
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

export async function GET(req: NextRequest, res: NextResponse) {
    const todos = await prisma.todos.findMany({
        orderBy: { createdAt: "desc", }
    })
    return NextResponse.json(todos);
}


export async function DELETE(request: Request) {
    const { id } = await request.json()
    try {
        const todo = await prisma.todos.delete({
            where: {
                id
            }
        })
        return Response.json({ messages: "OK", todo });
    } catch (err) {
        return Response.json({ messages: err });
    }
}

export async function PUT(req: Request) {
    const { id, todo } = await req.json();
    try {
        const todoEdit = await prisma.todos.update({
            where: {
                id,
            },
            data: {
                todo
            }
        });
        return Response.json({ message: "OK", todoEdit })
    } catch (err) {
        return NextResponse.json({
            message: err
        }, { status: 500 })
    }
}




