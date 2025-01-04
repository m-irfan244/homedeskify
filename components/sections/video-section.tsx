import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

export function VideoSection() {
  const videos = [
    {
      title: "How to Set Up Your Desk for Maximum Comfort",
      duration: "4:25",
      thumbnail: "https://images.unsplash.com/photo-1611269154421-4e27233c125a"
    },
    {
      title: "The Importance of Lighting in a Home Office",
      duration: "5:30",
      thumbnail: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca"
    },
    {
      title: "Tech Essentials for Remote Work Success",
      duration: "6:15",
      thumbnail: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <Card key={video.title} className="overflow-hidden group cursor-pointer">
          <div className="relative h-48">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                <Play className="h-6 w-6 text-primary" />
              </div>
            </div>
            <span className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 text-sm rounded">
              {video.duration}
            </span>
          </div>
          <div className="p-4">
            <h3 className="font-semibold">{video.title}</h3>
          </div>
        </Card>
      ))}
    </div>
  );
}