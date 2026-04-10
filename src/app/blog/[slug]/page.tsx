"use client";
import { useParams } from "next/navigation";
import PageHeading from "@/app/ui/PageHeading";
import BlogDetails from "@/app/ui/BlogsDetails";
import BlogSidebar from "@/app/ui/Sidebar2/BlogSidebar";
import Header from "@/app/ui/Header/Header";
import Footer from "@/app/ui/Footer/Footer";

const blogDetailsContent: any = {
    // 1. Coincide con /blog/science-of-pruning-timing
    "science-of-pruning-timing": {
        title: "The Science of Pruning: Why Timing is Everything",
        image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.59%20PM.jpeg",
        date: "10 Apr 2026",
        category: "Tree Care",
        content: `
            <p>Professional tree pruning is far more than a simple cosmetic haircut for your landscape. At <strong>Lightning Tree Service LLC</strong>, we treat every cut as a biological intervention. In the Pacific Northwest, understanding the seasonal cycle of your trees is the difference between a thriving canopy and a hazardous one. Pruning at the right time—typically during the dormant winter months or early spring—allows the tree to direct its energy toward healing the "wound" created by the cut before pests and diseases become active in the warmer months.</p>

            <h4 style="color: #374836">The Structural Integrity of the Canopy</h4>
            <p>When we perform structural pruning, we are looking for more than just dead branches. We identify "included bark" and codominant stems—essentially two trunks competing for the same space. Without professional intervention, these stems act as a wedge, eventually splitting the tree down the middle during a heavy wind event. By thinning the crown, we reduce the "sail effect." In high winds, a dense canopy acts like a solid sail on a boat, catching the wind and putting immense leverage on the root system. A professionally thinned tree allows the wind to pass through the branches, significantly reducing the risk of a total tip-over.</p>

            <h4 style="color: #374836">Promoting Long-Term Vigor</h4>
            <p>Proper pruning also facilitates better light penetration and airflow. This is crucial for preventing fungal infections like Anthracnose or Powdery Mildew, which thrive in the damp, shaded interiors of overgrown trees. When sunlight can reach the inner leaves and the ground below, the entire ecosystem of your yard improves. Furthermore, precision cuts promote the growth of "callus tissue," the tree's natural way of sealing itself. Improper cuts, often seen in DIY projects, leave "stubs" that lead to internal rot and hollow cavities. Trusting a professional arborist ensures that every cut is placed exactly where the tree can best recover, protecting your property value and the safety of your home for decades to come.</p>
            
            <p>In addition to safety, pruning encourages fruit production and flowering. By removing old wood, you stimulate the growth of new, healthy shoots that will bear the brunt of next season's growth. Our team uses sterilized equipment to prevent the cross-contamination of diseases between trees, a detail often overlooked by non-professionals but critical for the survival of heritage oaks and ornamental maples.</p>
        `,
    },

    // 2. Coincide con /blog/dangerous-trees-removal-signs
    "dangerous-trees-removal-signs": {
        title: "When to Say Goodbye: Signs of a Hazardous Tree",
        image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.17.30%20PM.jpeg",
        date: "08 Apr 2026",
        category: "Safety",
        content: `
            <p>Deciding to remove a tree is never easy, but at <strong>Lightning Tree Service LLC</strong>, we prioritize the safety of your family and your structures above all else. In Oregon, trees grow tall and heavy, and while they provide beauty and shade, they can quickly become hazardous liabilities if they are diseased or structurally compromised. Recognizing the warning signs early can save you thousands of dollars in emergency repairs and insurance deductibles.</p>

            <h4 style="color: #374836">1. Root Plate Heaving and Fungal Growth</h4>
            <p>The most dangerous signs are often at the base of the tree. If you notice the soil lifting on one side of the tree, or if there are "conks" (shelf-like mushrooms) growing near the root flare, this is a clear indication of internal root rot. The roots are the anchors of the tree; if they are decaying, the tree is essentially a giant pillar waiting for the right gust of wind to fall. Unlike branch issues, root rot cannot be "cured," and removal is typically the only safe option.</p>

            <h4 style="color: #374836">2. Hollow Trunks and Vertical Cracks</h4>
            <p>A tree can appear green and healthy on the outside while being completely hollow on the inside. Large vertical cracks that reach deep into the wood indicate that the tree's structural cylinder is failing. We use specialized assessment techniques to determine if the "shell" of the tree is thick enough to support its weight. If more than 30% of the trunk is hollow or decayed, the tree is high-risk.</p>
            
            <p>Safe removal involves using advanced rigging to lower sections piece by piece, ensuring that even as the tree is dismantled, your roof and power lines remain untouched by the heavy timber. Our crews are trained in high-angle removals and crane-assisted extractions for those extra-large Douglas Firs that lean dangerously over structures. We don't just cut and drop; we manage the energy of the falling wood to ensure a zero-impact removal every single time.</p>
        `,
    },

    // 3. Coincide con /blog/eliminating-blackberry-thickets
    "eliminating-blackberry-thickets": {
        title: "Defeating Blackberries: Why Root Extraction is Key",
        image: "https://gwd-website.b-cdn.net/lightning/WhatsApp%20Image%202026-04-06%20at%207.26.19%20PM.jpeg",
        date: "05 Apr 2026",
        category: "Invasive Species",
        content: `
            <p>The Himalayan Blackberry is a relentless invader in the Pacific Northwest. Anyone who has lived here long enough knows that simply cutting these bushes back with a weed-whacker is a temporary fix at best. Within weeks, the thickets return—often thicker and more aggressive than before. At <strong>Lightning Tree Service LLC</strong>, we specialize in land reclamation by addressing the root of the problem, literally.</p>

            <h4 style="color: #374836">The Biology of the "Mora"</h4>
            <p>Blackberries spread through a complex system of underground rhizomes and "tip-rooting" canes. When a cane touches the ground, it immediately starts a new root system. This means a single plant can swallow an entire backyard in a few seasons. When you mow blackberries, you are only removing the solar panels (the leaves). The massive energy store in the root crown remains untouched, prompting the plant to send up multiple new shoots for every one you cut.</p>

            <h4 style="color: #374836">Our Professional Reclamation Process</h4>
            <p>Our process involves high-torque machinery to mulch the overhead mass, followed by mechanical or manual extraction of the root balls. We don't just clear the space; we prepare the soil for its next life. Removing these thickets does more than improve your view; it eliminates breeding grounds for rodents and significantly reduces the fire hazard around your home. Once the land is cleared and the roots are gone, we can install river rock, sod, or mulch to ensure the "Mora" never finds its way back into your garden. Reclaiming your land increases property value and allows you to actually use your outdoor space without the constant battle against thorns.</p>
        `,
    },

    // 4. Coincide con /blog/fencing-styles-durability
    "fencing-styles-durability": {
        title: "Fencing Styles That Withstand PNW Weather",
        image: "https://gwd-website.b-cdn.net/lightning/DADADASDA.jpeg",
        date: "02 Apr 2026",
        category: "Hardscaping",
        content: `
            <p>In the Pacific Northwest, a fence is constantly under attack from moisture, moss, and wind. At <strong>Lightning Tree Service LLC</strong>, we don't just build fences for the look; we build them for endurance. Choosing the right style and material is crucial for ensuring that your investment doesn't rot or lean after just a few years of our intense rain cycles.</p>

            <h4 style="color: #374836">Cedar: The Gold Standard for the NorthWest</h4>
            <p>Western Red Cedar is our preferred material for a reason. Its natural oils make it resistant to rot and insect infestation. However, even the best wood will fail if it's in direct contact with wet soil. That's why we use pressure-treated 4x4 posts set in concrete with a gravel base to ensure water drains away from the wood. This "foundation-first" approach is what separates a professional fence from a DIY project that leans after the first storm.</p>

            <h4 style="color: #374836">Privacy and Strength</h4>
            <p>Modern horizontal fences are trending for their sleek look, but they require extra structural support to prevent sagging over time. Classic vertical board-on-board designs offer the best wind-break capabilities, allowing some air to pass through while maintaining total privacy. We also offer "Picture Frame" styles that protect the end-grain of the wood from rain, significantly extending the lifespan of the fence. Whether you are looking for security, privacy, or purely aesthetic upgrades, our custom-built solutions are designed to complement your landscape and provide a durable boundary for your home.</p>
        `,
    }
};

export default function BlogDetailsPage() {
    const params = useParams();
    const slug = params.slug as string;
    const post = blogDetailsContent[slug];

    if (!post) {
        return (
            <div className="container py-5 text-center">
                <h2 style={{color: '#374836'}}>Post not found</h2>
                <p>The article you are looking for does not exist or the link is incorrect.</p>
            </div>
        );
    }

    const breadcrumbs = {
        title: post.title,
        backgroundImage: post.image,
        breadcrumbs: [
            { label: "Home", link: "/", active: false },
            { label: "Blog", link: "/blog", active: false },
            { label: post.title, link: "", active: true },
        ],
    };

    return (
        <>
        <Header />
        <main>
            <PageHeading data={breadcrumbs} />
            <section className="cs_blog_details_section">
                <div className="cs_height_100 cs_height_lg_70" />
                <div className="container">
                    <div className="row">
                        {/* Contenido Principal */}
                        <div className="col-lg-8">
                            <BlogDetails data={post} />
                        </div>

                        {/* Sidebar con verde corporativo */}
                        <aside className="col-lg-4 ps-lg-5 mt-5 mt-lg-0">
                            <div className="sticky-top" style={{ top: '100px', zIndex: 10 }}>
                                <BlogSidebar />
                            </div>
                        </aside>
                    </div>
                </div>
                <div className="cs_height_100 cs_height_lg_70" />
            </section>
            </main>
            <Footer />
        </>
    );
}