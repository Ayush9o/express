export interface Message{
    _id:string,
    project:string,
    sender:string,
    body:string
    readBy:string[],
    createdAt:string
}