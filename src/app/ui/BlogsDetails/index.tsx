import Link from "next/link";
import BlogCommentForm from "../Forms/BlogCommentForm";
import Image from "next/image";

export default function BlogDetailsSection({ data }: { data: any }) {
    if (!data) return null;

    return (
        /* Cambiamos col-lg-8 por col-lg-10 u 8 con offset para centrarlo si no hay sidebar */
        <div className="col-lg-8 offset-lg-2"> 
            <div className="cs_post cs_style_1 cs_type_1">
                {/* Imagen Principal - Ahora con un aspecto más cinematográfico */}
                <div className="cs_post_thumb cs_radius_15 overflow-hidden mb-5">
                    <Image
                        src={data.image || data.postThumb || "/assets/img/post_1.jpg"}
                        alt="Post"
                        width={1200}
                        height={700}
                        className="w-100 cs_radius_15 object-cover transition-transform duration-500 hover:scale-105"
                        priority
                    />
                </div>

                <div className="cs_post_info">
                    {/* Meta Info */}
                    <div className="cs_post_meta cs_style_1 cs_ternary_color cs_semi_bold cs_primary_font mb-3">
                        <span className="cs_posted_by">{data.date}</span>
                        {data.category && (
                            <span className="cs_post_avatar ms-2 border-start ps-2">
                                {typeof data.category === 'string' ? data.category : data.category.title}
                            </span>
                        )}
                    </div>

                    {/* Título con más peso visual */}
                    <h1
                        className="cs_post_title cs_fs_48 cs_bold mb-4"
                        dangerouslySetInnerHTML={{ __html: data.title }}
                    ></h1>

                    {/* Contenido principal con mejor espaciado entre párrafos */}
                    <div className="cs_post_content cs_fs_18 cs_lh_base">
                        {Array.isArray(data.content) ? (
                            data.content.map((item: any, index: number) => {
                                if (item.type === "p") return <p key={index} className="mb-4">{item.text}</p>;
                                if (item.type === "blockquote") {
                                    return (
                                        <blockquote key={index} className="cs_blockquote my-5 p-4 border-start border-4">
                                            <p className="mb-2 italic">{item.quote}</p>
                                            <cite className="cs_fs_14 text-uppercase">— {item.author}</cite>
                                        </blockquote>
                                    );
                                }
                                return null;
                            })
                        ) : (
                            <div className="cs_blog_html_content mb-5" dangerouslySetInnerHTML={{ __html: data.content }} />
                        )}
                    </div>

                    {/* Galería de imágenes secundarias */}
                    {data.images && Array.isArray(data.images) && (
                        <div className="row mt-5">
                            {data.images.map((img: string, index: number) => (
                                <div className="col-md-6 mb-4" key={index}>
                                    <Image
                                        src={img}
                                        alt="Landscape project"
                                        width={600}
                                        height={400}
                                        className="cs_radius_15 w-100 object-cover shadow-sm"
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Secciones detalladas */}
                    {data.sections && data.sections.map((section: any, index: number) => (
                        <div key={index} className="mt-5">
                            <h3 className="cs_fs_28 cs_bold mb-3" dangerouslySetInnerHTML={{ __html: section.heading }}></h3>
                            <p className="cs_fs_18" dangerouslySetInnerHTML={{ __html: section.paragraph }}></p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Separador visual antes del formulario */}
            <hr className="my-5 opacity-10" />

            {/* <div className="cs_comment_section">
                <h2 className="cs_fs_32 cs_bold mb-2">{data.formTitle || "Leave a Comment"}</h2>
                <p className="mb-4 text-muted">{data.formNote || "Your email address will not be published."}</p>
                <BlogCommentForm />
            </div> */}
        </div>
    );
}