'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { categoriasAtividades } from '@/data/dadosLocais';
import { Categoria } from '@/types/types';

type ApiDisponivelContextType = {
    isApiOnline: boolean;
    isDbConnected: boolean;
    categorias: Categoria[];
    setIsApiOnline: (status: boolean) => void;
    setIsDbConnected: (status: boolean) => void;
};

const ApiDisponivelContext = createContext<ApiDisponivelContextType>({
    isApiOnline: false,
    isDbConnected: false,
    categorias: categoriasAtividades,
    setIsApiOnline: () => {},
    setIsDbConnected: () => {},
});

export function ApiDisponivelProvider({ children }: { children: ReactNode }) {
    const [isApiOnline, setIsApiOnline] = useState(false);
    const [isDbConnected, setIsDbConnected] = useState(false);
    const [categorias, setCategorias] = useState<Categoria[]>(categoriasAtividades);

    useEffect(() => {
        const verificarApi = async () => {
            try {
                const res = await fetch('http://localhost:8080/echos-java/api/status');
                const data = await res.json();
                setIsApiOnline(data.statusApi === 'online');
                setIsDbConnected(data.dbStatus === 'connected');

                if (data.statusApi === 'online' && data.dbStatus === 'connected') {
                    const resCategorias = await fetch('http://localhost:8080/echos-java/api/categorias');
                    if (resCategorias.ok) {
                        const categoriasData = await resCategorias.json();

                        const categoriasCompletas = categoriasData.map((catApi: Categoria) => {
                            const categoriaLocal = categoriasAtividades.find(cat => cat.nomeCateg === catApi.nomeCateg);
                            return {
                                ...catApi,
                                impactoGlobal: categoriaLocal?.impactoGlobal || 'Impacto não disponível',
                                dicas: categoriaLocal?.dicas || ['Sem dicas disponíveis'],
                            };
                        });
                        setCategorias(categoriasCompletas);
                        return;
                    }
                }
                setCategorias(categoriasAtividades);
            } catch {
                setIsApiOnline(false);
                setIsDbConnected(false);
                setCategorias(categoriasAtividades);
            }
        };

        verificarApi();
    }, []);

    return (
        <ApiDisponivelContext.Provider
            value={{ isApiOnline, isDbConnected, categorias, setIsApiOnline, setIsDbConnected }}
        >
            {children}
        </ApiDisponivelContext.Provider>
    );
}

export function useApiDisponivel() {
    return useContext(ApiDisponivelContext);
}
