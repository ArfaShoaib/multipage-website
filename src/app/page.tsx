import NewArrival from "@/components/Arrivals";
import CategorySection from "@/components/Category";
import Explore from "@/components/Explore";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Music from "@/components/Music";
import Navbar from "@/components/Navbar";
import Sale from "@/components/Sale";
import Selling from "@/components/Selling";

export default function Home() {
  return (
    <div>
      <Hero />

      <Sale />
      <CategorySection />
      <Selling />
      <Music />
      <Explore/>
      <NewArrival/>
      </div>
  );
}
