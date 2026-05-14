import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Image from "next/image"
export default function Header(){
    return(
        <div className = "border border-[#272A31] flex justify-between py-[21px] px-[24px]">
            <p className = "flex-1">
                <Image
                    className="dark"
                    src="/logo.png"
                    alt="Cart Lab logo"
                    width={100}
                    height={20}
                    priority
                />
            </p>
            <div className = "flex-2 max-w-[576px]">
                <div className="relative">
                    <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input type="search" placeholder="Search Product" className="pl-8" />
                </div>
            </div>
            <div className = "flex-1 flex justify-end w-[165px]">
                <div>cart icon </div>
                <p>$159.7</p>
                <p>User Icon</p>
            </div>
        </div>
    )
}