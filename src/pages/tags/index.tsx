import { Fragment } from "react";
import { GetStaticProps } from "next";

import { NextPageWithLayout } from "../_app";
import { REVALIDATE_TIME } from "@/lib/constants";
import CardTag from "@/components/modules/Tag/CardTag";
import MainLayout from "@/components/layouts/MainLayout";
import tagService, { GetTagsProps } from "@/lib/services/tag.service";

interface TagsPageProps {
    tags: GetTagsProps[]
}
const TagsPage : NextPageWithLayout<TagsPageProps> = ({ tags }) => {

    return (
        <div className="max-w-7xl w-full min-h-screen mx-auto mb-4">
            <div className="px-3 my-3">
                <div className="-mx-3">
                    <div className="px-3 mb-3">
                        <h1 className="font-extrabold text-2xl">Tags</h1>
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-1">
                        {
                            tags && tags.map((tag) => {
                                return (
                                    <Fragment key={tag.tagId}>
                                        <CardTag tag={tag}/>
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TagsPage;

TagsPage.getLayout = (page) => {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { success, tags } = await tagService.findAll();
    
    return {
        props: {
            tags: tags || []
        },
        revalidate: REVALIDATE_TIME
    }
}