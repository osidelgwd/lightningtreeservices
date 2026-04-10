import AOSInit from "./helper/AosInit";
import ErrorSection from "./ui/Error_404";
import Footer from "./ui/Footer/Footer";
import Header from "./ui/Header/Header";
import PageHeading from "./ui/PageHeading";

const Page404 = () => {
	const BreadcrumbsData = {
		backgroundImage: "https://gwd-website.b-cdn.net/lightning/DADADASDA.jpeg",
		title: "Page not found",
		breadcrumbs: [
			{ label: "Home", link: "/", active: false },
			{ label: "Page not found", link: "", active: true },
		],
	};

	const errData = {
    title: "404",
    subtitle: "Oops! Page Not Found",
    message: "Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.",
};
	return (
		<>
			<Header />
			<div className="cs_site_header_spacing_100" />
			<PageHeading data={BreadcrumbsData} />
			<ErrorSection data={errData} />
			<Footer />
			<AOSInit />
		</>
	);
};

export default Page404;
