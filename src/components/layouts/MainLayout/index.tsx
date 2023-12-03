import { ReactNode } from "react";
import dynamic from "next/dynamic";
import Header from "../../partials/header";
import Footer from "../../partials/footer";

const SpecialEventWinter = dynamic(
    () =>
        import("../../special-event/Winter", {
            ssr: false,
        } as ImportCallOptions)
);

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <Header />
            <SpecialEventWinter />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;
