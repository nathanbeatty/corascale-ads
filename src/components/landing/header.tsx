import { ArrowRight, ArrowRightToLine, Circle, CircleArrowOutUpRight, CircleArrowUpIcon, Dot, Phone, Send, TrendingUp, WavesIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import logo from '@/images/corascale.svg'

export default function Header(){

    return(
        <div className="flex justify-between items-center px-4">
            <Image src = {logo} width={120} height={20} alt ="logo"/>
              {/* <span className=" tracking-tight font-light font-inter text-2xl md:text-2xl">corascale <span className = "font-inter tracking-tight font-normal text-sm">Agency</span></span> */}
              <div className="flex items-center gap-2">

                <Button className = "hidden md:flex" variant={"ghost"} asChild>
    <Link href = "#FAQ">
    FAQ
    </Link>
    </Button>
<Button className = "hidden md:flex" variant={"ghost"} asChild>
    <Link href = "#PRICING">
    Pricing
    </Link>
    </Button>

<Button   asChild className="group">
              <Link href = "#BOOKING">
              Apply
              </Link>
              </Button>
              </div>
        </div>
    )
}