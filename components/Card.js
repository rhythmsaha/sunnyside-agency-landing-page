import Link from "next/link";

const Card = ({ img, heading, paragraph, linkBorder, imgOrder }) => {
    return (
        <div className="flex flex-col lg:flex-row">
            <img
                src={img}
                alt="banner"
                className={`w-full lg:w-2/4 ${imgOrder}`}
            />

            <div className="p-8 flex flex-col items-center justify-center  min-h-[450px] lg:w-2/4">
                <h2 className="font-Fraunces text-3xl text-center my-2]">
                    {heading}
                </h2>
                <p className="text-gray-400 font-Barlow font-light text-center my-4">
                    {paragraph}
                </p>
                <Link href="/">
                    <a
                        className={`font-Fraunces text-xl border-b-4 rounded-lg  ${linkBorder}`}
                    >
                        Learn More
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default Card;
