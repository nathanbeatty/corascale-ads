import { ArrowRight, Phone, TrendingUp, WavesIcon } from "lucide-react";
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
{/* <Button variant={"ghost"} asChild>
    <Link href = "#PRICING">
    Pricing
    </Link>
    </Button> */}

<Button  asChild>
              <Link href = "#BOOKCTA">
              Apply Now <ArrowRight/>
              </Link>
              </Button>
              </div>
        </div>
    )
}