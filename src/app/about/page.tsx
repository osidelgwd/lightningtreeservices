import {
	AboutUsDataProps,
	BrandDataProps,
	BreadCrumbsDataProps,
	CardDataProps,
	FeatureDataProps,
	MetaDataProps,
	TeamMembersDataProps,
	ValueDataProps,
	WorksTwoDataProps,
} from "@/app/types";
import AboutUsSection from "@/app/ui/Aboutus";
import BrandSection from "@/app/ui/BrandSection";
import CardSection from "@/app/ui/CardSection";
import FeatureSection from "@/app/ui/FeatureSection";
import PageHeading from "@/app/ui/PageHeading";
import TeamMemberSection from "@/app/ui/Team";
import ValueSection from "@/app/ui/ValueSection";
import WorkSection1 from "@/app/ui/WorksSection/WorkSection1";
import Header from "../ui/Header/Header";
import Footer from "../ui/Footer/Footer";



const BreadcrumbsData: BreadCrumbsDataProps = {
    backgroundImage: "https://gwd-website.b-cdn.net/lightning/DADADASDA.jpeg",
    title: "ABOUT LIGHTNING TREE SERVICE",
    breadcrumbs: [
        { label: "Home", link: "/", active: false },
        { label: "About", link: "", active: true },
    ],
};

const aboutUsData: AboutUsDataProps = {
    title: `ELITE TREE CARE <br><span>DEFINED BY</span> <br>EXPERIENCE`,

    introduction:
        "At Lightning Tree Service LLC, we believe that professional tree care is a blend of science, safety, and art. Our journey began over a decade ago with a mission to provide the Pacific Northwest with reliable, high-quality arboriculture services.",
    introduction1:
        "Since our founding, we have specialized in complex removals and precise pruning. Our solid commitment to being fully licensed, certified, and bonded ensures that every project—from residential backyards to large commercial estates—is handled with the utmost professionalism and integrity.",

    video: {
        videoUrl: "https://www.youtube.com/embed/rRid6GCJtgc", // Reemplazar con video de trabajos reales si existe
        backgroundImage: "https://gwd-website.b-cdn.net/lightning/DADADASDA.jpeg",
    },
    cta: {
        backgroundImage: "https://gwd-website.b-cdn.net/lightning/DADADASDA.jpeg",
        buttonUrl: "/projects",
        buttonText: "See Our Work",
        title: "",
    },
};

const valueData: ValueDataProps = {
    sectionTitle: "OUR CORE",
    values: [{ text: "Tree Preservation" }, { text: "Safety Standards" }],
};

const featureData: FeatureDataProps = {
    sectionTitle: "THE <span>LIGHTNING</span> ADVANTAGE",
    buttonText: "Our Services",
    buttonUrl: "/services",
    image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.26.19%20PM.jpeg",
    features: [
        {
            icon: "fa6-solid:shield-check",
            title: "Fully Insured LLC",
            description:
                "We operate with complete licensing and bonding. Your property is protected under our comprehensive professional coverage.",
        },
        {
            icon: "fa6-solid:helmet-safety",
            title: "Expert Training",
            description:
                "Our crew undergoes extensive training in innovative rigging and climbing techniques for the safest tree removals.",
        },
        {
            icon: "fa6-solid:clock-rotate-left",
            title: "Decade of Excellence",
            description:
                "With 10+ years in the field, we possess the profound knowledge required to handle even the most hazardous situations.",
        },
        {
            icon: "fa6-solid:truck-pickup",
            title: "Modern Equipment",
            description:
                "We invest in the best tools and heavy machinery to ensure every project is completed efficiently and on schedule.",
        },
    ],
};

const teamMembersData: TeamMembersDataProps = {
    title: `THE EXPERTS <br><span>BEHIND</span> THE SERVICE`,
    subtitle: "OUR TEAM",
    teamMembers: [
        {
            img: "/assets/img/team_member_1.jpg",
            name: "Lead Arborist",
            role: "Founder & Operations Manager",
            description: "Dedicated to precision and safety in every high-climb project.",
        },
        {
            img: "/assets/img/team_member_2.jpg",
            name: "Field Supervisor",
            role: "Hazardous Removal Specialist",
            description: "Expert in technical rigging and complex tree removals.",
        },
        {
            img: "/assets/img/team_member_3.jpg",
            name: "Consulting Arborist",
            role: "Tree Health Expert",
            description: "Focused on preservation, disease diagnosis, and soil health.",
        },
        {
            img: "/assets/img/team_member_4.jpg",
            name: "Crew Foreman",
            role: "Site Safety Officer",
            description: "Ensuring every job site meets 100% of our safety protocols.",
        },
    ],
};

const brandLogos: BrandDataProps = {
    // Aquí puedes poner logos de certificaciones (ISA, BBB, etc) o marcas de equipos (Stihl, Husqvarna)
    brands: [
        "/assets/img/brand_logo_1.svg",
        "/assets/img/brand_logo_2.svg",
        "/assets/img/brand_logo_3.svg",
        "/assets/img/brand_logo_4.svg",
        "/assets/img/brand_logo_5.svg",
        "/assets/img/brand_logo_6.svg",
    ],
};

const worksData: WorksTwoDataProps = {
    title: "PROJECT <span>GALLERY</span>",
    subtitle: "PORTFOLIO",
    galleryItems: [
        {
            imgSrc: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.30%20PM.jpeg",
            title: "Hazardous Oak Removal",
            year: "2026",
            height: "694px",
        },
        {
            imgSrc: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.59%20PM.jpeg",
            title: "Structural Pruning",
            year: "2026",
            height: "287px",
        },
        {
            imgSrc: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.26.19%20PM.jpeg",
            title: "Stump Grinding",
            year: "2026",
            height: "383px",
        },
        {
            imgSrc: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.30%20PM.jpeg",
            title: "Emergency Storm Response",
            year: "2026",
            height: "480px",
        },
        {
            imgSrc: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.30%20PM.jpeg",
            title: "Lot Clearing",
            year: "2026",
            height: "190px",
        },
    ],
};

const cardData: CardDataProps = {
    backgroundImage: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.18.00%20PM.jpeg",
    tags: ["Removal", "Pruning", "Stump Grinding", "24/7 Service"],
    title: "READY TO PROTECT <br /> AND PRESERVE YOUR TREES?",
    buttonLink: "/contact",
};

export const metadata: MetaDataProps = {
    title: "About Us - Lightning Tree Service LLC",
};

export default function AboutPage() {
	return (
		<>
        
            <Header />
        <main>
			<PageHeading data={BreadcrumbsData} />
			<AboutUsSection data={aboutUsData} />
			<div className="cs_heading_bg cs_white_color">
				<ValueSection data={valueData} />
				<FeatureSection data={featureData} />
			</div>
			{/* <TeamMemberSection data={teamMembersData} /> */}
			{/* <BrandSection data={brandLogos} /> */}
			<WorkSection1 data={worksData} />
			<CardSection data={cardData} />
            </main>
            <Footer />
		</>
	);
}
