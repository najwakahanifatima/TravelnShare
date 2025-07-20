'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Bookmark, Heart, MapPin, ArrowLeft } from 'lucide-react';
import { DestCard, DestCardProps } from '@/components/DestCard';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

interface DetailData {
    name: string;
    description: string;
    image: string;
    mapsLink: string;
}

export default function DestinationDetails() {
    const params = useParams();
    const id = params.id as string;
    const router = useRouter();

    const [card, setCard] = useState<DestCardProps | null>(null);
    const [destinations, setDestinations] = useState<DetailData[]>([]);
    const [related, setRelated] = useState<DestCardProps[]>([]);
    const [loading, setLoading] = useState(true);

    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);
    const [bookmarked, setBookmarked] = useState(false);

    useEffect(() => {
    const fetchData = async () => {
        try {
            const [cardRes, detailRes] = await Promise.all([
                fetch('/data/destinations.json'),
                fetch(`/data/${id}.json`)
            ]);

            const allCards: DestCardProps[] = await cardRes.json();
            const destinationDetails: DetailData[] = await detailRes.json();

            const foundCard = allCards.find((c) => c.id === id);
            if (!foundCard) throw new Error('Card not found');

            const relatedCards = allCards.filter((c) => c.id !== id).slice(0, 2);

            setCard(foundCard);
            setDestinations(destinationDetails);
            setRelated(relatedCards);
            setLiked(foundCard.isLiked);
            setLikes(foundCard.likesCount);
            setBookmarked(foundCard.isBookmarked);
        } catch (err) {
            console.error('Failed to load data:', err);
        } finally {
            setLoading(false);
        }
    };
        fetchData();
    }, [id]);

    if (loading || !card) return <div className="text-center mt-10 text-gray-500">Loading...</div>;

    const toggleLike = (e: React.MouseEvent) => {
        e.preventDefault();
        setLiked(!liked);
        setLikes((prev) => prev + (liked ? -1 : 1));
    };

    const toggleBookmark = (e: React.MouseEvent) => {
        e.preventDefault();
        setBookmarked(!bookmarked);
    };

    return (
        <div className="px-6 md:px-20 py-10 max-w-screen-xl mx-auto">

            {/* Back Arrow */}
            <button onClick={() => router.back()} className="flex items-center text-gray-500 mb-4 cursor-pointer">
                <ArrowLeft className="mr-2" size={18} /> Back
            </button>

            {/* Header */}
            <div className="flex justify-between items-start flex-wrap">
                <motion.h1
                    className="text-3xl font-bold text-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {card.title}
                </motion.h1>

                <motion.div 
                    className="flex items-center justify-end mt-4 gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="flex gap-2">
                        <button
                            onClick={toggleLike}
                            className="flex items-center text-gray-600 text-sm hover:opacity-80"
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
                        className="hover:opacity-80"
                    >
                        <Bookmark
                            size={18}
                            className={bookmarked ? "fill-black text-black" : "text-gray-500"}
                        />
                    </button>
                </motion.div>
            </div>

            <motion.p 
                className="mt-2 text-gray-500 max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
            >
                {card.summary}
            </motion.p>

            {/* Tags */}
            <motion.div 
                className="flex flex-wrap gap-2 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
            >
                <Badge className="bg-yellow-500 px-3 py-1 rounded-full">
                    {card.tags.day} days
                </Badge>
                <Badge className="bg-green-600 px-3 py-1 rounded-full">
                    {card.tags.vibes.toLowerCase()}
                </Badge>
                <Badge className="bg-red-500 px-3 py-1 rounded-full">
                    {card.tags.transportation.toLowerCase()}
                </Badge>
            </motion.div>

            <motion.div
                className="mt-8 rounded-xl overflow-hidden w-full h-[300px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <Image src={card.image} alt={card.title} className="w-full h-full object-cover" width={700} height={400} />
            </motion.div>

            <motion.h2 
                className="mt-10 mb-4 text-xl font-semibold text-green-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
            > 
                Destinations List
            </motion.h2>
            <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                {destinations.map((dest, idx) => (
                    <div key={idx} className="flex gap-6 items-center bg-white p-4 rounded-md shadow-sm">
                        <Image src={dest.image} alt={dest.name} className="w-28 h-20 object-cover rounded-md" width={700} height={400} />
                        <div className="flex-1">
                            <p className="font-bold text-gray-700">{dest.name}</p>
                            <p className="text-xs text-gray-500 mt-1">{dest.description}</p>
                            <a
                                href={dest.mapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-blue-500 text-xs mt-2 underline"
                            >
                            <MapPin size={12} className="mr-1" />
                            View on Google Maps
                            </a>
                        </div>
                    </div>
                ))}
            </motion.div>

            <h2 className="mt-16 mb-4 text-lg font-semibold text-orange-600">Explore Other Destinations</h2>
            <div className="grid md:grid-cols-2 gap-6">
            {related.map((card) => (
                <DestCard key={card.id} {...card} />
            ))}
            </div>
        </div>
    );
}
