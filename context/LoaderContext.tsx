"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface LoaderContextType {
    loading: boolean;
    setLoading: (value: boolean) => void;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(false);
    return (
        <LoaderContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoaderContext.Provider>
    );
};

export const useLoader = (): LoaderContextType => {
    const context = useContext(LoaderContext);
    if (!context) throw new Error("useLoader must be used within LoaderProvider");
    return context;
};

export default function LoaderHandler({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { setLoading } = useLoader();

  useEffect(() => {
    setLoading(false);
  }, [pathname, setLoading]);

  return <>{children}</>;
}
