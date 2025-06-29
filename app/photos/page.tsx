"use client";

import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Masonry from 'react-masonry-css';

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop",
    alt: "mountain-sunrise.jpg",
    caption: "Golden hour in the Rockies"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=900&fit=crop",
    alt: "urban-shadows.jpg",
    caption: "City geometry and light"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=750&fit=crop",
    alt: "portrait-natural.jpg",
    caption: "Available light portrait"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=900&fit=crop",
    alt: "forest-mist.jpg",
    caption: "Morning fog through pines"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=800&fit=crop",
    alt: "forest-path.jpg",
    caption: "Trail through old growth"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=750&fit=crop",
    alt: "lake-reflection.jpg",
    caption: "Perfect mirror conditions"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=900&fit=crop",
    alt: "architecture-modern.jpg",
    caption: "Brutalist concrete forms"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1502780402662-acc01917aff4?w=600&h=800&fit=crop",
    alt: "coastal-drama.jpg",
    caption: "Storm approaching coast"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1506102383123-c8ef1e872756?w=600&h=750&fit=crop",
    alt: "urban-perspective.jpg",
    caption: "Looking up in downtown"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&h=900&fit=crop",
    alt: "desert-minimal.jpg",
    caption: "Minimalist desert landscape"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=700&fit=crop",
    alt: "street-candid.jpg",
    caption: "Candid street moment"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=850&fit=crop",
    alt: "nature-macro.jpg",
    caption: "Macro detail study"
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
                  className="group cursor-pointer overflow-hidden rounded-md bg-muted hover:shadow-lg transition-all duration-200"
                  onClick={() => openLightbox(photo.id)}
                >
                  <div className="relative">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end">
                      <div className="p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-2 text-xs font-mono">
                          <Camera className="h-3 w-3" />
                          {photo.alt}
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
                  <div className="font-mono">Canon 5D IV</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Film stock</div>
                  <div className="font-mono">Portra 400</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Last shot</div>
                  <div className="font-mono">3 days ago</div>
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
            <X className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
            onClick={() => navigatePhoto('prev')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
            onClick={() => navigatePhoto('next')}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="max-w-5xl max-h-full flex flex-col">
            <img
              src={selectedPhotoData.src}
              alt={selectedPhotoData.alt}
              className="max-w-full max-h-[85vh] object-contain"
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