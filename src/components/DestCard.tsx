import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Heart, Bookmark } from "lucide-react";
import { useState } from "react";

export interface DestCardProps {
    id: string;
    userName: string;
    createdDate: string;
    title: string;
    summary: string;
    tags: {
    day: number;
    vibes: string;
    transportation: string;
    };
    destinations: string[];
    likesCount: number;
    isLiked: boolean;
    isBookmarked: boolean;
    image: string,
    }


export const DestCard = ({
    id,
    userName,
    createdDate,
    title,
    summary,
    tags,
    destinations,
    likesCount,
    isLiked,
    isBookmarked,
    image
}: DestCardProps) => {
    const [liked, setLiked] = useState(isLiked);
    const [likes, setLikes] = useState(likesCount);
    const [bookmarked, setBookmarked] = useState(isBookmarked);

    const toggleLike = () => {
        setLiked(!liked);
        setLikes((prev) => prev + (liked ? -1 : 1));
    };

    const toggleBookmark = () => {
        setBookmarked(!bookmarked);
    };

    return (
        <Card className="p-4 rounded-xl shadow-md flex flex-col md:flex-row gap-4 max-w-2xl">
            {/* Left Image */}
            <img
                src={image}
                alt={title}
                className="w-full md:w-5/12 h-full object-cover rounded-md"
            />

            {/* Right Content */}
            <div className="flex flex-col justify-between flex-1">
                <div>
                    {/* Poster Info */}
                    <div className="flex justify-between text-[0.55rem] text-gray-400 mb-1">
                        <span>posted by <strong className="font-semibold">{userName}</strong></span>
                        <span>{createdDate}</span>
                    </div>
                    <h3 className="text-3xl font-bold mt-3"> {title} </h3>
                    <p className="text-gray-600 text-[0.8rem] mb-3 mt-2">{summary}</p>

                    {/* Tags */}
                    <div className="flex gap-2 flex-wrap mb-3 text-white">
                        <Badge className="bg-yellow-500 px-3 py-1 rounded-full">
                            {tags.day} days
                        </Badge>
                        <Badge className="bg-green-600 px-3 py-1 rounded-full">
                            {tags.vibes.toLowerCase()}
                        </Badge>
                        <Badge className="bg-red-500 px-3 py-1 rounded-full">
                            {tags.transportation.toLowerCase()}
                        </Badge>
                    </div>


                    {/* Destinations */}
                    <div>
                        <p className="mb-1 font-semibold">Destinations</p>
                        <ul className="list-disc list-inside text-xs pl-3 text-gray-600">
                            {destinations.map((place, idx) => (
                                <li key={idx}>{place}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer: Likes & Bookmark */}
                <div className="flex items-center justify-end mt-4 gap-3">
                    <div className="flex gap-2">
                        <button
                        onClick={toggleLike}
                        className="flex items-center text-gray-600 text-sm hover:opacity-80 cursor-pointer"
                        >
                            <Heart
                            size={16}
                            className={liked ? "fill-red-500 text-red-500" : ""}
                            />
                        </button>
                        <span className="text-xs">{likes} likes</span>
                    </div>
                    <button
                        onClick={toggleBookmark}
                        className="hover:opacity-80 cursor-pointer"
                    >
                        <Bookmark
                        size={18}
                        className={bookmarked ? "fill-black text-black" : "text-gray-500"}
                        />
                    </button>
                </div>

            </div>
        </Card>
  );
};
