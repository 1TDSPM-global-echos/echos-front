'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ApiDisponivelContextType = {
    isApiOnline: boolean;
    isDbConnected: boolean;
    setIsApiOnline: (status: boolean) => void;
    setIsDbConnected: (status: boolean) => void;
};

const ApiDisponivelContext = createContext<ApiDisponivelContextType>({
    isApiOnline: false,
    isDbConnected: false,
    setIsApiOnline: () => {},
    setIsDbConnected: () => {},
});

export function ApiDisponivelProvider({ children }: { children: ReactNode }) {
    const [isApiOnline, setIsApiOnline] = useState(false);
    const [isDbConnected, setIsDbConnected] = useState(false);

    useEffect(() => {
        const verificarApi = async () => {
            try {
                const res = await fetch('http://localhost:8080/echos-java/api/status');
                const data = await res.json();
                setIsApiOnline(res.ok);
                setIsDbConnected(data.dbStatus === 'connected');
            } catch {
                setIsApiOnline(false);
                setIsDbConnected(false);
            }
        };

        verificarApi();
    }, []);

    return (
        <ApiDisponivelContext.Provider value={{ isApiOnline, isDbConnected, setIsApiOnline, setIsDbConnected }}>
            {children}
        </ApiDisponivelContext.Provider>
    );
}

export function useApiDisponivel() {
    return useContext(ApiDisponivelContext);
}
