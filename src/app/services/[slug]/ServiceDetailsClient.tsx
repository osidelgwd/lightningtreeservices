"use client";
import AOSInit from "@/app/helper/AosInit";
import Header from "@/app/ui/Header/Header";
import Footer from "@/app/ui/Footer/Footer";
import ServiceDetailsSection from "@/app/ui/ServiceDetails";
import WorkingProcess from "@/app/ui/WorkingProcess";
import TestimonialSection from "@/app/ui/TestimonialSection";
import CardSection from "@/app/ui/CardSection";

export default function ServiceDetailsClient({ 
    data, 
    workingProcessData, 
    testimonialData, 
    cardData 
}: any) {
    return (
        <>
            <Header />
            <main>
                <ServiceDetailsSection data={data} />
                <WorkingProcess data={workingProcessData} />
                <TestimonialSection data={testimonialData} />
                <CardSection data={cardData} bgColor={"cs_color_1"} />
            </main>
            <Footer />
            <AOSInit />
        </>
    );
}