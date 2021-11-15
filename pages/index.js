import Card from "../components/Card";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import SocialIcons from "../components/SocialIcons";
import Testimonal from "../components/Testimonal";

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <main className="flex flex-col">
                <Card
                    img="/images/img/image-transform.jpg"
                    heading="Transform your brand"
                    paragraph=" We are a full service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you."
                    linkBorder="border-yellow-200"
                    imgOrder="lg:order-1"
                />
                <Card
                    img="/images/img/image-stand-out.jpg"
                    heading="Transform your brand"
                    paragraph=" We are a full service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you."
                    linkBorder="border-red-300"
                />

                <section className="grid lg:grid-cols-2">
                    <ServiceCard src="/images/img/image-graphic-design.jpg">
                        <h2 className="text-2xl font-Fraunces text-green-900 text-center whitespace-nowrap">
                            Graphic Design
                        </h2>
                        <p className="text-green-900 font-Barlow my-4 text-center max-w-md">
                            Great design makes you memorable. We deliver artwork
                            that underscores your brand message and captures
                            potential client's attention
                        </p>
                    </ServiceCard>
                    <ServiceCard src="/images/img/image-photography.jpg">
                        <h2 className="text-2xl font-Fraunces text-blue-900  text-center whitespace-nowrap">
                            Photography
                        </h2>
                        <p className="text-blue-900 font-Barlow my-4 text-center max-w-md">
                            increase your credibility by getting the most
                            studding, high-quality photos that improve your
                            business image
                        </p>
                    </ServiceCard>
                </section>

                <h2 className="font-Fraunces my-16 text-center text-gray-400 text-lg uppercase tracking-widest">
                    Client Testimonals
                </h2>

                <section className="grid gap-4 lg:grid-cols-3">
                    <Testimonal
                        src="/images/image-emily.jpg"
                        testimonal="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
                        name="Emily R."
                        role="Marketing Director"
                    />
                    <Testimonal
                        src="/images/image-jennie.jpg"
                        testimonal="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
                        name="Thomas S."
                        role="Chief Operating Officer"
                    />
                    <Testimonal
                        src="/images/image-thomas.jpg"
                        testimonal="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
                        name="Jennie F."
                        role="Business Owner"
                    />
                </section>

                <section className="grid grid-cols-2 lg:grid-cols-4 mt-20">
                    <img
                        src="/images/img/image-gallery-milkbottles.jpg"
                        alt="milkbottles"
                    />
                    <img
                        src="/images/img/image-gallery-orange.jpg"
                        alt="orange"
                    />
                    <img src="/images/img/image-gallery-cone.jpg" alt="cone" />
                    <img
                        src="/images/img/image-gallery-sugarcubes.jpg"
                        alt="sugarcubes"
                    />
                </section>
            </main>
            <footer className="bg-green-200 flex flex-col items-center p-16 ">
                <h2 className="text-3xl font-Fraunces text-green-700">
                    Sunnyside
                </h2>
                <div className="flex space-x-10 mt-6 text-green-700 font-Barlow">
                    <span>About</span>
                    <span>Services</span>
                    <span>Projects</span>
                </div>

                <div className="mt-16">
                    <SocialIcons />
                </div>
            </footer>
        </>
    );
};

export default Home;
