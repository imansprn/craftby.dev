"use client";

import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Masonry from 'react-masonry-css';

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1723048363247-b047cedcbf05?w=800&h=600&fit=crop&q=100",
    alt: "group-outside-building.jpg",
    caption: "A group of people standing outside of a building",
    orientation: "landscape",
    camera: "iPhone 12"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1723048349242-efbd41fb6e4d?w=800&h=600&fit=crop&q=100",
    alt: "city-street-traffic.jpg",
    caption: "A city street filled with lots of traffic next to tall buildings",
    orientation: "landscape",
    camera: "iPhone 12"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1723048335765-2d721f4a14a1?w=600&h=800&fit=crop&q=100",
    alt: "group-outside-restaurant.jpg",
    caption: "A group of people standing outside of a restaurant",
    orientation: "portrait",
    camera: "iPhone 12"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1723048324410-350e3324c91f?w=800&h=600&fit=crop&q=100",
    alt: "boat-in-water.jpg",
    caption: "A boat that is sitting in the water",
    orientation: "landscape",
    camera: "iPhone 12"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1723048311105-9ccfb21e6782?w=800&h=600&fit=crop&q=100",
    alt: "gardens-by-bay-night.jpg",
    caption: "A night view of the gardens by the bay",
    orientation: "landscape",
    camera: "iPhone 12"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1723041024940-0f7061409e59?w=600&h=800&fit=crop&q=100",
    alt: "unsplash-photo-6.jpg",
    caption: "Urban photography",
    orientation: "portrait",
    camera: "iPhone 12"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1721556482132-858440ba423f?w=800&h=600&fit=crop&q=100",
    alt: "unsplash-photo-7.jpg",
    caption: "Urban photography",
    orientation: "landscape",
    camera: "iPhone 12"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1722015740171-88f4134b35de?w=800&h=600&fit=crop&q=100",
    alt: "lake-aerial-view.jpg",
    caption: "A view of a lake from a high point of view",
    orientation: "landscape",
    camera: "iPhone 12"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1722015754229-2005d09b9ea6?w=600&h=800&fit=crop&q=100",
    alt: "beach-scenery.jpg",
    caption: "Beach scenery with sea view",
    orientation: "portrait",
    camera: "iPhone 12"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1722015717244-1726ab6a9fc5?w=800&h=600&fit=crop&q=100",
    alt: "lake-aerial-view-2.jpg",
    caption: "Lake aerial view",
    orientation: "landscape",
    camera: "iPhone 12"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1722015727437-4044ac4ec547?w=600&h=800&fit=crop&q=100",
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
                      className={`w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300 ${
                        photo.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'
                      }`}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end">
                      <div className="p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-2 text-xs font-mono">
                          <Camera className="h-3 w-3" />
                          {photo.alt}
                        </div>
                        <div className="text-xs text-white/80 mt-1">
                          {photo.orientation === 'portrait' ? 'Portrait' : 'Landscape'} • {photo.camera}
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