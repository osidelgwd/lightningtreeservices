import {
    BreadCrumbsDataProps,
    CTADataProps,
    MetaDataProps,
    ServiceTwoDataProps,
} from "@/app/types";
import CtaSection from "@/app/ui/CTASection/CtaSection";
import Footer1 from "@/app/ui/Footer/Footer1";
import Header from "@/app/ui/Header/Header";
import PageHeading from "@/app/ui/PageHeading";
import ServiceSection1 from "@/app/ui/ServicesSection/ServiceSection1";
import Footer from "../ui/Footer/Footer";

const BreadcrumbsData: BreadCrumbsDataProps = {
    backgroundImage: "https://gwd-website.b-cdn.net/lightning/DADADASDA.jpeg",
    title: "PROFESSIONAL TREE SERVICES",
    breadcrumbs: [
        { label: "Home", link: "/", active: false },
        { label: "Services", link: "", active: true },
    ],
};
const servicesData: ServiceTwoDataProps[] = [
    {
        title: "TREE TRIMMING & PRUNING",
        description: "Expert structural pruning to enhance health, safety, and aesthetics of your canopy while preventing storm damage.",
        image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-10%20at%206.43.46%20AM.jpeg",
        link: "/services/tree-trimming-pruning",
    },
    {
        title: "SAFE TREE REMOVAL",
        description: "Professional removal of dead, hazardous, or unwanted trees using advanced rigging to protect your structure.",
        image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.18.00%20PM.jpeg",
        link: "/services/tree-removal",
    },
    {
        title: "FRUIT TREE CARE",
        description: "Specialized seasonal maintenance to maximize fruit production and maintain the structural integrity of your orchard.",
        image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.30%20PM.jpeg",
        link: "/services/fruit-tree-care",
    },
    {
        title: "YARD CLEAN UP",
        description: "Comprehensive seasonal debris removal, leaf clearing, and landscape rejuvenation for a pristine outdoor space.",
        image: "https://gwd-website.b-cdn.net/lightning/banner-4444.jpeg",
        link: "/services/yard-clean-up",
    },
    {
        title: "BLACKBERRY REMOVAL",
        description: "Aggressive removal of invasive blackberry bushes (mora), including root eradication to prevent regrowth.",
        image: "https://gwd-website.b-cdn.net/lightning/bladsshshss.jpeg",
        link: "/services/blackberry-removal",
    },
    {
        title: "SOD & GRASS INSTALLATION",
        description: "Instant lawn transformation with premium sod installation and soil preparation for long-lasting greenery.",
        image: "https://gwd-website.b-cdn.net/lightning/sdsasdasdsad.jpeg",
        link: "/services/sod-grass-installation",
    },
    {
        title: "RIVER ROCK & GRAVEL",
        description: "Decorative and functional stone installation for drainage solutions, pathways, and low-maintenance xeriscaping.",
        image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-09%20at%209.02.02%20PM.jpeg",
        link: "/services/river-rock-gravel",
    },
    {
        title: "FENCES & PAVERS",
        description: "Enhance privacy and outdoor living with custom fence builds and professional paver installation for patios and walks.",
        image: "https://gwd-website.b-cdn.net/lightning/fence-111.jpeg",
        link: "/services/fences-and-pavers",
    },
];

// const servicesData: ServiceTwoDataProps[] = [
//     {
//         title: "TREE TRIMMING & PRUNING",
//         description: "Expert structural pruning to enhance health, safety, and aesthetics of your canopy while preventing storm damage.",
//         image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.30%20PM.jpeg",
//         link: "/services/tree-trimming-pruning",
//     },
//     {
//         title: "SAFE TREE REMOVAL",
//         description: "Professional removal of dead, hazardous, or unwanted trees using advanced rigging to protect your structure.",
//         image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.30%20PM.jpeg",
//         link: "/services/tree-removal",
//     },
//     {
//         title: "FRUIT TREE CARE",
//         description: "Specialized seasonal maintenance to maximize fruit production and maintain the structural integrity of your orchard.",
//         image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.59%20PM.jpeg",
//         link: "/services/fruit-tree-care",
//     },
//     {
//         title: "YARD CLEAN UP",
//         description: "Comprehensive seasonal debris removal, leaf clearing, and landscape rejuvenation for a pristine outdoor space.",
//         image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.59%20PM.jpeg",
//         link: "/services/yard-clean-up",
//     },
//     {
//         title: "BLACKBERRY REMOVAL",
//         description: "Aggressive removal of invasive blackberry bushes (mora), including root eradication to prevent regrowth.",
//         image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.26.19%20PM.jpeg",
//         link: "/services/blackberry-removal",
//     },
//     {
//         title: "SOD & GRASS INSTALLATION",
//         description: "Instant lawn transformation with premium sod installation and soil preparation for long-lasting greenery.",
//         image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.59%20PM.jpeg",
//         link: "/services/sod-grass-installation",
//     },
//     {
//         title: "RIVER ROCK & GRAVEL",
//         description: "Decorative and functional stone installation for drainage solutions, pathways, and low-maintenance xeriscaping.",
//         image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.59%20PM.jpeg",
//         link: "/services/river-rock-gravel",
//     },
//     {
//         title: "FENCES & PAVERS",
//         description: "Enhance privacy and outdoor living with custom fence builds and professional paver installation for patios and walks.",
//         image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.59%20PM.jpeg",
//         link: "/services/fences-and-pavers",
//     },
// ];

const ctaData: CTADataProps = {
    backgroundImage: "https://gwd-website.b-cdn.net/lightning/DADADASDA.jpeg",
    title: "READY TO SECURE YOUR PROPERTY?",
    buttonText: "Get a Free Quote",
    buttonUrl: "/contact",
};

export const metadata: MetaDataProps = {
    title: "Expert Tree Services | Lightning Tree Service LLC",
};

export default function ServicePage() {
    return (
        <>
            <Header />
            <main>
            <PageHeading data={BreadcrumbsData} />
            <ServiceSection1 data={servicesData} />
            <CtaSection data={ctaData} />
            </main>
            <Footer />
        </>
    );
}