"use client";
import PageHeading from "@/app/ui/PageHeading";
import BlogDetails from "@/app/ui/BlogsDetails";
import BlogSidebar from "@/app/ui/Sidebar2/BlogSidebar";
import Header from "@/app/ui/Header/Header";
import Footer from "@/app/ui/Footer/Footer";

export default function BlogDetailsClient({ post }: { post: any }) {
    const breadcrumbs = {
        title: post.title,
        backgroundImage: post.image,
        breadcrumbs: [
            { label: "Home", link: "/", active: false },
            { label: "Blog", link: "/blog", active: false },
            { label: post.title, link: "", active: true },
        ],
    };

    return (
        <>
            <Header />
            <main>
                <PageHeading data={breadcrumbs} />
                <section className="cs_blog_details_section">
                    <div className="cs_height_100 cs_height_lg_70" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <BlogDetails data={post} />
                            </div>
                            <aside className="col-lg-4 ps-lg-5 mt-5 mt-lg-0">
                                <div className="sticky-top" style={{ top: '100px', zIndex: 10 }}>
                                    <BlogSidebar />
                                </div>
                            </aside>
                        </div>
                    </div>
                    <div className="cs_height_100 cs_height_lg_70" />
                </section>
            </main>
            <Footer />
        </>
    );
}