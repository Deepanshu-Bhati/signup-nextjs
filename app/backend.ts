"use server"
import prisma from ".."

interface user{
    username:string
    email:string
    password:string
    firstname:string
    lastname:string
}
export async function solve(data:user){
    const user = await prisma.user.create({
        data:data
    })
    console.log(data)
    return "name"

}



