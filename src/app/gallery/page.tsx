import {
	BreadCrumbsDataProps,
	CardDataProps,
	GalleryDataProps,
	MetaDataProps,
} from "@/app/types";
import CardSection from "@/app/ui/CardSection";
import GallerySection from "@/app/ui/GallerySection";
import PageHeading from "@/app/ui/PageHeading";
import Header from "../ui/Header/Header";
import Footer from "../ui/Footer/Footer";
import TopBar from "../ui/Header/TopBar";

const BreadcrumbsData: BreadCrumbsDataProps = {
	backgroundImage: "https://gwd-website.b-cdn.net/lightning/DADADASDA.jpeg",
	title: "Our Gallery",
	breadcrumbs: [
		{ label: "Home", link: "/", active: false },
		{ label: "Gallery", link: "", active: true },
	],
};

const galleryData: GalleryDataProps[] = [
	{
		imgSrc: "https://gwd-website.b-cdn.net/lightning/DADADASDA.jpeg",
		title: "",
		year: "2026",
		height: "694px",
	},
	{
		imgSrc: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.30%20PM.jpeg",
		title: "",
		year: "2026",
		height: "383px",
	},
	{
		imgSrc: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.59%20PM.jpeg",
		title: "",
		year: "2026",
		height: "383px",
	},
	{
		imgSrc: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.18.00%20PM.jpeg",
		title: "",
		year: "2026",
		height: "383px",
	},
	{
		imgSrc: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.26.19%20PM.jpeg",
		title: "",
		year: "2026",
		height: "287px",
	},

	{
		imgSrc: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.59%20PM.jpeg",
		title: "",
		year: "2026",
		height: "480px",
	},
	{
		imgSrc: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.59%20PM.jpeg",
		title: "",
		year: "2026",
		height: "190px",
	},
	{
		imgSrc: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.59%20PM.jpeg",
		title: "",
		year: "2026",
		height: "383px",
	},
	


	{
		imgSrc: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-10%20at%206.43.46%20AM.jpeg",
		title: "",
		year: "2026",
		height: "694px",
	},
	{
		imgSrc: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.59%20PM.jpeg",
		title: "",
		year: "2026",
		height: "383px",
	},
	{
		imgSrc: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-09%20at%209.00.43%20PM.jpeg",
		title: "",
		year: "2026",
		height: "383px",
	},
	{
		imgSrc: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-09%20at%209.02.11%20PM.jpeg",
		title: "",
		year: "2026",
		height: "383px",
	},
	{
		imgSrc: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-09%20at%209.00.52%20PM.jpeg",
		title: "",
		year: "2026",
		height: "287px",
	},

	{
		imgSrc: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-09%20at%209.02.11%20PM.jpeg",
		title: "",
		year: "2026",
		height: "480px",
	},
	{
		imgSrc: "https://gwd-website.b-cdn.net/lightning/sdsasdasdsad.jpeg",
		title: "",
		year: "2026",
		height: "190px",
	},
	{
		imgSrc: "https://gwd-website.b-cdn.net/lightning/jhasjshdasdasd.jpeg",
		title: "",
		year: "2026",
		height: "383px",
	},
	
];

const cardData: CardDataProps = {
    backgroundImage: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.18.00%20PM.jpeg",
    tags: ["Removal", "Pruning", "Stump Grinding", "24/7 Service"],
    title: "READY TO PROTECT <br /> AND PRESERVE YOUR TREES?",
    buttonLink: "/contact",
};

export const metadata: MetaDataProps = {
	title: "Gallery - Garden Landscape Design Service Website",
};

export default function GalleryPage() {
	return (
		<>
		<TopBar />
		<Header />
		<main>
			<PageHeading data={BreadcrumbsData} />
			<div className="cs_height_100 cs_height_lg_70" />
			<GallerySection data={galleryData} />
			<div className="cs_height_100 cs_height_lg_70" />
			<CardSection data={cardData} />
			</main>
			<Footer />
		</>
	);
}
