import { Dispatch, Fragment, ReactNode, SetStateAction } from "react";

import clsx from "clsx";
import { Dialog, Transition } from "@headlessui/react";

import IconClose from "../../modules/icons/IconClose";


interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    size?: "small" | "medium" | "large" | "extra" | "full";
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const Modal = ({
    children,
    isOpen,
    setIsOpen,
    size = "medium",
}: ModalProps) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-40" onClose={setIsOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/20" />
                </Transition.Child>

                <div className="fixed inset-0">
                    <div className={clsx(
                        "flex min-h-full justify-center md:p-4",
                        {
                            "mt-20": size !== "full"
                        }
                    )}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                className={clsx(
                                    "relative flex flex-col justify-start w-full h-full transform overflow-hidden bg-white rounded-lg md:p-10 p-4 text-left align-middle shadow-xl transition-all max-h-[65vh]",
                                    {
                                        "max-w-md": size === "small",
                                        "max-w-xl": size === "medium",
                                        "max-w-3xl h-auto": size === "large",
                                        "max-w-7xl h-auto": size === "extra",
                                        "max-w-full max-h-full h-max": size === "full"
                                    }
                                )}
                            >
                                <button onClick={() => setIsOpen(false)} className="absolute right-4 top-3 hover:bg-gray-200 p-2 rounded-full outline-none">
                                    <IconClose className="w-5 h-5 block"/>
                                </button>
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default Modal;
