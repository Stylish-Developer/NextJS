
import { getSession } from 'next-auth/react';

export default async function handler(req,res){
    const session = await getSession({req});    // { req : req } thats why

    if(!session){
        res.status(401).json({  error: 'Unauthenticated user' })
    }else{
        res.status(200).json({ message: 'Authenticated user',session })
    }
}