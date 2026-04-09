import { BreadCrumbsDataProps } from "@/app/types";
import Link from "next/link";

interface PageHeadingProps {
    data: BreadCrumbsDataProps;
}

export default function PageHeading({ data }: PageHeadingProps) {
    return (
        <>
            <section
                className="cs_page_heading cs_style_1 cs_bg_filed cs_heading_bg"
               style={{ 
    // Opacidad 1.0 (100% negro)
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${data.backgroundImage})`,
    backgroundColor: 'black' // Refuerzo por si el gradiente falla
}}
            >
                <div className="container">
                    <ol className="breadcrumb">
                        {data.breadcrumbs.map((item, index) => (
                            <li
                                key={index}
                                className={`breadcrumb-item ${item.active ? "active" : ""}`}
                            >
                                {item.link ? (
                                    <Link href={item.link}>{item.label}</Link>
                                ) : (
                                    item.label
                                )}
                            </li>
                        ))}
                    </ol>
                    <h1
                        className="cs_page_title mb-0 cs_fs_80"
                        data-aos="fade-up"
                        // Asegúrate de que el contenido de data.title sea seguro
                        dangerouslySetInnerHTML={{ __html: data.title }}
                    ></h1>
                </div>
            </section>
        </>
    );
}