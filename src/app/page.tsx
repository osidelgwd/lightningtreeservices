import {
	CTADataProps,
	FeatureDataProps,
	HeroDataProps,
	MetaDataProps,
	ServiceDataProps,
	TestimonialDataProps,
	ValueDataProps,
	WorkingProcessDataProps,
	WorksDataProps,
} from "@/app/types";
import CTASection from "@/app/ui/CTASection";
import FeatureSection from "@/app/ui/FeatureSection";
import HeroSection from "@/app/ui/Hero";
import ServicesSection from "@/app/ui/ServicesSection";
import TestimonialSection from "@/app/ui/TestimonialSection";
import ValueSection from "@/app/ui/ValueSection";
import WorkingProcessSection from "@/app/ui/WorkingProcess";
import WorksSection from "@/app/ui/WorksSection";
import Header from "@/app/ui/Header/Header";
import Footer1 from "@/app/ui/Footer/Footer1";
import Footer from "./ui/Footer/Footer";
import TopBar from "./ui/Header/TopBar";


const heroData: HeroDataProps = {
    title: "EXPERT <b>TREE CARE</b> SERVICES",
    subtitle:
        "Preserving the beauty and safety of your landscape with precision, speed, and over 10 years of professional expertise. Your trees, our passion.",
    btnText1: "Get a Free Estimate",
    btnUrl1: "/contact",
    btnText2: "Our Services",
    btnUrl2: "/services",
    funfact: {
        number: "10+ Years",
        text: "Professional Experience",
    },
    box: {
        title: "24/7 Emergency Service",
        subtitle:
            "Fast response for storm damage and hazardous tree removals to keep your property safe.",
        link: "/contact",
    },
    backgrounds: [
        "https://gwd-website.b-cdn.net/lightning/DADADASDA.jpeg",
        "/assets/img/hero_bg_4.jpg",
        "/assets/img/hero_bg_2.jpg",
        "/assets/img/hero_bg_4.jpg",
    ],
};

const valueData: ValueDataProps = {
    sectionTitle: "CERTIFICATIONS",
    values: [{ text: "Licensed" }, { text: "Certified" }, { text: "Bonded" }],
};

const featureData: FeatureDataProps = {
    sectionTitle: "WHY CHOOSE <span>LIGHTNING</span> TREE SERVICE?",
    buttonText: "Learn More",
    buttonUrl: "/about",
    image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.26.19%20PM.jpeg",
    features: [
        {
            icon: "fa6-solid:shield-halved",
            title: "Safety First",
            description:
                "We use innovative techniques and professional-grade tools to ensure every job is completed without risks to your property.",
        },
        {
            icon: "fa6-solid:tree",
            title: "Profound Knowledge",
            description:
                "With a decade of experience, we understand tree biology, allowing us to provide exceptional preservation and care.",
        },
        {
            icon: "fa6-solid:bolt",
            title: "Lightning Efficiency",
            description:
                "True to our name, we work fast and clean. We take care of the hard work so you can enjoy a perfect landscape.",
        },
        {
            icon: "fa6-solid:handshake",
            title: "Full Accountability",
            description:
                "We are a fully licensed, certified, and bonded LLC. Reliability and excellence are the pillars of our reputation.",
        },
    ],
};

const workingProcessData: WorkingProcessDataProps = {
    sectionTitle: "OUR <span>PROFESSIONAL</span> WORKFLOW",
    subtitle: "HOW WE WORK",
    logo: "https://gwd-website.b-cdn.net/lightning/logo2tree.png",
    steps: [
        {
            title: "01 | Free Assessment",
            description:
                "We visit your property to evaluate the health and condition of your trees, providing a detailed free estimate.",
        },
        {
            title: "02 | Strategic Planning",
            description:
                "Our experts design a specific plan for pruning, removal, or preservation based on your safety and aesthetic needs.",
        },
        {
            title: "03 | Expert Execution",
            description:
                "Using top-tier equipment, our team performs the service with surgical precision, ensuring total site protection.",
        },
        {
            title: "04 | Clean & Clear",
            description:
                "We don't just cut; we clean. We leave your property spotless, removing all debris and wood as requested.",
        },
    ],
};

const servicesData: ServiceDataProps = {
    title: "OUR SERVICES",
    highlightedText: "Professional Tree & Landscape Solutions",
    service: [
        {
            title: "TREE TRIMMING & PRUNING",
            subtitle: "Expert structural pruning to enhance health, safety, and aesthetics of your canopy while preventing storm damage.",
            image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.30%20PM.jpeg",
            link: "/services/tree-trimming-pruning",
            tags: [
                { label: "Structural Pruning", url: "/" },
                { label: "Crown Thinning", url: "/" },
                { label: "Deadwooding", url: "/" },
            ],
            description: "",
        },
        {
            title: "SAFE TREE REMOVAL",
            subtitle: "Professional removal of dead, hazardous, or unwanted trees using advanced rigging to protect your structure.",
            image: "https://gwd-website.b-cdn.net/lightning/DADADASDA.jpeg",
            link: "/services/tree-removal",
            tags: [
                { label: "Hazardous Trees", url: "/" },
                { label: "Emergency Service", url: "/" },
                { label: "Stump Grinding", url: "/" },
            ],
            description: "",
        },
        {
            title: "FRUIT TREE CARE",
            subtitle: "Specialized seasonal maintenance to maximize fruit production and maintain the structural integrity of your orchard.",
            image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.59%20PM.jpeg",
            link: "/services/fruit-tree-care",
            tags: [
                { label: "Seasonal Pruning", url: "/" },
                { label: "Disease Control", url: "/" },
                { label: "Production Boost", url: "/" },
            ],
            description: "",
        },
        {
            title: "BLACKBERRY REMOVAL",
            subtitle: "Aggressive removal of invasive blackberry bushes (mora), including root eradication to prevent regrowth.",
            image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.26.19%20PM.jpeg",
            link: "/services/blackberry-removal",
            tags: [
                { label: "Mora Eradication", url: "/" },
                { label: "Root Removal", url: "/" },
                { label: "Land Reclamation", url: "/" },
            ],
            description: "",
        },
    ],
};

const servicesData1: ServiceDataProps = {
    title: "OUR SERVICES",
    highlightedText: "Professional Tree & Landscape Solutions",
    service: [
       
        {
            title: "YARD CLEAN UP",
            subtitle: "Comprehensive seasonal debris removal, leaf clearing, and landscape rejuvenation for a pristine outdoor space.",
            image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.59%20PM.jpeg",
            link: "/services/yard-clean-up",
            tags: [
                { label: "Debris Removal", url: "/" },
                { label: "Storm Cleanup", url: "/" },
                { label: "Mulching", url: "/" },
            ],
            description: "",
        },
        {
            title: "SOD & GRASS INSTALLATION",
            subtitle: "Instant lawn transformation with premium sod installation and soil preparation for long-lasting greenery.",
            image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.59%20PM.jpeg",
            link: "/services/sod-grass-installation",
            tags: [
                { label: "New Lawn", url: "/" },
                { label: "Soil Prep", url: "/" },
                { label: "Sod Laying", url: "/" },
            ],
            description: "",
        },
        {
            title: "RIVER ROCK & GRAVEL",
            subtitle: "Decorative and functional stone installation for drainage solutions, pathways, and low-maintenance xeriscaping.",
            image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.59%20PM.jpeg",
            link: "/services/river-rock-gravel",
            tags: [
                { label: "Drainage Control", url: "/" },
                { label: "Pathways", url: "/" },
                { label: "Xeriscaping", url: "/" },
            ],
            description: "",
        },
        {
            title: "FENCES & PAVERS",
            subtitle: "Enhance privacy and outdoor living with custom fence builds and professional paver installation for patios and walks.",
            image: "https://gwd-website.b-cdn.net/lightning/DADADASDA.jpeg",
            link: "/services/fences-and-pavers",
            tags: [
                { label: "Custom Fencing", url: "/" },
                { label: "Paver Patios", url: "/" },
                { label: "Retaining Walls", url: "/" },
            ],
            description: "",
        },
    ],
};

const testimonialData: TestimonialDataProps = {
    sectionTitle: "GOOGLE CUSTOMER REVIEWS",
    testimonials: [
        {
            text: `Juan and his guys did an <span>amazing job</span> at removing a tree in my backyard. Excellent work and affordable. Extremely professional and polite. I will continue to recommend Lightning Tree Service.`,
            name: "SKYLER B.",
            designation: "Verified Customer",
            img: "/assets/img/avatar_1.png", // Puedes dejarlo vacío o usar un placeholder
        },
        {
            text: `Juan Manuel was very professional, showed up on time, and cut down our <span>huge tree</span> without any issue. Precision drop of all branches and trunk! Amazing to watch.`,
            name: "THERESE MINDER-ALMANZA",
            designation: "Verified Customer",
            img: "/assets/img/avatar_2.png",
        },
        {
            text: `Excellent Tree Removal Service. The team was professional, efficient, and did a <span>fantastic job</span>. They were careful around the property and left everything clean.`,
            name: "ABSOLUTE HEATING & COOLING",
            designation: "Local Guide",
            img: "/assets/img/avatar_3.png",
        },
        {
            text: `They cleared blackberries and aggressive ground cover—giving us a huge sense of <span>relief</span>. Communication was thorough and timely. High quality work!`,
            name: "BRANDY OSBORN",
            designation: "Homeowner",
            img: "/assets/img/avatar_4.png",
        },
        {
            text: `Lightning Tree Service was recommended by a neighbor. They are <span>very professional</span>, have great equipment, and take safety seriously. Highly recommended.`,
            name: "PADDI GEORGE",
            designation: "Verified Customer",
            img: "/assets/img/avatar_5.png",
        }
    ],
};

const worksData: WorksDataProps = {
    title: "EXPLORE OUR <span>LATEST</span> <br /> TREE CARE <span>PROJECTS</span>",
    subtitle: "OUR WORK",
    slides: [
        {
            image: "https://gwd-website.b-cdn.net/lightning/DADADASDA.jpeg",
            name: "EMERGENCY REMOVAL",
            location: "VANCOUVER, WA",
            description:
                "Swift removal of a storm-damaged tree leaning dangerously over a residential structure.",
        },
        {
            image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.18.00%20PM.jpeg",
            name: "CROWN REDUCTION",
            location: "PORTLAND, OR",
            description:
                "Technical pruning of a century-old maple to improve health and reduce wind resistance.",
        },
        {
            image: "https://gwd-website.b-cdn.net/lightning/DADADASDA.jpeg",
            name: "ESTATE PRESERVATION",
            location: "CAMAS, WA",
            description:
                "Comprehensive health assessment and preservation plan for a private 5-acre estate.",
        },
    ],
};

const ctaData: CTADataProps = {
    backgroundImage: "https://gwd-website.b-cdn.net/lightning/DADADASDA.jpeg",
    title: "READY TO SECURE <br /> YOUR LANDSCAPE?",
    buttonText: "Call 360-980-7886",
    buttonUrl: "tel:3609807886",
};

export const metadata: MetaDataProps = {
    title: "Lightning Tree Service LLC - Professional Tree Care & Removal",
};

export default function HomePage() {
	return (
		<>
        <header className="cs_site_header_full_wrapper">
                <TopBar />
                <Header />
            </header>
        <main>
			<HeroSection data={heroData} />
			<ValueSection data={valueData} />
			<FeatureSection data={featureData} />
			<WorkingProcessSection data={workingProcessData} />
			<ServicesSection data={servicesData} />
			<ServicesSection data={servicesData1} />
			<TestimonialSection data={testimonialData} />
			<WorksSection data={worksData} />
			<CTASection data={ctaData} />
            </main>
            <Footer />
		</>
	);
}
