import Link from 'next/link';
import Image from 'next/image';
import Markdown from 'react-markdown';

const config = {
    img: ({ node, ...props }: any) => {
      return (
        <div className="rounded-md text-center w-full ">
            <Image src={props.src} alt={props.alt} width={500} height={500} className="mx-auto mb-1"/>
            <div>{props.alt}</div>
        </div>
      );
    },
    a: ({ node, href, onClick, children, ...props}: any) => {
        return <div><Link className="text-blue-600" href={href} {...props}>{children}</Link></div>
    }
};

interface MDXComponentProps {
    children: string
}
const MDXComponent = ({ children } : MDXComponentProps) => {

    return (
        <Markdown components={config} className={"prose max-w-none prose-lg"}>
            {children}
        </Markdown>
    )
}

export default MDXComponent;