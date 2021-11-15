const Testimonal = ({ src, testimonal, name, role }) => {
    return (
        <div className="py-4 flex flex-col items-center">
            <div>
                <img
                    src={src}
                    alt="profile-pic"
                    className="rounded-full h-16 block m-auto"
                />
            </div>
            <p className="my-6 px-10 text-center font-Barlow text-gray-500 max-w-lg">
                {testimonal}
            </p>
            <div className="my-4">
                <h2 className="font-extrabold text-2xl font-Fraunces text-center">
                    {name}
                </h2>
                <p className="text-center font-Barlow text-gray-400">{role}</p>
            </div>
        </div>
    );
};

export default Testimonal;
