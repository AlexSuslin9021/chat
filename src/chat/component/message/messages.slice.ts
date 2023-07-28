
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {chatApi} from "../../chatItemList/chat.api";

// Определение типа возвращаемого значения санки


const slice = createSlice({
    name: 'message',
    initialState: [] as MessageType [], // Задаем начальное значение в виде пустого массива
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMessage.fulfilled, (state, action: PayloadAction<MessageType[]>) => {
            return action.payload.reverse();
        });
    },
});

export const getMessage = createAsyncThunk("message/getMessage", async (arg:string) => {

    try {
        const res = await chatApi.getMessage(arg); // Добавляем await для ожидания ответа от запроса
        return res.data.response;
    } catch (e: unknown) {
        if (e instanceof Error) {
            // dispatch(setError(e.message));
        }
        throw e; // Возвращаем ошибку, чтобы она была доступна в экшене `rejected`
    }
});

export const message = slice.reducer;

type MessageType = {
    id: string;
    created_at: number;
    user: {
        id: string;
        name: string;
        surname: string;
        avatar: string;
        you: boolean;
    };
    message: string;
    is_new: boolean;
};

