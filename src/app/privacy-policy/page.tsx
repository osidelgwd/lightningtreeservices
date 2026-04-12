import { BreadCrumbsDataProps, MetaDataProps } from "@/app/types";
import PageHeading from "@/app/ui/PageHeading";
import TopBar from "../ui/Header/TopBar";
import Footer from "../ui/Footer/Footer";
import Header from "../ui/Header/Header";

const BreadcrumbsData: BreadCrumbsDataProps = {
    backgroundImage: "https://gwd-website.b-cdn.net/lightning/banner-2222.jpeg",
    title: "Privacy Policy",
    breadcrumbs: [
        { label: "Home", link: "/", active: false },
        { label: "Privacy Policy", link: "privacy-policy", active: true },
    ],
};

export const metadata: MetaDataProps = {
    title: "Privacy Policy | Lightning Tree Service LLC",
};

export default function PrivacyPolicy() {
    return (
        <>
        <TopBar />
        <Header />
            <PageHeading data={BreadcrumbsData} />
            <div className="cs_height_70 cs_height_lg_50" />
            <div className="container">
                <p className="last-updated">
                    Last Updated: {new Date().toDateString().slice(3)}
                </p>
                <p>
                    At <strong>Lightning Tree Service LLC</strong>, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard the information you provide through our website and service requests.
                </p>
                <div className="cs_text_block_wrapper">
                    <div className="cs_text_block">
                        <h2 className="cs_fs_32">1. Information We Collect</h2>
                        <ul className="cs_mp_0">
                            <li>
                                <strong>Contact Information:</strong> When you request a free estimate, we collect your name, phone number, email address, and physical address to provide accurate quotes and scheduling.
                            </li>
                            <li>
                                <strong>Usage Data:</strong> We may collect anonymous information about how you interact with our site (e.g., pages visited, time spent) to improve our online experience.
                            </li>
                            <li>
                                <strong>Cookies:</strong> Our website uses cookies to enhance navigation and analyze site traffic through tools like Google Analytics.
                            </li>
                        </ul>
                    </div>

                    <div className="cs_text_block">
                        <h2 className="cs_fs_32">2. How We Use Your Information</h2>
                        <ul className="cs_mp_0">
                            <li>To provide professional tree care estimates and services.</li>
                            <li>To communicate regarding scheduled appointments or emergencies.</li>
                            <li>To send occasional service reminders or company updates (if opted in).</li>
                        </ul>
                    </div>

                    <div className="cs_text_block">
                        <h2 className="cs_fs_32">3. Data Sharing</h2>
                        <p>
                            We value your trust. We do not sell, trade, or rent your personal data to third parties. We only share information:
                        </p>
                        <ul className="cs_mp_0">
                            <li>To comply with legal requirements or safety regulations.</li>
                            <li>With essential service partners (e.g., scheduling software) under strict confidentiality.</li>
                        </ul>
                    </div>

                    <div className="cs_text_block">
                        <h2 className="cs_fs_32">4. Third-Party Services</h2>
                        <p>
                            Our site may include links to third-party services (such as Google Maps or social media). These platforms have their own privacy policies, and we recommend reviewing them.
                        </p>
                    </div>

                    <div className="cs_text_block">
                        <h2 className="cs_fs_32">5. Data Security</h2>
                        <p>
                            We implement industry-standard security measures to protect your personal information from unauthorized access. However, please remember that no method of transmission over the internet is 100% secure.
                        </p>
                    </div>

                    <div className="cs_text_block">
                        <h2 className="cs_fs_32">6. Contact Us</h2>
                        <p>
                            If you have any questions regarding this Privacy Policy or how we handle your data, please contact us at <strong>info@lightningtreeservicellc.com</strong> or call <strong>360-980-7886</strong>.
                        </p>
                    </div>
                </div>
            </div>
            <div className="cs_height_70 cs_height_lg_50" />
            <Footer />
        </>
    );
}