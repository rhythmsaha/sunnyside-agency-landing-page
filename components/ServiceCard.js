const ServiceCard = ({ src, children }) => {
    return (
        <div className="relative w-full min-h-[600px] ">
            <img
                src={src}
                alt="graphic design"
                className="h-full w-full object-cover"
            />

            <div className="absolute bottom-0 w-full z-10 p-10 flex flex-col items-center">
                {children}
            </div>
        </div>
    );
};

export default ServiceCard;
