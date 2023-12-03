import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";

import Modal from "@/components/common/Modal";
import { useDebounce } from "@/hook/useDebounce";
import IconClose from "@/components/modules/icons/IconClose";
import IconSearch from "@/components/modules/icons/IconSearch";
import IconChevronRight from "@/components/modules/icons/IconChevronRight";
import blogService, { GetSearchBlogsProps } from "@/lib/services/blog.service";

const SearchMain = () => {
    const [isModalSearch, setIsModalSearch] = useState<boolean>(false);

    const [valueSearch, setValueSearch] = useState("");
    const [resultSearch, setResultSearch] = useState<GetSearchBlogsProps[]>([]);
    const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(false);
    const valueSearchDebounce = useDebounce(valueSearch, 500);

    const eventOnchangeValueSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setValueSearch(e.target.value);
    };

    const eventSearch = async (text: string) => {
        try {
            const blogsRes = await blogService.findAll(`search=${text}`);

            if (blogsRes?.success) {
                setResultSearch(blogsRes.blogs);
            }

            setIsLoadingSearch(false);
        } catch (error) {
            setIsLoadingSearch(false);
        }
    };

    useEffect(() => {
        if (valueSearchDebounce === "") {
            setResultSearch([]);
        } else if (valueSearchDebounce) {
            setIsLoadingSearch(true);
            eventSearch(valueSearchDebounce);
        }
    }, [valueSearchDebounce]);

    return (
        <>
            <div
                onClick={() => setIsModalSearch(true)}
                className="hidden md:block px-4 py-2 text-base bg-gray-50 text-gray-600 border hover:border-blue-400 rounded-md cursor-text select-none w-full max-w-sm"
            >
                Tìm kiếm...
            </div>
            <i
                onClick={() => setIsModalSearch(true)}
                className="w-10 block cursor-pointer md:hidden bg-gray-100 rounded-full outline-blue-600 outline-2 hover:outline-dashed"
            >
                <IconSearch size={20} className="h-10 mx-auto"/>
            </i>
            <Modal
                isOpen={isModalSearch}
                setIsOpen={setIsModalSearch}
                size="large"
            >
                <div className="font-semibold text-lg mb-4">Tìm kiếm</div>
                <div className="border-b flex items-center">
                    <i>
                        <IconSearch className="" />
                    </i>
                    <input
                        value={valueSearch}
                        onChange={eventOnchangeValueSearch}
                        className="w-full outline-none border-none py-2 px-2"
                        placeholder="Tên bài viết..."
                    />

                    {valueSearchDebounce !== "" &&
                        (isLoadingSearch ? (
                            <span className="loading-search"></span>
                        ) : (
                            <i
                                onClick={() => {
                                    setValueSearch("");
                                    setResultSearch([]);
                                }}
                                className="p-1 hover:bg-gray-200 rounded-full cursor-pointer"
                            >
                                <IconClose className="w-5 h-5 block" />
                            </i>
                        ))}
                </div>
                <div className="overflow-y-auto py-2">
                    <ul className="py-2 px-2">
                        {resultSearch.map((blog) => {
                            return (
                                <li
                                    key={blog.blogId}
                                    className="rounded-md mb-2 bg-gray-50 group hover:bg-blue-500 hover:text-white"
                                >
                                    <Link
                                        onClick={() => setIsModalSearch(false)}
                                        href={`/blog/${blog.slug}-${blog.blogId}`}
                                    >
                                        <div className="flex items-center px-4 py-3">
                                            <span className="border rounded-md px-[7px] py-[1px]">
                                                #
                                            </span>
                                            <p className="ml-3">{blog.title}</p>
                                            <IconChevronRight
                                                size={15}
                                                className="ml-auto fill-gray-800 group-hover:fill-white"
                                            />
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </Modal>
        </>
    );
};

export default SearchMain;
