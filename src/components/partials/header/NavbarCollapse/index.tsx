import clsx from "clsx";
import { useState } from "react";

const NavbarCollapse = () => {
    const [isOpenNavbar, setIsOpenNavbar] = useState(false);
    return (
        <div className="mr-3">
            <div
                onClick={() => setIsOpenNavbar((value) => !value)}
                className="w-10 h-10 flex items-center justify-center border rounded-md bg-gray-100"
            >
                <div
                    className={clsx("button-nav-collapse", {
                        open: isOpenNavbar,
                    })}
                >
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default NavbarCollapse;
