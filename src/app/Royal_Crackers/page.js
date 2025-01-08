"use client";
import {
  VerticalNav,
  HorizontalNav,
  //   SoloWideImg,
} from "../components/verticalnav";
//   import { TripleImg } from "../components/imageformatting";

export default function Home() {
  return (
    <div className="overflow-x-hidden flex w-screen h-screen">
      <VerticalNav />
      <HorizontalNav />
      <div className="w-screen h-fit mt-[12.5%] pb-12 ml-[25%] mr-[5%] flex items-start flex-col gap-y-1">
        <h1 className="text-2xl font-titled">Royal Crackers</h1>
        <h2 className="text-lg text-gray-400">Titmouse</h2>
        <p className="text-sm font-regular pt-3">
          The dysfunctional Hornsby family run Royal Crackers Incorporated, a
          once-oppopular snack food company which manufactures saltine crackers
          in Bakersfield, California. When senile patriarch and CEO Theodore
          Hornsby Sr.'s mind starts to slip, his two Stebes and Theodore "Theo"
          Jr. are left to run the failing company while living in their father's
          mansion with Stebe's wife Deb and their sone Matt as they deal with
          competition from Dennison Snacks and experience different
          misadventures along the way.
        </p>

        <h2 className="text-lg font-titled text-gray-800 pt-3">Prop Design</h2>
      </div>
    </div>
  );
}
