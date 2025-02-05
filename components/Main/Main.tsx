import { ReactNode } from 'react';

interface MainProps {
    children: ReactNode;
}

export default function Main({ children }: MainProps) {
    return (
        <main className="h-absolute max-w-screen-xl mx-auto">
            {children}
        </main>
    );
}