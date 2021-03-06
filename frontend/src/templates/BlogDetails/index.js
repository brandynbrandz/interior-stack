import React from "react";
import PageWrapper from "../../components/PageWrapper";
import BlogDetailsContentWrapper from "./ContentWrapper";
import SidebarForBlog from "../SidebarForBlog";
import PageHeader from "../../components/PageHeader";
import BlogData from "../../data/Blog/blog";

const BlogDetails = ({ sidebar, headRoute }) => {
  const post_id = new URLSearchParams(window.location.search).get("id");
  const post = BlogData.find((post) => post.id === parseInt(post_id));

  return (
    <>
      <PageHeader
        bgImg={process.env.PUBLIC_URL + "/assets/img/page-header.jpg"}
        title={post.title}
        content={post.excerpt}
        headRoute={`BLOG / ${post.title}`}
      />

      <PageWrapper classes={"blog-details-page-content sp-y"}>
        <div className={!sidebar ? "col-12" : "col-lg-9"}>
          <BlogDetailsContentWrapper sidebar={sidebar} post={post} />
        </div>

        {sidebar ? <SidebarForBlog /> : null}
      </PageWrapper>
    </>
  );
};

export default BlogDetails;
