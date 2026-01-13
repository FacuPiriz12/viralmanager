import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { VideoCard } from "./VideoCard";
import type { Video } from "@shared/schema";

interface VideoCarouselProps {
  videos: Video[];
  title?: string;
  subtitle?: string;
}

export function VideoCarousel({ videos, title, subtitle }: VideoCarouselProps) {
  return (
    <div className="space-y-6">
      {(title || subtitle) && (
        <div className="flex items-center justify-between">
          <div>
            {title && <h2 className="text-2xl font-display font-bold text-[#0F0F0F]">{title}</h2>}
            {subtitle && <p className="text-ttgray text-sm">{subtitle}</p>}
          </div>
        </div>
      )}
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {videos.map((video) => (
            <CarouselItem key={video.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div className="h-full">
                <VideoCard video={video} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end gap-2 mt-4">
          <CarouselPrevious className="static translate-y-0 h-9 w-9 border-gray-200" />
          <CarouselNext className="static translate-y-0 h-9 w-9 border-gray-200" />
        </div>
      </Carousel>
    </div>
  );
}
