import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { cn } from "@/lib/utils";

interface SocialMediaProps {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLinks = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/",
    icon: <CiFacebook />,
  },
  {
    title: "Twitter",
    href: "https://www.twitter.com/",
    icon: <CiTwitter />,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/",
    icon: <CiInstagram />,
  },
];

const SocialMedia = ({
  className,
  iconClassName,
  tooltipClassName,
}: SocialMediaProps) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLinks.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                href={item?.href}
                target="_blank"
                rel="noopener noreferrer"
                key={item?.title}
                className={cn("p-2 border rounded-full", iconClassName)}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{item.title}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
