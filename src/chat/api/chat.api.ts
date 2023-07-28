import { instance } from './api'


export const chatApi = {
    getChat() {
        return instance.get("/chat.get");
    },
    getMessage(id:string){
        return instance.get(`message.get?chat_id=${id}`)
    }

};