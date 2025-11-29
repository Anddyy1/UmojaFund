import { useEffect, useRef } from "react";
import { io } from "socket.io-client";

export default function useSocket(onEvent) {
  const socketRef = useRef(null);

  useEffect(() => {
    // default origin — adjust if you use different client origin
    const socket = io(undefined, { autoConnect: true });
    socketRef.current = socket;

    socket.on("connect", () => {
      socket.emit("joinDashboard");
      console.log("Connected to socket", socket.id);
    });

    socket.on("newContribution", (payload) => {
      if (onEvent) onEvent(payload);
    });

    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, [onEvent]);

  return { socket: socketRef };
}