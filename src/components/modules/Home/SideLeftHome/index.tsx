import Link from "next/link";
import IconHome from "../../icons/IconHome";
import IconPopular from "../../icons/IconPopular";
import IconClock from "../../icons/IconClock";
import IconTopic from "../../icons/IconTopic";

const SideBarNavigationMainData = [
    {
        title: 'Trang chủ',
        link: "/",
        icon: <IconHome size={22} />
    },
    {
        title: 'Phổ biến',
        link: "/",
        icon: <IconPopular size={22} />
    },
    {
        title: 'Lịch sử',
        link: "/",
        icon: <IconClock size={22} />
    },
    {
        title: 'Chủ đề',
        link: "/tags",
        icon: <IconTopic size={22} />
    },
];


const SideLeftHome = () => {

    return (
        <aside className="sticky top-[72px]">
            <ul className="">
                {
                    SideBarNavigationMainData.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link href={item.link}>
                                    <div
                                        className="text-gray-700 flex items-center px-3 py-2 space-x-3 hover:bg-white/90 rounded-md"
                                    >
                                        {item.icon && (
                                            <i className="flex-shrink-0">{item.icon}</i>
                                        )}
                                        <p>{item.title}</p>
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}

export default SideLeftHome;