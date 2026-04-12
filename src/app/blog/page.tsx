import {
    BlogDataProps,
    BreadCrumbsDataProps,
    CardDataProps,
    MetaDataProps,
} from "@/app/types";
import CardSection from "@/app/ui/CardSection";
import PageHeading from "@/app/ui/PageHeading";
import Header from "../ui/Header/Header";
import Footer from "../ui/Footer/Footer";
import Link from 'next/link';
import TopBar from "../ui/Header/TopBar";

// Estilo en línea para reutilizar tu color verde #374836
const brandTextColor = { color: '#374836' };

const BreadcrumbsData: BreadCrumbsDataProps = {
    backgroundImage: "https://gwd-website.b-cdn.net/lightning/DADADASDA.jpeg",
    title: "Expert Arborist Insights",
    breadcrumbs: [
        { label: "Home", link: "/", active: false },
        { label: "Blog", link: "", active: true },
    ],
};

const blogData: BlogDataProps = {
    posts: [
        {
            id: 1,
            image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.59%20PM.jpeg",
            date: "10 Apr 2026",
            category: "Tree Care",
            title: "The Science of Pruning: Why Timing is Everything",
            description: "Discover why structural pruning is the best insurance policy for your home before Oregon's intense storm seasons begin.",
            link: "/blog/science-of-pruning-timing",
        },
        {
            id: 2,
            image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.30%20PM.jpeg",
            date: "08 Apr 2026",
            category: "Safety",
            title: "When to Say Goodbye: Signs of a Hazardous Tree",
            description: "Learn to identify root rot, hollow trunks, and dangerous leaning patterns that require immediate professional intervention.",
            link: "/blog/dangerous-trees-removal-signs",
        },
        {
            id: 3,
            image: "https://gwd-website.b-cdn.net/lightning/bladsshshss.jpeg",
            date: "05 Apr 2026",
            category: "Invasive Species",
            title: "Defeating Blackberries: Why Root Extraction is Key",
            description: "Stop the endless cycle of thorns. We explain why mowing isn't enough to permanently kill invasive Himalayan Blackberry.",
            link: "/blog/eliminating-blackberry-thickets",
        },
        {
            id: 4,
            image: "https://gwd-website.b-cdn.net/lightning/fence-111.jpeg",
            date: "02 Apr 2026",
            category: "Hardscaping",
            title: "Fencing Styles That Withstand PNW Weather",
            description: "Explore the best cedar and privacy designs that complement your landscape while resisting humidity and rot.",
            link: "/blog/fencing-styles-durability",
        },
    ],
    pagination: [1, 2],
};

const cardData: CardDataProps = {
    backgroundImage: "https://gwd-website.b-cdn.net/lightning/DADADASDA.jpeg",
    tags: ["Expert", "Reliable", "Safe"],
    title: "GET A FREE QUOTE FOR <br /> YOUR NEXT PROJECT",
    buttonLink: "/contact",
};

export const metadata: MetaDataProps = {
    title: "Blog - Lightning Tree Service | Tree Care & Hardscaping Tips",
};

export default function BlogPage() {
    return (
        <>
        <TopBar />
            <Header />
            <main>
                <PageHeading data={BreadcrumbsData} />
                <section>
                    <div className="cs_height_100 cs_height_lg_70" />
                    <div className="container">
                        {/* GRID DINÁMICO: 1 col móvil, 2 col tablet, 3 col laptop */}
                        <div className="row g-4"> 
                            {blogData.posts.map((post) => (
                                <div className="col-12 col-md-6 col-lg-4" key={post.id}>
                                    <article className="cs_post cs_style_1 h-100 rounded-4 overflow-hidden border bg-white transition-all shadow-hover">
                                        <Link href={post.link} className="cs_post_thumb d-block overflow-hidden">
                                            <img 
                                                src={post.image} 
                                                alt={post.title} 
                                                className="w-100 object-fit-cover transition-transform scale-hover" 
                                                style={{ height: '260px' }} 
                                            />
                                        </Link>
                                        <div className="cs_post_info p-4">
                                            {/* Usamos el color verde corporativo aquí */}
                                            <div className="cs_post_meta small text-uppercase fw-bold mb-3 d-flex align-items-center gap-2" style={brandTextColor}>
                                                <i className="bi bi-calendar-event"></i>
                                                <span>{post.date}</span>
                                                <span className="text-muted opacity-50">|</span>
                                                <i className="bi bi-tag-fill ms-1"></i>
                                                <span>{post.category}</span>
                                            </div>
                                            
                                            {/* El título del post también usa el verde */}
                                            <h3 className="cs_post_title h5 fw-bold mb-3">
                                                <Link href={post.link} className="text-decoration-none lh-base" style={brandTextColor}>
                                                    {post.title}
                                                </Link>
                                            </h3>
                                            
                                            <p className="cs_post_subtitle mb-0 text-muted small lh-relaxed">
                                                {post.description}
                                            </p>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="cs_height_100 cs_height_lg_70" />
                </section>
                <CardSection data={cardData} />
            </main>
            <Footer />
        </>
    );
}

