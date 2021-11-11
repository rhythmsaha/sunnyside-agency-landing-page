const Hero = () => {
    return (
        <section className="overflow-hidden relative">
            <img
                src="/images/img/image-header.jpg"
                alt=""
                className="object-cover h-[55vh] w-full lg:h-auto lg:w-full"
            />
            <div className="absolute top-[12vh] lg:top-[15vh] w-full flex flex-col items-center">
                <h1 className="text-white font-Fraunces text-4xl text-center uppercase tracking-widest">
                    We are creatives
                </h1>
                <img
                    src="/images/icon-arrow-down.svg"
                    alt="arrow down"
                    className="mt-4 lg:mt-44 h-36 object-contain"
                />
            </div>
        </section>
    );
};

export default Hero;
