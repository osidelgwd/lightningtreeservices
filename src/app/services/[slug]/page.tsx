"use client";
import { useParams } from "next/navigation";
import AOSInit from "@/app/helper/AosInit";
import {
    CardDataProps,
    ServiceDetailsProps,
    TestimonialDataProps,
    WorkingProcessDataProps,
} from "@/app/types";
import CardSection from "@/app/ui/CardSection";
import Footer2 from "@/app/ui/Footer/Footer2";
import Header2 from "@/app/ui/Header/Header2";
import ServiceDetailsSection from "@/app/ui/ServiceDetails";
import TestimonialSection1 from "@/app/ui/TestimonialSection/TestimonialSection1";
import WorkingProcess from "@/app/ui/WorkingProcess";
import Header from "@/app/ui/Header/Header";
import Footer from "@/app/ui/Footer/Footer";

const allServicesInfo: Record<string, ServiceDetailsProps> = {
    "tree-removal": {
        breadcrumb: [
            { label: "Home", link: "/", active: false },
            { label: "Services", link: "/services", active: false },
            { label: "Tree Removal", link: "", active: true },
        ],
        titleHighlight: "<span>SAFE & STRATEGIC</span> TREE REMOVAL",
        video: {
            videoUrl: "https://www.youtube.com/embed/rRid6GCJtgc",
            backgroundImage: "https://gwd-website.b-cdn.net/lightning/DADADASDA.jpeg",
        },
        cta: {
            title: "High-Risk Removal Experts",
            buttonUrl: "/contact",
            buttonText: "Schedule Inspection",
            backgroundImage: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.26.19%20PM.jpeg",
        },
        description: `Tree removal is a high-stakes task that requires precision, the right equipment, and years of experience. At <strong>Lightning Tree Service LLC</strong>, we specialize in removing trees that are dead, diseased, or posing a direct threat to your home and power lines. <br /><br /> Our process utilizes advanced rigging techniques and heavy-duty cranes when necessary to ensure that even the largest trees in tight urban spaces are brought down without a single scratch to your property. We don't just cut trees; we manage the entire environment to ensure safety from the first cut to the final haul-away.`,
        iconBoxes: [
            { iconClass: "fa6-solid:shield-halved", title: "OSHA Compliant Safety" },
            { iconClass: "fa6-solid:truck-pickup", title: "Full Debris Hauling" },
            { iconClass: "fa6-solid:helmet-safety", title: "Certified Arborists" },
            { iconClass: "fa6-solid:file-contract", title: "Fully Insured & Bonded" },
            { iconClass: "fa6-solid:tree", title: "Dead Tree Specialists" },
            { iconClass: "fa6-solid:house-chimney-crack", title: "Property Protection" },
        ],
    },
    "professional-pruning": {
        breadcrumb: [
            { label: "Home", link: "/", active: false },
            { label: "Services", link: "/services", active: false },
            { label: "Pruning", link: "", active: true },
        ],
        titleHighlight: "<span>ARTISTIC & STRUCTURAL</span> PRUNING",
        video: {
            videoUrl: "https://www.youtube.com/embed/rRid6GCJtgc",
            backgroundImage: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.59%20PM.jpeg",
        },
        cta: {
            title: "Enhance Your Tree's Lifespan",
            buttonUrl: "/contact",
            buttonText: "Get an Estimate",
            backgroundImage: "https://gwd-website.b-cdn.net/lightning/DADADASDA.jpeg",
        },
        description: `Proper pruning is essential for the health and longevity of your trees. Our professional pruning services go beyond simple aesthetics; we focus on the structural integrity of the canopy. <br /><br /> By removing deadwood, thinning thick crowns to allow better airflow, and correcting growth patterns, we reduce wind resistance and prevent storm damage before it happens. Whether you have ornamental fruit trees or massive heritage oaks, our team applies species-specific techniques to ensure your trees thrive for decades to come.`,
        iconBoxes: [
            { iconClass: "fa6-solid:leaf", title: "Canopy Thinning" },
            { iconClass: "fa6-solid:scissors", title: "Deadwood Removal" },
            { iconClass: "fa6-solid:sun", title: "Airflow Optimization" },
            { iconClass: "fa6-solid:hand-holding-heart", title: "Tree Health Focus" },
        ],
    },
    "stump-grinding": {
        breadcrumb: [
            { label: "Home", link: "/", active: false },
            { label: "Services", link: "/services", active: false },
            { label: "Stump Grinding", link: "", active: true },
        ],
        titleHighlight: "<span>PRECISION</span> STUMP GRINDING",
        video: {
            videoUrl: "https://www.youtube.com/embed/rRid6GCJtgc",
            backgroundImage: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.26.19%20PM.jpeg",
        },
        cta: {
            title: "Reclaim Your Yard Today",
            buttonUrl: "/contact",
            buttonText: "Request Grinding",
            backgroundImage: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.26.19%20PM.jpeg",
        },
        description: `Leftover stumps are more than just an eyesore—they are trip hazards and breeding grounds for termites and fungi. Our industrial-grade stump grinders can handle any size root system, turning large stumps into useful mulch in minutes. <br /><br /> We grind deep below the surface to ensure that you can replant grass, flowers, or even another tree in the same spot immediately. We take care of all the underground tracing to avoid utility lines and leave your yard perfectly level and clean.`,
        iconBoxes: [
            { iconClass: "fa6-solid:gear", title: "High-Torque Grinding" },
            { iconClass: "fa6-solid:bugs", title: "Pest Prevention" },
            { iconClass: "fa6-solid:seedling", title: "Ready for Replanting" },
            { iconClass: "fa6-solid:broom", title: "Clean Finish" },
        ],
    },
    "emergency-storm-care": {
        breadcrumb: [
            { label: "Home", link: "/", active: false },
            { label: "Services", link: "/services", active: false },
            { label: "Emergency Care", link: "", active: true },
        ],
        titleHighlight: "<span>24/7 EMERGENCY</span> STORM RESPONSE",
        video: {
            videoUrl: "https://www.youtube.com/embed/rRid6GCJtgc",
            backgroundImage: "https://gwd-website.b-cdn.net/lightning/DADADASDA.jpeg",
        },
        cta: {
            title: "Immediate Threat Removal",
            buttonUrl: "tel:3609807886",
            buttonText: "CALL 360-980-7886",
            backgroundImage: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.26.19%20PM.jpeg",
        },
        description: `When disaster strikes, you need a team that moves as fast as lightning. Our 24/7 emergency storm care is designed to stabilize dangerous situations involving fallen trees on houses, vehicles, or power lines. <br /><br /> We prioritize safety and rapid response, arriving with the necessary cranes and lighting to work through the toughest conditions. We also assist with insurance documentation to make the recovery process as smooth as possible for you and your family.`,
        iconBoxes: [
            { iconClass: "fa6-solid:bolt", title: "Lightning Response" },
            { iconClass: "fa6-solid:cloud-showers-heavy", title: "Storm Stabilization" },
            { iconClass: "fa6-solid:phone-volume", title: "24-Hour Hotline" },
            { iconClass: "fa6-solid:file-invoice-dollar", title: "Insurance Assistance" },
        ],
    }
};

const workingProcessData: WorkingProcessDataProps = {
    sectionTitle: "OUR PROFESSIONAL <span>PROCESS</span>",
    subtitle: "PHASE BY PHASE",
    logo: "https://gwd-website.b-cdn.net/lightning/logo2tree.png",
    steps: [
        { title: "01 | Assessment", description: "Detailed evaluation of the service area." },
        { title: "02 | Preparation", description: "Securing the site and equipment." },
        { title: "03 | Execution", description: "Performing the service with precision." },
        { title: "04 | Clean-Up", description: "Restoring your property to pristine condition." },
    ],
};

const testimonialData: TestimonialDataProps = {
    sectionTitle: "WHAT OUR CLIENTS SAY",
    testimonials: [
        {
            text: `The team at <span>Lightning Tree</span> was incredible. They removed a 60ft fir tree with surgical precision.`,
            img: "/assets/img/avatar.png",
            name: "JAMES WILSON",
            designation: "Homeowner",
        },
    ],
};

const cardData: CardDataProps = {
    title: "NEED EMERGENCY TREE REMOVAL? <br /> CALL 360-980-7886",
    buttonLink: "tel:3609807886",
    backgroundImage: "https://gwd-website.b-cdn.net/lightning/DADADASDA.jpeg",
    tags: ["Reliable", "Safe", "Professional"],
};

export default function ServiceDetailsPage() {
    const params = useParams();
    const slug = params?.slug as string;

    // Seleccionamos la data basada en el slug, o la de removal por defecto
    const currentServiceData = allServicesInfo[slug] || allServicesInfo["tree-removal"];

    return (
        <>
        <Header />
        <main>
            
            <ServiceDetailsSection data={currentServiceData} />
            <WorkingProcess data={workingProcessData} />
            <TestimonialSection1 data={testimonialData} />
            <CardSection data={cardData} bgColor={"cs_color_1"} />
        </main>
        <Footer />
            <AOSInit />
        </>
    );
}