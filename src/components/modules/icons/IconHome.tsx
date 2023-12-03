import { IconProps } from "@/lib/types";

const IconHome: React.FC<IconProps> = ({
    size = "20",
    color = "currentColor",
    ...attributes
}) => {
    return (
        <>
            <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                aria-hidden="true"
                width={size}
                height={size}
                {...attributes}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M12.71 2.29a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42A1 1 0 0 0 3 13h1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1 1 1 0 0 0-.29-.71zM6 20v-9.59l6-6 6 6V20z"></path>
            </svg>
        </>
    );
};

export default IconHome;