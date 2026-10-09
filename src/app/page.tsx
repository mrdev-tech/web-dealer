import HeroBanner from "@/components/home/HeroBanner";
import VehicleCatalog from "@/components/home/VehicleCatalog";
import ActionGrid from "@/components/home/ActionGrid";
import DiscoverLatest from "@/components/home/DiscoverLatest";
import WhatsAppFAB from "@/components/ui/WhatsAppFAB";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <VehicleCatalog />
      <ActionGrid />
      <DiscoverLatest />
      <WhatsAppFAB />
    </>
  );
}
