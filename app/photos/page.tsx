"use client";

import {useState, useEffect} from 'react';
import {X, ChevronLeft, ChevronRight, Camera} from 'lucide-react';
import {Button} from '@/components/ui/button';
import Masonry from 'react-masonry-css';
import moment from 'moment';

const photos = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1752052176345-ec6209bd7cea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=100&w=2000&h=2667",
        alt: "daruma-dolls-lush-green-moss.jpg",
        caption: "Daruma dolls nestled in lush green moss",
        orientation: "portrait",
        camera: "Ricoh GR III"
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1751715953978-9b875928aef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwzTk1kM1lkTlcxRXx8ZW58MHx8fHx8&ixlib=rb-4.1.0&q=100&w=3000",
        alt: "person-walking-sunlit-sidewalk-brickwork.jpg",
        caption: "On the go. A person walks purposefully down a sunlit sidewalk, their journey framed by classic brickwork",
        orientation: "landscape",
        camera: "Ricoh GR III"
    },

    {
        id: 3,
        src: "https://images.unsplash.com/photo-1751564585913-8d48cc65051a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI4MTR8MHwxfGFsbHwxfHx8fHx8Mnx8MTc1MTU2NjIwNXw&ixlib=rb-4.1.0&q=100&w=2000&h=2667",
        alt: "yellow-flower-bud-field.jpg",
        caption: "A delicate yellow flower bud, partially unfurled, stands prominently in the foreground, surrounded by a field of vibrant yellow blooms. The soft focus of the background reveals a hazy river or body of water with a bridge stretching across it under a muted sky, hinting at a serene natural landscape with distant urban elements",
        orientation: "portrait",
        camera: "Ricoh GR III"
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1751562249295-2e2fe7c664e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI4MTR8MHwxfGFsbHwyfHx8fHx8Mnx8MTc1MTU2NjIwNXw&ixlib=rb-4.1.0&q=100&w=3000",
        alt: "night-construction-site-cityscape.jpg",
        caption: "A night construction site illuminated by strong work lights, with cranes and excavators operating. In the background stands a brightly lit modern city skyline with high-rise office towers reflecting off the river, likely an urban redevelopment scene in Asia",
        orientation: "landscape",
        camera: "Ricoh GR III"
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1751562247125-b0b0b98569b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI4MTR8MHwxfGFsbHwzfHx8fHx8Mnx8MTc1MTU2NjIwNXw&ixlib=rb-4.1.0&q=100&w=2000&h=2667",
        alt: "wooden-boat-lotus-pond-woman.jpg",
        caption: "A wooden boat is moored near a lotus pond under large overhanging branches. A woman in a light dress walks along a narrow wooden bridge across the water, with dense trees and scattered rowboats visible in the distance.",
        orientation: "portrait",
        camera: "Ricoh GR III"
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1751562170288-3573feb88194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI4MTR8MHwxfGFsbHw0fHx8fHx8Mnx8MTc1MTU2NjIwNXw&ixlib=rb-4.1.0&q=100&w=2000&h=2667",
        alt: "torii-gate-forest-sacred-pathway.jpg",
        caption: "A weathered wooden torii gate stands majestically amidst a lush, verdant forest, its traditional design and golden crests hinting at a sacred pathway. The dappled sunlight filtering through the dense canopy creates a serene and timeless atmosphere, inviting contemplation and a sense of natural tranquility",
        orientation: "portrait",
        camera: "Ricoh GR III"
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1751562247503-d5b1ffda42fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI4MTR8MHwxfGFsbHw1fHx8fHx8Mnx8MTc1MTU2NjIwNXw&ixlib=rb-4.1.0&q=100&w=2000&h=2667",
        alt: "rowboats-river-lime-hills.jpg",
        caption: "Several rowboats with orange life jackets are docked beside a calm river under tree shade. Boat rowers wearing conical hats wait for passengers. Lush green limestone hills rise in the background under a clear blue sky, evoking a peaceful rural riverside scene in Southeast Asia",
        orientation: "portrait",
        camera: "Ricoh GR III"
    },
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1751562247154-824c038e615b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI4MTR8MHwxfGFsbHw2fHx8fHx8Mnx8MTc1MTU2NjIwNXw&ixlib=rb-4.1.0&q=100&w=3000",
        alt: "red-taxi-pedestrian-crossing-japan.jpg",
        caption: "A red taxi drives across a wide striped pedestrian crossing in a modern city intersection. Mid-rise residential and office buildings surround the street, with small green trees lining the sidewalks, typical of urban Japan",
        orientation: "landscape",
        camera: "Ricoh GR III"
    },
    {
        id: 9,
        src: "https://images.unsplash.com/photo-1751562170236-e594b314979f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI4MTR8MHwxfGFsbHw3fHx8fHx8Mnx8MTc1MTU2NjIwNXw&ixlib=rb-4.1.0&q=100&w=2000&h=2667",
        alt: "kyoto-street-scene-japanese-flag.jpg",
        caption: "A bustling street scene in Kyoto, Japan, captures the vibrant energy of the city under an overcast sky. A prominent Japanese flag waves proudly, overlooking traditional tiled rooftops and a lively crowd of people exploring the charming shops and historic architecture. Distant mountains frame the urban landscape, adding to the picturesque view",
        orientation: "portrait",
        camera: "Ricoh GR III"
    },
    {
        id: 10,
        src: "https://images.unsplash.com/photo-1751562247639-f2b755ccaef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI4MTR8MHwxfGFsbHw4fHx8fHx8Mnx8MTc1MTU2NjIwNXw&ixlib=rb-4.1.0&q=100&w=2000&h=2667",
        alt: "traditional-temple-courtyard-mountains.jpg",
        caption: "A traditional wooden temple with ornate roof carvings and a stone incense burner stands among trees. The courtyard is quiet, framed by trimmed plants and mountain cliffs behind, representing serene temple architecture typical of East or Southeast Asia",
        orientation: "portrait",
        camera: "Ricoh GR III"
    },
    {
        id: 11,
        src: "https://images.unsplash.com/photo-1723048363247-b047cedcbf05?w=2400&h=1800&fit=crop&q=100",
        alt: "group-outside-building.jpg",
        caption: "A group of people standing outside of a building",
        orientation: "landscape",
        camera: "iPhone 12"
    },
    {
        id: 12,
        src: "https://images.unsplash.com/photo-1723048349242-efbd41fb6e4d?w=2000&h=2667&fit=crop&q=100",
        alt: "city-street-traffic.jpg",
        caption: "A city street filled with lots of traffic next to tall buildings",
        orientation: "portrait",
        camera: "iPhone 12"
    },
    {
        id: 13,
        src: "https://images.unsplash.com/photo-1723048335765-2d721f4a14a1?w=2000&h=2667&fit=crop&q=100",
        alt: "group-outside-restaurant.jpg",
        caption: "A group of people standing outside of a restaurant",
        orientation: "portrait",
        camera: "iPhone 12"
    },
    {
        id: 14,
        src: "https://images.unsplash.com/photo-1723048324410-350e3324c91f?w=2400&h=1800&fit=crop&q=100",
        alt: "boat-in-water.jpg",
        caption: "A boat that is sitting in the water",
        orientation: "landscape",
        camera: "iPhone 12"
    },
    {
        id: 15,
        src: "https://images.unsplash.com/photo-1723048311105-9ccfb21e6782?w=2000&h=2667&fit=crop&q=100",
        alt: "gardens-by-bay-night.jpg",
        caption: "A night view of the gardens by the bay",
        orientation: "portrait",
        camera: "iPhone 12"
    },
    {
        id: 16,
        src: "https://images.unsplash.com/photo-1723041024940-0f7061409e59?w=2400&h=1800&fit=crop&q=100",
        alt: "urban-photography.jpg",
        caption: "Urban photography",
        orientation: "landscape",
        camera: "iPhone 12"
    },
    {
        id: 17,
        src: "https://images.unsplash.com/photo-1721556482132-858440ba423f?w=2000&h=2667&fit=crop&q=100",
        alt: "urban-photography-2.jpg",
        caption: "Urban photography",
        orientation: "portrait",
        camera: "iPhone 12"
    },
    {
        id: 18,
        src: "https://images.unsplash.com/photo-1722015740171-88f4134b35de?w=2000&h=2667&fit=crop&q=100",
        alt: "lake-aerial-view.jpg",
        caption: "A view of a lake from a high point of view",
        orientation: "portrait",
        camera: "iPhone 12"
    },
    {
        id: 19,
        src: "https://images.unsplash.com/photo-1722015754229-2005d09b9ea6?w=2000&h=2667&fit=crop&q=100",
        alt: "beach-scenery.jpg",
        caption: "Beach scenery with sea view",
        orientation: "portrait",
        camera: "iPhone 12"
    },
    {
        id: 20,
        src: "https://images.unsplash.com/photo-1722015717244-1726ab6a9fc5?w=2400&h=1800&fit=crop&q=100",
        alt: "lake-aerial-view-2.jpg",
        caption: "Lake aerial view",
        orientation: "landscape",
        camera: "iPhone 12"
    },
    {
        id: 21,
        src: "https://images.unsplash.com/photo-1722015727437-4044ac4ec547?w=2000&h=2667&fit=crop&q=100",
        alt: "beach-scenery-2.jpg",
        caption: "Beach scenery",
        orientation: "portrait",
        camera: "iPhone 12"
    }
];

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};

export default function Photos() {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const openLightbox = (photoId: number) => {
        setSelectedPhoto(photoId);
    };

    const closeLightbox = () => {
        setSelectedPhoto(null);
    };

    const navigatePhoto = (direction: 'prev' | 'next') => {
        if (selectedPhoto === null) return;
        const currentIndex = photos.findIndex(photo => photo.id === selectedPhoto);
        let newIndex;
        if (direction === 'prev') {
            newIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
        } else {
            newIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
        }
        setSelectedPhoto(photos[newIndex].id);
    };

    const selectedPhotoData = photos.find(photo => photo.id === selectedPhoto);

    return (
        <div className="min-h-screen pt-14">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
                <div className={`transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                    {/* CLI-style header */}
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-green-500">$</span>
                                <span className="text-muted-foreground">ls ~/photos</span>
                            </div>
                            <div className="text-xs text-muted-foreground pl-4">
                                {photos.length} files • Mixed formats (digital + film)
                            </div>
                        </div>

                        {/* Photo grid */}
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="masonry-grid"
                            columnClassName="masonry-grid-column"
                        >
                            {photos.map((photo) => (
                                <div
                                    key={photo.id}
                                    className={`group cursor-pointer overflow-hidden rounded-md bg-muted hover:shadow-lg transition-all duration-200 ${
                                        photo.orientation === 'landscape' ? 'col-span-2' : ''
                                    }`}
                                    onClick={() => openLightbox(photo.id)}
                                >
                                    <div className="relative">
                                        <img
                                            src={photo.src}
                                            alt={photo.alt}
                                            loading="lazy"
                                            className={`w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300 ${
                                                photo.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'
                                            }`}
                                            style={{ 
                                                imageRendering: 'crisp-edges'
                                            }}
                                        />
                                        <div
                                            className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end">
                                            <div
                                                className="p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="flex items-center gap-2 text-xs font-mono">
                                                    <Camera className="h-3 w-3"/>
                                                    {photo.alt}
                                                </div>
                                                <div className="text-xs text-white/80 mt-1">
                                                    {photo.camera}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Masonry>

                        {/* Footer info */}
                        <div className="bg-muted/30 border border-border rounded-md p-4">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                                <div>
                                    <div className="text-muted-foreground">Total images</div>
                                    <div className="font-mono">{photos.length}</div>
                                </div>
                                <div>
                                    <div className="text-muted-foreground">Camera</div>
                                    <div className="font-mono">Ricoh GR III</div>
                                </div>
                                <div>
                                    <div className="text-muted-foreground">Film stock</div>
                                    <div className="font-mono">-</div>
                                </div>
                                <div>
                                    <div className="text-muted-foreground">Last update</div>
                                    <div className="font-mono">{moment('2025-07-10T01:50:00').fromNow()}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {selectedPhoto && selectedPhotoData && (
                <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
                        onClick={closeLightbox}
                    >
                        <X className="h-4 w-4"/>
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                        onClick={() => navigatePhoto('prev')}
                    >
                        <ChevronLeft className="h-4 w-4"/>
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                        onClick={() => navigatePhoto('next')}
                    >
                        <ChevronRight className="h-4 w-4"/>
                    </Button>

                    <div className="max-w-5xl max-h-full flex flex-col">
                        <img
                            src={selectedPhotoData.src}
                            alt={selectedPhotoData.alt}
                            className="max-w-full max-h-[85vh] object-contain"
                            style={{ imageRendering: 'crisp-edges' }}
                        />
                        <div className="text-center mt-4 space-y-1">
                            <p className="text-white text-sm font-mono">{selectedPhotoData.alt}</p>
                            <p className="text-white/70 text-xs">{selectedPhotoData.caption}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}