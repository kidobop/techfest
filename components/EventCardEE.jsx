import Link from "next/link";
import Image from "next/image";

const EventCard = ({
  id,
  eventname,
  description,
  date,
  imageUrl,
  registerUrl,
}) => {
  return (
    <Link href={`/dept/electrical-engineering/${id}`}>
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={eventname}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={false}
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">{eventname}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-blue-400">{date}</span>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.open(registerUrl, "_blank");
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
