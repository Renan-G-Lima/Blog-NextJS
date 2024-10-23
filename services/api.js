import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://zcezwblvnfpoldofmvvk.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjZXp3Ymx2bmZwb2xkb2ZtdnZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2NjgyNzMsImV4cCI6MjA0NTI0NDI3M30.-_NqDyCfX9A2-J5CG4F0XwjEbamjSj8oRU1Ydk7-25I",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjZXp3Ymx2bmZwb2xkb2ZtdnZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2NjgyNzMsImV4cCI6MjA0NTI0NDI3M30.-_NqDyCfX9A2-J5CG4F0XwjEbamjSj8oRU1Ydk7-25I"
    }
})