import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
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
            <div className = "flex-1 flex justify-end w-[165px] items-center">
                
                <div className="relative inline-block mr-[24px] hidden md:block">
                    <div className = "mr-[8px]">
                        <button>
                            <Image
                                className="dark"
                                src="/iconify-icon.png"
                                alt=""
                                width={24}
                                height={24}
                                priority
                            />
                        </button>
                    </div>

                    {/* Notification Badge */}
                    <Badge
                        className="
                        absolute 
                        -right-2 
                        -top-2 
                        h-[24px]
                        w-[24px] 
                        rounded-full 
                        bg-lime-400 
                        text-[16px] 
                        font-black 
                        text-black
                        flex 
                        items-center 
                        justify-center
                        border-[3px]
                        border-black
                        shadow-md
                        "
                    >
                        3
                    </Badge>
                </div>
                {/* Price Box */}
                <div className="border-[3px] border-black bg-[#111827] px-4 py-2 shadow-md  mr-[24px] hidden md:block">
                    <span className="text-[16px] font-extrabold tracking-tight text-white">
                    $159.97
                    </span>
                </div>
                <div className = "mr-[8px]">
                    <button>
                        <Image
                            className="dark"
                            src="/user-icon.png"
                            alt=""
                            width={40}
                            height={40}
                            priority
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}