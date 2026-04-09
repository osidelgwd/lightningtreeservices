"use client";
import { TestimonialDataProps } from "@/app/types";
import { useEffect, useRef } from "react";
import { Navigation, Pagination } from "swiper/modules"; // Añadimos Pagination para un look más moderno
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperInstance, NavigationOptions } from "swiper/types";
import { Icon } from "@iconify/react"; // Asegúrate de tener instalado @iconify/react o usa SVGs

interface TestimonialSectionProps {
    data: TestimonialDataProps;
}

export default function TestimonialSection({ data }: TestimonialSectionProps) {
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);
    const swiperRef = useRef<SwiperInstance | null>(null);

    useEffect(() => {
        if (swiperRef.current) {
            const swiper = swiperRef.current;
            if (swiper.params && typeof swiper.params.navigation !== "boolean") {
                (swiper.params.navigation as NavigationOptions).prevEl = prevRef.current;
                (swiper.params.navigation as NavigationOptions).nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
            }
        }
    }, []);

    return (
        <section className="cs_gray_bg cs_shape_wrap">
            <div className="cs_height_100 cs_height_lg_70" />
            <div className="container">
                <div className="text-center">
                    <div className="cs_section_heading cs_style_1">
                        <h3
                            className="cs_brackets_title cs_normal cs_fs_16 mb-0"
                            dangerouslySetInnerHTML={{ __html: data.sectionTitle }}
                            data-aos="fade-down"
                        ></h3>
                        <div className="cs_height_10" />
                        {/* Badge de Google Reviews */}
                        <div className="d-flex align-items-center justify-content-center gap-2" data-aos="fade-up">
                            <Icon icon="logos:google-icon" width="20" />
                            <span className="cs_bold">Rating 5.0</span>
                            <div className="cs_rating_stars" style={{ color: "#FABB05", display: 'flex' }}>
                                {[...Array(5)].map((_, i) => (
                                    <Icon key={i} icon="fa6-solid:star" width="14" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs_height_64 cs_height_lg_50" />

                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={24}
                            slidesPerView={1} // Una reseña a la vez para que se lea bien el texto largo de Google
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            speed={800}
                            loop={true}
                            className="cs_slider cs_style_1"
                        >
                            {data.testimonials.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="cs_testimonial cs_style_1 text-center"
                                        data-aos="fade-up"
                                    >
                                        {/* Estrellas doradas en cada slide */}
                                        <div className="mb-3" style={{ color: "#FABB05" }}>
                                            {[...Array(5)].map((_, i) => (
                                                <Icon key={i} icon="fa6-solid:star" width="18" className="me-1" />
                                            ))}
                                        </div>
                                        
                                        <blockquote
                                            className="cs_testimonial_blockquote cs_heading_color cs_fs_24 cs_bold cs_mb_30"
                                            style={{ fontStyle: 'italic', lineHeight: '1.4' }}
                                            dangerouslySetInnerHTML={{ __html: `"${item.text}"` }}
                                        />
                                        
                                        <div className="cs_testimonial_meta">
                                            <h4 className="cs_testimonial_avatar cs_bold cs_fs_18 cs_mb_2 text-uppercase">
                                                {item.name}
                                            </h4>
                                            <p className="cs_testimonial_avatar_designation mb-0" style={{ color: '#666' }}>
                                                <Icon icon="material-symbols:verified-user" className="me-1 text-primary" />
                                                {item.designation}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Flechas de Navegación */}
                        <div className="cs_slider_arrows cs_style_2">
                            <div className="cs_left_arrow cs_heading_color" ref={prevRef} style={{ cursor: "pointer" }}>
                                <Icon icon="fa6-solid:chevron-left" />
                            </div>
                            <div className="cs_right_arrow cs_heading_color" ref={nextRef} style={{ cursor: "pointer" }}>
                                <Icon icon="fa6-solid:chevron-right" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cs_height_100 cs_height_lg_70" />
        </section>
    );
}