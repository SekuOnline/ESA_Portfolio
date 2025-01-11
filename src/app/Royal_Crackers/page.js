import { VerticalNav, HorizontalNav } from "../components/verticalnav";
import {
  SoloWideImage,
  DuoImage,
  GalleryImage,
} from "../components/imageformatting";
import one from "./One.png";
export default function Home() {
  return (
    <div className="overflow-x-hidden flex w-screen h-screen">
      <VerticalNav />
      <HorizontalNav />
      <div className="w-screen h-fit mt-[9%] pb-12 ml-[25%] mr-[5%] flex  flex-col gap-y-4">
        <h1 className="text-4xl font-titled text-gray-800">Royal Crackers</h1>
        <h3 className="text-lg font-titled text-gray-400">Titmouse</h3>
        <p className="font-regular">
          The dysfunctional Hornsby family run Royal Crackers Incorporated, a
          once-popular snack food company which manufactures saltine crackers in
          Bakersfield, California. When senile patriarch and CEO Theodore
          Hornsby Sr.'s mind starts to slip, his two sons Stebe and Theodore
          "Theo" Jr. are left to run the failing company while living in their
          father's mansion with Stebe's wife Deb and their son Matt as they deal
          with competition from Dennison Snacks and experience different
          misadventures along the way.
        </p>
        <h2 className="pt-4 text-2xl font-titled text-gray-800">Prop Design</h2>

        {/* <Image src={one} alt={"one"} /> */}
        <GalleryImage srcOne={"/One.png"} altOne="box" />
      </div>
    </div>
  );
}
