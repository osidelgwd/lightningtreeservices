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
        title: "TREE REMOVAL",
        description:
            "Safe and efficient removal of hazardous, dead, or unwanted trees using advanced rigging techniques to protect your property.",
        image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.30%20PM.jpeg",
        link: "/services/tree-removal",
    },
    {
        title: "PROFESSIONAL PRUNING",
        description:
            "Structural pruning and crown thinning to improve tree health, aesthetics, and safety while promoting long-term growth.",
        image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.59%20PM.jpeg",
        link: "/services/professional-pruning",
    },
    {
        title: "STUMP GRINDING",
        description:
            "Complete elimination of tree stumps below ground level, allowing for immediate replanting or lawn restoration.",
        image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.26.19%20PM.jpeg",
        link: "/services/stump-grinding",
    },
    {
        title: "EMERGENCY STORM CARE",
        description:
            "Rapid response for storm-damaged trees that pose an immediate threat to homes, power lines, or public safety.",
        image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.59%20PM.jpeg",
        link: "/services/emergency-storm-care",
    },
    {
        title: "LOT CLEARING",
        description:
            "Large-scale vegetation and tree removal for new constructions or land development projects with professional efficiency.",
        image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.26.19%20PM.jpeg",
        link: "/services/lot-clearing",
    },
    {
        title: "DISEASE DIAGNOSIS",
        description:
            "Expert evaluation of tree health to identify pests or diseases and provide effective treatment or mitigation plans.",
        image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.26.19%20PM.jpeg",
        link: "/services/disease-diagnosis",
    },
];

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