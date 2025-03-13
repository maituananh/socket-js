import React, { useEffect } from "react";
import { io } from "socket.io-client";

export function Chat() {
    useEffect(() => {
        const socket = io('http://localhost:8080');
        socket.on('connect', () => {
            console.log(`connected: ${socket.id}`);    
        })

        socket.on('disconnect', () => {
            console.log(`disconnect: ${socket.id}`);
        })

        socket.on('test-id', (data) => {
            console.log(data.message);
        })

        return () => {
            socket.disconnect()
        }
    })

    return (
        <input type="text"/>
    )
}

export default Chat;