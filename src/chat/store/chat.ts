import { chatApi } from "../chatItemList/chat.api";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Определение типа возвращаемого значения санки
type FetchChatResponse = ChatType["data"];

const slice = createSlice({
    name: 'chat',
    initialState: [] as FetchChatResponse, // Задаем начальное значение в виде пустого массива
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDataChat.fulfilled, (state, action: PayloadAction<FetchChatResponse>) => {
            return action.payload;
        });
    },
});

export const getDataChat = createAsyncThunk("chat/getChat", async () => {

    try {
        const res = await chatApi.getChat(); // Добавляем await для ожидания ответа от запроса
        return res.data.response;
    } catch (e: unknown) {
        if (e instanceof Error) {
            // dispatch(setError(e.message));
        }
        throw e; // Возвращаем ошибку, чтобы она была доступна в экшене `rejected`
    }
});

export const chat = slice.reducer;


// Оставьте остальную типизацию, которую вы уже определили, без изменений
type MessageType = {
    created_at: number;
    user_id: string;
    user_name: string;
    user_surname: string;
    you: boolean;
    message: string;
};

type UserType = {
    id: string;
    name: string;
    surname: string;
    avatar: string;
    you: boolean;
};

export type ChatType = {
    data: {
        id: string;
        created_at: number;
        title: string;
        avatar: string;
        private: boolean;
        last_message: MessageType;
        count_unread: number;
        users: UserType[];
    }[];
};

