import React from "react";
import { Card } from "@/components/ui/card";
import { Images } from "lucide-react";
import v1 from "../assets/v1.jpg";
import v2 from "../assets/v2.jpg";
import v3 from "../assets/v3.jpg";
import v4 from "../assets/v4.jpg";

const memories = [
  {
    id: 1,
    image: v1,
    caption: "featuring your sparkles here",
  },
  {
    id: 2,
    image: v2,
    caption: "ok cute you... bye...",
  },
  {
    id: 3,
    image: v3,
    caption: "featuring your nice outfit",
  },
  {
    id: 4,
    image: v4,
    caption: "One random saturday..remember???",
  },
];

const MemoriesGallery: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-birthday-blue/10" id="memories-section">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-8 gap-2">
          <Images className="text-birthday-blue w-8 h-8" />
          <h2 className="text-3xl md:text-4xl font-pacifico text-center text-birthday-purple">
            The legend himself
          </h2>
          <Images className="text-birthday-blue w-8 h-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {memories.map((memory) => (
            <div key={memory.id} className="group">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="relative">
                  <img
                    src={`${memory.image}?w=600&h=400&fit=crop&q=80`}
                    alt={memory.caption}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 font-baloo">
                      {memory.caption}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoriesGallery;
