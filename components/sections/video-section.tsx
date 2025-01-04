"use client";

import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getYouTubeThumbnail, getYouTubeEmbedUrl } from "@/lib/utils/youtube";

const videos = [
  {
    title: "Ergonomics Expert Explains How to Set Up Your Desk | WSJ Pro Tip",
    duration: "3:22",
    youtubeId: "F8_ME4VwTiw",
  },
  {
    title: "How-To Properly Sit In An Ergonomic Office Chair",
    duration: "4:09",
    youtubeId: "XSd1sgO8cJk",
  },
  {
    title: "Branch - Ergonomic Chair Adjustments",
    duration: "6:15",
    youtubeId: "NQUfqeLYYf0",
  },
];

export function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [thumbnails, setThumbnails] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    // Load thumbnails for all videos
    const loadThumbnails = () => {
      const newThumbnails: { [key: string]: string } = {};
      videos.forEach((video) => {
        newThumbnails[video.youtubeId] = getYouTubeThumbnail(video.youtubeId);
      });
      setThumbnails(newThumbnails);
    };

    loadThumbnails();
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <Card
            key={video.youtubeId}
            className="overflow-hidden group cursor-pointer"
            onClick={() => setSelectedVideo(video.youtubeId)}
          >
            <div className="relative h-48">
              {thumbnails[video.youtubeId] && (
                <img
                  src={thumbnails[video.youtubeId]}
                  alt={video.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              )}
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

      <Dialog
        open={!!selectedVideo}
        onOpenChange={() => setSelectedVideo(null)}
      >
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>
              {videos.find((v) => v.youtubeId === selectedVideo)?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="aspect-video">
            {selectedVideo && (
              <iframe
                width="100%"
                height="100%"
                src={getYouTubeEmbedUrl(selectedVideo)}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
