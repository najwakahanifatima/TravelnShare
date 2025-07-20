'use client'

import { DestCard } from "@/components/DestCard";
import { FilterBox } from "@/components/FilterBox";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion"
import { ListFilter, Search } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "@/components/ui/pagination"
import { DestCardProps } from "@/components/DestCard";

export default function Destination() {
    const easeOut = [0.25, 0.1, 0.25, 1] as const;
    const dayOptions = [
        { value: "1 day", label: "1 Day" },
        { value: "2 days", label: "2 Days" },
        { value: "3 days", label: "3 Days" },
        { value: "4 days", label: "4 Days" },
    ]
    const vibeOptions = [
        { value: "nature", label: "Nature" },
        { value: "downtown", label: "Downtown" },
        { value: "adventure", label: "Adventure" },
        { value: "luxury", label: "Luxury" },
        { value: "historic", label: "Historic" },
    ]
    const transportOptions = [
        { value: "car", label: "Car" },
        { value: "plane", label: "Plane" },
        { value: "train", label: "Train" },
        { value: "boat", label: "Boat" },
        { value: "walk", label: "Walk" },
    ];

    const [cards, setCards] = useState<DestCardProps[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 4;

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const res = await fetch('/data/destinations.json')
                const data = await res.json()
                setCards(data);
            } catch (e) {
                console.error("Error fetching destinations: ", e);
            }
        }

        fetchCards()
    })

    // Search and Filter
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFilters, setSelectedFilters] = useState<{
        [category: string]: string;
    }>({});

    // Search and Filter
    const filteredCards = cards.filter((card) => {
        const matchesSearch =
            card.title.toLowerCase().includes(searchTerm) ||
            card.summary.toLowerCase().includes(searchTerm);

        const matchesFilters = Object.entries(selectedFilters).every(([category, value]) => {
            if (!value) return true;

            switch (category) {
            case "days":
                return String(card.tags.day) === value.replace(/\D/g, '');
            case "vibes":
                return card.tags.vibes.toLowerCase() === value;
            case "transportation":
                return card.tags.transportation.toLowerCase() === value;
            default:
                return true;
            }
        });
        return matchesSearch && matchesFilters;
    });

    // Pagination
    const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);    

    return (
        <div className="flex flex-col">
            
            {/* Landing Section */}
            <section className="flex flex-row text-left mt-24 mb-52 w-auto justify-center gap-10">
                <aside className="flex flex-col pt-10 pl-20"> 
                    {/* General Description */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: easeOut, delay: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-6xl py-3 font-extrabold bg-gradient-to-r from-[#6C78C4] to-[#1C1D3A] text-transparent bg-clip-text"
                    >
                        Explore Destination <br/> Packages
                    </motion.h1>

                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: easeOut, delay: 0.4 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-lg mt-6 text-[#02053E]"
                    >
                        Just explore the wild or set the filters
                        <br /> to match your preferences.
                    </motion.h3>
                </aside>

                {/* Right Side Image */}
                <motion.aside
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: easeOut, delay: 0.6 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                <img
                    src="/main-page/destination.svg"
                    alt="Destination Images"
                    className="h-[400px]"
                />
                </motion.aside>
            </section>

            {/* Search and Filter Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="px-28"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="font-semibold text-2xl text-[#3E6652]"
                >
                    Destination Packages
                </motion.h2>
                <div className="flex mt-6 items-center justify-between">
                    {/* Search Input */}
                    <div className="relative w-full max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                        type="search"
                        placeholder="search keyword"
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                    />
                    </div>

                    {/* Filter Boxes */}
                    <div className="flex gap-9 items-center">
                    <ListFilter />
                    <FilterBox
                        category="Days"
                        options={dayOptions}
                        onChange={(category, value) =>
                        setSelectedFilters((prev) => ({ ...prev, [category]: value }))
                        }
                    />
                    <FilterBox
                        category="Vibes"
                        options={vibeOptions}
                        onChange={(category, value) =>
                        setSelectedFilters((prev) => ({ ...prev, [category]: value }))
                        }
                    />
                    <FilterBox
                        category="Transportation"
                        options={transportOptions}
                        onChange={(category, value) =>
                        setSelectedFilters((prev) => ({ ...prev, [category]: value }))
                        }
                    />
                    </div>
                </div>
            </motion.section>

            {/* Cards Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="px-28 mt-12 items-center"
            >
                {/* Cards Placeholder */}
                <div className="grid grid-cols-2 gap-x-15 gap-y-10">
                    {currentCards.map((card, index) =>
                    typeof card === "object" && card !== null ? (
                        <DestCard key={index} {...card} />
                    ) : null
                    )}
                </div>

                {/* Pagination */}
                <Pagination className="mt-12">
                    <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                        />
                    </PaginationItem>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <PaginationItem key={i}>
                        <PaginationLink
                            isActive={currentPage === i + 1}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </PaginationLink>
                        </PaginationItem>
                    ))}

                    <PaginationItem>
                        <PaginationNext
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                        />
                    </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </motion.section>


        </div>
    )
}