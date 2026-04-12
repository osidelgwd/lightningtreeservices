import {
    BreadCrumbsDataProps,
    CardDataProps,
    FaqDataProps,
    MetaDataProps,
} from "@/app/types";
import AccordionSection2 from "@/app/ui/Accordion/AccordionSection2";
import CardSection from "@/app/ui/CardSection";
import PageHeading from "@/app/ui/PageHeading";
import Header from "../ui/Header/Header";
import Footer from "../ui/Footer/Footer";
import TopBar from "../ui/Header/TopBar";

const BreadcrumbsData: BreadCrumbsDataProps = {
    backgroundImage: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.18.00%20PM.jpeg",
    title: "FREQUENTLY ASKED QUESTIONS",
    breadcrumbs: [
        { label: "Home", link: "/", active: false },
        { label: "FAQ", link: "", active: true },
    ],
};

const cardData: CardDataProps = {
    backgroundImage: "https://gwd-website.b-cdn.net/lightning/DADADASDA.jpeg",
    tags: ["Removal", "Pruning", "Emergency", "24/7"],
    title: "READY TO START YOUR <br /> NEXT TREE PROJECT?",
    buttonLink: "/contact",
};

const faqData: FaqDataProps = {
    sectionTitle: "TREE <span>SERVICES</span>",
    image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.26.19%20PM.jpeg",
    subtitle: "",
    highlightedText: "",
    items: [
        {
            question: "How do I know if a tree needs to be removed?",
            answer:
                "Signs include significant leaning, large dead branches, trunk decay, or proximity to power lines and structures. We provide professional assessments to determine if a tree can be saved through pruning or if removal is the safest option.",
        },
        {
            question: "Do you offer emergency storm damage services?",
            answer:
                "Yes, we provide 24/7 emergency response for trees that have fallen or become hazardous due to storms. Our team is equipped to handle urgent removals quickly and safely to protect your property.",
        },
        {
            question: "What is the best time of year for tree pruning?",
            answer:
                "While most pruning can be done year-round, late winter or early spring is often ideal for many species. However, hazardous or dead branches should be addressed immediately regardless of the season.",
        },
        {
            question: "Is stump grinding included in tree removal?",
            answer:
                "Stump grinding is a separate service but can be easily added to any removal project. We use specialized machinery to grind the stump below ground level, leaving the area ready for new landscaping.",
        },
    ],
};

const faqData2: FaqDataProps = {
    sectionTitle: "SAFETY & <span>LOGISTICS</span>",
    image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.59%20PM.jpeg",
    subtitle: "",
    highlightedText: "",
    items: [
        {
            question: "Is Lightning Tree Service LLC insured?",
            answer:
                "Absolutely. We are fully licensed, bonded, and insured. We carry comprehensive liability and workers' compensation insurance to ensure our clients and our team are protected on every job site.",
        },
        {
            question: "Do I need to be home during the service?",
            answer:
                "It is not required for you to be present as long as we have clear access to the work area. We will discuss all details during the estimate to ensure everything is handled according to your preferences.",
        },
        {
            question: "How do you protect my lawn and property?",
            answer:
                "We use professional-grade equipment and techniques, such as ground protection mats and controlled rigging, to minimize the impact on your landscape and ensure structures remain untouched.",
        },
        {
            question: "How long does a typical removal take?",
            answer:
                "The duration depends on the tree's size, location, and complexity. A standard removal can take anywhere from a few hours to a full day. We provide a time estimate along with every written quote.",
        },
    ],
};

export const metadata: MetaDataProps = {
    title: "FAQ - Lightning Tree Service LLC",
};

export default function FaqPage() {
    return (
        <>
        <TopBar />
        <Header />
        <main>
            <PageHeading data={BreadcrumbsData} />
            <div className="cs_height_100 cs_height_lg_70" />
            <AccordionSection2 data={faqData} />
            <div className="cs_height_100 cs_height_lg_70" />
            <AccordionSection2 data={faqData2} />
            <div className="cs_height_100 cs_height_lg_70" />
            <CardSection data={cardData} />            
        </main>
        <Footer />
        </>
    );
}