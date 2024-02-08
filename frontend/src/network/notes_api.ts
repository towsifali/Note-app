import { Note } from "../models/note";

async function fetchData(input: RequestInfo, init?: RequestInit) {
    const response = await fetch(input, init);
    if (response.ok){
        return response;
    }
    else{
        const errorBody = await response.json();
        const errorMessage = errorBody.message;
        throw new Error(errorMessage);
    }
}
export async function fetchNotes(): Promise<Note[]> {
    const response = await fetch("/api/notes", { method: "GET" });
    return response.json();
}