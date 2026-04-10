"use client";
import { useParams } from "next/navigation";
import AOSInit from "@/app/helper/AosInit";
import {
    CardDataProps,
    ServiceDetailsProps,
    TestimonialDataProps,
    WorkingProcessDataProps,
} from "@/app/types";
import CardSection from "@/app/ui/CardSection";
import Footer2 from "@/app/ui/Footer/Footer2";
import Header2 from "@/app/ui/Header/Header2";
import ServiceDetailsSection from "@/app/ui/ServiceDetails";
import TestimonialSection1 from "@/app/ui/TestimonialSection/TestimonialSection1";
import WorkingProcess from "@/app/ui/WorkingProcess";
import Header from "@/app/ui/Header/Header";
import Footer from "@/app/ui/Footer/Footer";
import TestimonialSection from "@/app/ui/TestimonialSection";

const allServicesInfo: Record<string, ServiceDetailsProps> = {
    "tree-trimming-pruning": {
        breadcrumb: [
            { label: "Home", link: "/", active: false },
            { label: "Services", link: "/services", active: false },
            { label: "Trimming & Pruning", link: "/services/tree-trimming-pruning", active: true },
        ],
        titleHighlight: "<span>EXPERT STRUCTURAL</span> TRIMMING & PRUNING",
        video: {
            videoUrl: "https://www.youtube.com/embed/rRid6GCJtgc",
            backgroundImage: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.59%20PM.jpeg",
        },
        cta: {
            title: "Protect Your Tree's Future",
            buttonUrl: "/contact",
            buttonText: "Schedule Pruning",
            backgroundImage: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.59%20PM.jpeg",
        },
        description: `Professional tree trimming is a fundamental practice for maintaining the longevity and safety of your landscape. At <strong>Lightning Tree Service LLC</strong>, we view pruning as both a science and an art. Our certified team analyzes the specific growth patterns of each species to determine the most effective approach, whether it's crown thinning to improve airflow or structural pruning to remove hazardous deadwood. <br /><br />
        In the Pacific Northwest, trees face intense wind and rain. Overgrown canopies act like sails, catching wind and putting immense pressure on the trunk and root system. By strategically reducing the weight of heavy limbs and removing crossing branches, we significantly lower the risk of limb failure during storm season. This proactive care not only prevents property damage but also enhances the natural beauty of your trees, allowing more sunlight to reach your lawn and surrounding plants. <br /><br />
        Our comprehensive process includes 'cleaning' the interior of the tree to eliminate diseased or dying wood that could harbor pests. We use professional-grade equipment and follow strict industry safety standards to ensure every cut is precise, promoting rapid healing and preventing long-term decay. From ornamental Japanese Maples to massive Douglas Firs, our pruning services are designed to help your trees thrive for generations while keeping your home and family safe from falling debris.`,
        iconBoxes: [
            { iconClass: "bi bi-scissors", title: "Precision Cuts" },
            { iconClass: "bi bi-wind", title: "Storm Resistance" },
            { iconClass: "bi bi-sun", title: "Light & Airflow" },
            { iconClass: "bi bi-shield-check", title: "Property Safety" },
        ],
    },
    "tree-removal": {
        breadcrumb: [
            { label: "Home", link: "/", active: false },
            { label: "Services", link: "/services", active: false },
            { label: "Tree Removal", link: "/services/tree-removal", active: true },
        ],
        titleHighlight: "<span>SAFE & STRATEGIC</span> TREE REMOVAL",
        video: {
            videoUrl: "https://www.youtube.com/embed/rRid6GCJtgc",
            backgroundImage: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.30%20PM.jpeg",
        },
        cta: {
            title: "Hazardous Tree Specialists",
            buttonUrl: "/contact",
            buttonText: "Request Removal",
            backgroundImage: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.30%20PM.jpeg",
        },
        description: `Tree removal is a high-stakes task that requires meticulous planning, advanced rigging techniques, and years of hands-on experience. At <strong>Lightning Tree Service LLC</strong>, we specialize in the safe extraction of trees that are dead, diseased, or posing a direct threat to structures and power lines. When a tree becomes a liability rather than an asset, our team steps in to manage the risk with surgical precision. <br /><br />
        Every removal project begins with a comprehensive site evaluation. We identify potential hazards such as utility lines, tight property boundaries, and fragile landscaping. Our experts utilize high-strength rigging systems and professional climbing techniques to dismantle large trees piece by piece. This 'controlled descent' method ensures that even the most massive trunks are brought down without a single scratch to your home or yard. We take pride in our ability to work in confined urban spaces where traditional felling is impossible. <br /><br />
        Beyond the technical extraction, we handle the entire cleanup process. We don't just leave a mess behind; our crew efficiently processes all wood and debris, leaving your site clean and ready for its next use. Whether you are clearing land for new construction or removing a hollow oak that leans toward your bedroom, we provide the peace of mind that comes with professional, fully insured service. Our goal is to eliminate the danger quickly and efficiently, allowing you to reclaim your outdoor space with total confidence.`,
        iconBoxes: [
            { iconClass: "bi bi-shield-lock", title: "Full Insurance" },
            { iconClass: "bi bi-truck", title: "Debris Hauling" },
            { iconClass: "bi bi-hazard", title: "Risk Mitigation" },
            { iconClass: "bi bi-house-door", title: "Site Protection" },
        ],
    },
    "fruit-tree-care": {
        breadcrumb: [
            { label: "Home", link: "/", active: false },
            { label: "Services", link: "/services", active: false },
            { label: "Fruit Tree Care", link: "/services/fruit-tree-care", active: true },
        ],
        titleHighlight: "<span>SEASONAL & PRODUCTIVE</span> FRUIT TREE CARE",
        video: {
            videoUrl: "https://www.youtube.com/embed/rRid6GCJtgc",
            backgroundImage: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.59%20PM.jpeg",
        },
        cta: {
            title: "Maximize Your Annual Harvest",
            buttonUrl: "/contact",
            buttonText: "Request Inspection",
            backgroundImage: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.59%20PM.jpeg",
        },
        description: `Fruit trees are a beautiful and productive addition to any landscape, but they require a unique level of attention compared to shade trees. At <strong>Lightning Tree Service LLC</strong>, our Fruit Tree Care program is designed to maximize your harvest while maintaining the structural health of the tree. Many owners overlook the importance of seasonal pruning, which is vital for encouraging the growth of fruiting spurs and ensuring the branches can support the weight of a heavy crop. <br /><br />
        We specialize in apples, cherries, pears, and plums, common to our local climate. Our pruning method focuses on opening up the center of the canopy—often called 'open-center pruning'—to allow maximum sunlight and airflow to reach the developing fruit. This technique reduces the humidity that leads to fungal diseases like scab and mildew. We also identify and remove 'water sprouts' and 'suckers' that drain energy away from fruit production. <br /><br />
        Our team also provides expert advice on soil health and pest management. Timing is everything with fruit trees; pruning at the wrong time of year can invite infection or eliminate next year's crop entirely. By trusting us with your orchard, you ensure that your trees remain vibrant, manageable in size, and incredibly productive. Whether you have a single backyard tree or a small home orchard, our professional care will keep your fruit trees healthy and your baskets full every autumn.`,
        iconBoxes: [
            { iconClass: "bi bi-flower1", title: "Bloom Health" },
            { iconClass: "bi bi-basket", title: "High Yields" },
            { iconClass: "bi bi-bug", title: "Pest Prevention" },
            { iconClass: "bi bi-calendar-check", title: "Seasonal Care" },
        ],
    },
    "yard-clean-up": {
        breadcrumb: [
            { label: "Home", link: "/", active: false },
            { label: "Services", link: "/services", active: false },
            { label: "Yard Clean Up", link: "/services/yard-clean-up", active: true },
        ],
        titleHighlight: "<span>PROFESSIONAL SEASONAL</span> YARD CLEAN UP",
        video: {
            videoUrl: "https://www.youtube.com/embed/rRid6GCJtgc",
            backgroundImage: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.26.19%20PM.jpeg",
        },
        cta: {
            title: "Restore Your Property's Beauty",
            buttonUrl: "/contact",
            buttonText: "Book Clean Up",
            backgroundImage: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.26.19%20PM.jpeg",
        },
        description: `A pristine yard is the hallmark of a well-maintained home, but keeping up with the debris of the Pacific Northwest seasons can be an overwhelming task. At <strong>Lightning Tree Service LLC</strong>, we provide comprehensive Yard Clean Up services that go far beyond simple leaf blowing. We specialize in deep property rejuvenation, removing the accumulated organic matter that can suffocate your lawn and harbor pests during the damp winter months. <br /><br />
        Our service includes the removal of fallen branches, heavy leaf accumulation, and overgrown brush. We also focus on bed cleaning and debris hauling, ensuring that every corner of your landscape is cleared. This is especially important for fire safety and preventing the spread of mold in your garden beds. We utilize professional-grade equipment to process debris efficiently, saving you days of back-breaking labor and dozens of trips to the local landfill. <br /><br />
        A thorough clean-up is the best way to prepare your landscape for new growth in the spring or to protect it before the first frost of winter. We also offer specialized services for post-storm cleanup, helping you clear the mess left by high winds and heavy rain. By delegating this work to us, you reclaim your weekend and ensure that your property maintains its curb appeal year-round. Let us handle the heavy lifting while you enjoy a clean, safe, and beautiful outdoor environment.`,
        iconBoxes: [
            { iconClass: "bi bi-trash3", title: "Full Debris Removal" },
            { iconClass: "bi bi-stars", title: "Curb Appeal" },
            { iconClass: "bi bi-tree", title: "Branch Clearing" },
            { iconClass: "bi bi-patch-check", title: "Pest Control" },
        ],
    },
    "blackberry-removal": {
        breadcrumb: [
            { label: "Home", link: "/", active: false },
            { label: "Services", link: "/services", active: false },
            { label: "Blackberry Removal", link: "/services/blackberry-removal", active: true },
        ],
        titleHighlight: "<span>TOTAL ERADICATION</span> BLACKBERRY REMOVAL",
        video: {
            videoUrl: "https://www.youtube.com/embed/rRid6GCJtgc",
            backgroundImage: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.26.19%20PM.jpeg",
        },
        cta: {
            title: "Reclaim Your Land Today",
            buttonUrl: "/contact",
            buttonText: "Free Estimate",
            backgroundImage: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.26.19%20PM.jpeg",
        },
        description: `Invasive Himalayan Blackberries (Mora) are a constant struggle for property owners in our region. These aggressive bushes can grow up to 20 feet in a single season, quickly swallowing fences, overtaking native gardens, and creating dense, thorny thickets that are impossible to navigate. At <strong>Lightning Tree Service LLC</strong>, we offer more than just a surface-level trim; we provide a permanent eradication solution for these stubborn invaders. <br /><br />
        Standard mowing or weed-whacking only encourages blackberries to grow back thicker and faster. Our removal process is designed to target the plant at its source: the root crown. We begin by using specialized machinery to clear the overhead mass, exposing the ground level. From there, we perform deep root extraction and soil clearing. By removing the energy source of the plant, we significantly reduce the chance of regrowth, allowing you to actually use your yard again without fear of thorns. <br /><br />
        Removing large blackberry patches also eliminates prime breeding grounds for rodents and pests while significantly reducing fire hazards during the dry summer months. Once the area is cleared, your property value increases, and you are left with a blank canvas for new grass, river rock, or garden beds. Don't waste your weekends fighting thorns with inadequate tools—let our professional team handle the heavy lifting and give you back your property once and for all.`,
        iconBoxes: [
            { iconClass: "bi bi-slash-circle", title: "No Regrowth" },
            { iconClass: "bi bi-bounding-box-circles", title: "Land Reclamation" },
            { iconClass: "bi bi-shield-exclamation", title: "Fire Prevention" },
            { iconClass: "bi bi-house-add", title: "Value Boost" },
        ],
    },
    "sod-grass-installation": {
        breadcrumb: [
            { label: "Home", link: "/", active: false },
            { label: "Services", link: "/services", active: false },
            { label: "Sod Installation", link: "/services/sod-grass-installation", active: true },
        ],
        titleHighlight: "<span>INSTANT LUSH GREEN</span> SOD INSTALLATION",
        video: {
            videoUrl: "https://www.youtube.com/embed/rRid6GCJtgc",
            backgroundImage: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.30%20PM.jpeg",
        },
        cta: {
            title: "Transform Your Lawn in 24 Hours",
            buttonUrl: "/contact",
            buttonText: "Start My Lawn",
            backgroundImage: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.30%20PM.jpeg",
        },
        description: `Waiting for grass seeds to sprout can be a frustrating and uncertain process. At <strong>Lightning Tree Service LLC</strong>, we offer a professional Sod and Grass Installation service that provides an 'instant lawn' transformation. Why wait months for a patchy lawn when you can have a lush, vibrant green carpet in a single day? Our process is thorough and focuses on the long-term health of your new turf, starting from the ground up. <br /><br />
        The secret to a successful sod lawn is in the preparation. We begin by removing existing weeds and old grass, followed by professional grading to ensure proper water drainage. We then enrich the soil with high-quality nutrients and amendments to create the perfect foundation for the new roots. Once the ground is perfectly leveled and prepared, we install premium, locally-sourced sod, ensuring tight seams and immediate soil contact for fast rooting. <br /><br />
        A newly installed sod lawn doesn't just look beautiful—it immediately increases your home's value and provides an instant cooling effect for your property. It also helps prevent soil erosion and reduces dust. Our team provides detailed watering and maintenance instructions to ensure your new grass establishes itself quickly and stays healthy for years to come. Whether you're repairing a small section or landscaping an entire new lot, our sod installation is the most efficient way to achieve a perfect lawn.`,
        iconBoxes: [
            { iconClass: "bi bi-clock", title: "Instant Results" },
            { iconClass: "bi bi-droplet-half", title: "Soil Prep" },
            { iconClass: "bi bi-grid-3x3-gap", title: "Premium Sod" },
            { iconClass: "bi bi-graph-up-arrow", title: "Property Value" },
        ],
    },
    "river-rock-gravel": {
        breadcrumb: [
            { label: "Home", link: "/", active: false },
            { label: "Services", link: "/services", active: false },
            { label: "River Rock & Gravel", link: "/services/river-rock-gravel", active: true },
        ],
        titleHighlight: "<span>DURABLE & DECORATIVE</span> ROCK SOLUTIONS",
        video: {
            videoUrl: "https://www.youtube.com/embed/rRid6GCJtgc",
            backgroundImage: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.26.19%20PM.jpeg",
        },
        cta: {
            title: "Upgrade Your Landscape Drainage",
            buttonUrl: "/contact",
            buttonText: "Request Stone Quote",
            backgroundImage: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.26.19%20PM.jpeg",
        },
        description: `River rock and gravel are more than just decorative elements; they are essential tools for a functional and low-maintenance landscape. At <strong>Lightning Tree Service LLC</strong>, we specialize in the professional installation of stone features that solve drainage issues while adding a modern, high-end aesthetic to your property. Stone is the perfect solution for areas where grass struggles to grow or where water tends to pool during Oregon's rainy months. <br /><br />
        We offer a wide variety of stones, from smooth river rocks for dry creek beds to crushed gravel for stable pathways and driveways. Our installation process involves deep excavation and the placement of heavy-duty weed barrier fabric to ensure your new stone feature remains clean and maintenance-free. By using stones strategically around the base of trees or alongside your home, we help manage moisture runoff, protecting your foundation from water damage and preventing soil erosion. <br /><br />
        For homeowners looking for 'xeriscaping' or low-water landscapes, river rock is an ideal choice. It provides a clean, structured look that requires zero mowing, watering, or fertilizing. Whether you want to create a decorative garden border, a functional French drain, or a beautiful rock path through your backyard, our team has the equipment and expertise to handle the heavy material and provide a level, professional finish that lasts a lifetime.`,
        iconBoxes: [
            { iconClass: "bi bi-water", title: "Drainage Control" },
            { iconClass: "bi bi-gem", title: "Modern Design" },
            { iconClass: "bi bi-shield-check", title: "Erosion Control" },
            { iconClass: "bi bi-infinity", title: "Low Maintenance" },
        ],
    },
    "fences-and-pavers": {
        breadcrumb: [
            { label: "Home", link: "/", active: false },
            { label: "Services", link: "/services", active: false },
            { label: "Fences & Pavers", link: "/services/fences-and-pavers", active: true },
        ],
        titleHighlight: "<span>CUSTOM CRAFTED</span> FENCES & PAVERS",
        video: {
            videoUrl: "https://www.youtube.com/embed/rRid6GCJtgc",
            backgroundImage: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.26.19%20PM.jpeg",
        },
        cta: {
            title: "Built for Security and Style",
            buttonUrl: "/contact",
            buttonText: "Plan My Project",
            backgroundImage: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.26.19%20PM.jpeg",
        },
        description: `Enhancing your home's outdoor living space requires a combination of durable materials and expert craftsmanship. At <strong>Lightning Tree Service LLC</strong>, we specialize in high-quality fencing and professional paver installation that transforms functional yards into beautiful retreats. We understand that a fence is not just a boundary—it's about privacy, security, and curb appeal. We build custom wood fences using premium cedar and pressure-treated lumber designed to withstand our damp climate without warping or rotting. <br /><br />
        Our paver services offer a sophisticated alternative to standard cracked concrete. Whether you desire a new patio for summer BBQs, a winding garden path, or a robust stone driveway, pavers provide a flexible and long-lasting solution. We focus heavily on the 'invisible' part of the project: the foundation. Our team performs deep excavation and compaction, installing a multi-layer base of gravel and sand to ensure perfect drainage and prevent sinking or shifting over time. This attention to detail ensures your investment looks as good in ten years as it does on day one. <br /><br />
        By combining our tree services with hardscaping, we offer a unique 'full-property' approach. We can remove a hazardous tree and immediately replace that space with a beautiful stone fire pit or a secure privacy fence. Our team works closely with you to choose colors, textures, and patterns that complement your home's architecture. From modern minimalist designs to classic rustic aesthetics, we bring professional-grade construction to every square inch of your landscape.`,
        iconBoxes: [
            { iconClass: "bi bi-fence", title: "Privacy Fences" },
            { iconClass: "bi bi-bricks", title: "Custom Pavers" },
            { iconClass: "bi bi-trowel", title: "Expert Leveling" },
            { iconClass: "bi bi-shield-lock", title: "Security First" },
        ],
    }
};

const workingProcessData: WorkingProcessDataProps = {
    sectionTitle: "OUR PROFESSIONAL <span>PROCESS</span>",
    subtitle: "PHASE BY PHASE",
    logo: "https://gwd-website.b-cdn.net/lightning/logo2tree.png",
    steps: [
        { title: "01 | Assessment", description: "Detailed evaluation of the service area." },
        { title: "02 | Preparation", description: "Securing the site and equipment." },
        { title: "03 | Execution", description: "Performing the service with precision." },
        { title: "04 | Clean-Up", description: "Restoring your property to pristine condition." },
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

const cardData: CardDataProps = {
    title: "NEED EMERGENCY TREE REMOVAL? <br /> CALL 360-980-7886",
    buttonLink: "tel:3609807886",
    backgroundImage: "https://gwd-website.b-cdn.net/lightning/DADADASDA.jpeg",
    tags: ["Reliable", "Safe", "Professional"],
};

export default function ServiceDetailsPage() {
    const params = useParams();
    const slug = params?.slug as string;

    // Seleccionamos la data basada en el slug, o la de removal por defecto
    const currentServiceData = allServicesInfo[slug] || allServicesInfo["tree-removal"];

    return (
        <>
        <Header />
        <main>
            
            <ServiceDetailsSection data={currentServiceData} />
            <WorkingProcess data={workingProcessData} />
            <TestimonialSection data={testimonialData} />
            <CardSection data={cardData} bgColor={"cs_color_1"} />
        </main>
        <Footer />
            <AOSInit />
        </>
    );
}

