import Navbar from "../Components/Navbar";

const Hero = () => {
    return (
        <>
            <article className="">
                <Navbar />
                <section className="Hero bg-background w-full h-[100dvh]"></section>
                <section className="Feature"></section>
                <section className="FeaturesList"></section>
                <section className="Testimonial"></section>
                <section className="CallToAction"></section>
                <section className="Footer"></section>
            </article>
        </>
    );
}
 
export default Hero;