import SecurityIcon from '@mui/icons-material/Security';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer shadow-xl">
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className="ml-5 flex flex-col flex-1">
            <h3 className="mt-2 text-black text-lg">{title}</h3>
            <p className="my-2 text-black text-sm md:w-9/12">{subtitle}</p>
        </div>
    </div>
);

const Services = () => {
    return (
        <div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">
            <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items-start">
                    <h1 className="text-black text-3xl sm:text-5xl py-2 text-gradient">Services that we 
                    <br />
                    continue to improve.</h1>
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-start items-center">
                <ServiceCard
                    color="bg-[#2952e3]"
                    title="Security guaranteed"
                    icon={<SecurityIcon fontSize="21" className="text-white" />}
                    subtitle="Security is guaranteed. We always maintain privacy and quality of our products"
                />
                <ServiceCard
                    color="bg-[#8945F8]"
                    title="Best exchange rates"
                    icon={<SearchIcon fontSize="21" className="text-white" />} 
                    subtitle="Security is guaranteed. We always maintain privacy and quality of our products"
                />
                <ServiceCard
                    color="bg-[#f84450]"
                    title="Fastest transactions"
                    icon={<FavoriteIcon fontSize="21" className="text-white" />}
                    subtitle="Security is guaranteed. We always maintain privacy and quality of our products"
                />
            </div>
        </div>
    );
}

export default Services;