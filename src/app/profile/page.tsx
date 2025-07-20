'use client';

import { useEffect, useState } from 'react';
import { DestCard, DestCardProps } from '@/components/DestCard';

export default function ProfilePage() {
    const [cards, setCards] = useState<DestCardProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    fetch('/data/destinations.json')
        .then(res => res.json())
        .then((data: DestCardProps[]) => {
        setCards(data);
        setLoading(false);
        })
        .catch(() => setLoading(false));
    }, []);

    const likedCards = cards.filter(card => card.isLiked);
    const bookmarkedCards = cards.filter(card => card.isBookmarked);

    if (loading) {
        return <div className="text-center mt-10 text-gray-500">Loading profile...</div>;
    }

    return (
        <div className="px-6 md:px-20 py-10 max-w-screen-xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">My Profile</h1>

            {/* Liked Cards */}
            <section className="mb-12">
            <h2 className="text-xl font-semibold text-red-500 mb-4">Liked Destinations</h2>
            {likedCards.length === 0 ? (
                <p className="text-gray-500 text-sm">You haven't liked any destinations yet.</p>
            ) : (
                <div className="grid md:grid-cols-2 gap-6">
                {likedCards.map(card => (
                    <DestCard key={card.id} {...card} />
                ))}
                </div>
            )}
            </section>

            {/* Bookmarked Cards */}
            <section>
            <h2 className="text-xl font-semibold text-blue-500 mb-4">Bookmarked Destinations</h2>
            {bookmarkedCards.length === 0 ? (
                <p className="text-gray-500 text-sm">You haven't bookmarked any destinations yet.</p>
            ) : (
                <div className="grid md:grid-cols-2 gap-6">
                {bookmarkedCards.map(card => (
                    <DestCard key={card.id} {...card} />
                ))}
                </div>
            )}
            </section>
        </div>
    );
}
