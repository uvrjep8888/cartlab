import Header from "@/components/layout/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className = "border border-[#272A31] flex justify-between py-[21px] px-[24px]">
      <p className = "flex-1">Cartlab</p>
      <div className = "flex-2">Search Product</div>
      <div className = "flex-1 flex justify-between">
          <div> cart icon </div>
          <p>$159.7</p>
          <p>User Icon</p>
      </div>
    </div>
  );
}
