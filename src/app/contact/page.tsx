
import {
    BreadCrumbsDataProps,
    CardDataProps,
    ContractDataProps,
    MetaDataProps,
} from "@/app/types";
import CardSection from "@/app/ui/CardSection";
import ContactSection from "@/app/ui/Contact";
import PageHeading from "@/app/ui/PageHeading";
import Header from "../ui/Header/Header";
import Footer from "../ui/Footer/Footer";
import TopBar from "../ui/Header/TopBar";

// Títulos optimizados para SEO local
export const metadata: MetaDataProps = {
    title: "Free Estimate | Lightning Tree Service LLC - Vancouver, WA",
};

export default function ContactPage() {
    // 1. Configuración de Navegación (Breadcrumbs)
    const BreadcrumbsData: BreadCrumbsDataProps = {
        backgroundImage: "https://gwd-website.b-cdn.net/lightning/DADADASDA.jpeg",
        title: "GET A FREE ESTIMATE",
        breadcrumbs: [
            { label: "Home", link: "/", active: false },
            { label: "Contact", link: "", active: true },
        ],
    };

    // 2. Información de contacto profesional
    const contactData: ContractDataProps = {
        mapTitle: "SEND US A <span>MESSAGE</span>",
        sectionTitle: "GET IN <span>TOUCH</span>",
        contactList: [
            {
                label: "DIRECT EMAIL",
                value: "LightningTreeService@outlook.com",
            },
            {
                label: "OFFICE PHONE",
                value: "360-980-7886",
            },
            {
                label: "SERVICE AREA",
                value: "Vancouver, WA & Surrounding Areas",
            },
        ],
        // URL de Google Maps centrada en el área de servicio (Vancouver, WA)
        locationUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178713.4116905593!2d-122.73033620857501!3d45.67295874258814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950625d8000001%3A0xf6093d567035677!2sVancouver%2C%20WA!5e0!3m2!1sen!2sus!4v1711584000000!5m2!1sen!2sus",
    };

    // 3. Banner de llamado a la acción inferior
const cardData: CardDataProps = {
    backgroundImage: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.18.00%20PM.jpeg",
    tags: ["Removal", "Pruning", "Stump Grinding", "24/7 Service"],
    title: "READY TO PROTECT <br /> AND PRESERVE YOUR TREES?",
    buttonLink: "/contact",
};

    /* CONFIGURACIÓN PARA EMAILJS (En tu archivo .env.local):
       NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_id
       NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_id
       NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_id
    */

    return (
        <>
        <TopBar />
        <Header />
        <main>
            <PageHeading data={BreadcrumbsData} />
            <ContactSection data={contactData} />
            <CardSection data={cardData} />
            </main>
            <Footer />
        </>
    );
}
