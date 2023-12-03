import { ReactNode } from "react";

interface ProviderLayoutProps {
    children: ReactNode
}

const ProviderLayout = ({ children } : ProviderLayoutProps) => {

    return (
        <>
            {children}
        </>
    )
}

export default ProviderLayout;