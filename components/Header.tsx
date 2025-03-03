import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {Menu} from "lucide-react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";

const links = [
    {
        href: "/",
        title: "О республике"
    },
    {
        href: "/",
        title: "Виртуальные экскурсии"
    },
    {
        href: "/",
        title: "Лента видео"
    },
    {
        href: "/",
        title: "Карта"
    },
    {
        href: "/",
        title: "Образовательный компонент"
    },
    {
        href: "/",
        title: "Известные люди"
    },
    {
        href: "/",
        title: "анонсы"
    },
    {
        href: "/",
        title: "Краудсоринг"
    }
]


export default function Header() {
    return (
        <div className="bg-transparent h-[28px] flex justify-between items-center top-0 w-full md:h-[52px] xl:h-[82px]">
            <div className="pt-4 h-full items-center justify-center flex w-[10%]">
                <Image src="/logo.svg" alt="logo" width={96} height={96} />
            </div>
            <div
                className="bg-[rgb(37,26,9)] h-full text-center items-center justify-end md:justify-around  flex w-[80%] px-8 rounded-b-full"
            >
                {links.map((link, index) => (
                    <Link className="text-[rgb(242,186,53)] font-[400] text-xs hover:text-white transition-colors duration-300 hidden md:block" key={index} href={link.href}>{link.title}</Link>
                ))}
                <Popover>
                     <PopoverTrigger><Menu className="size-4 md:hidden text-[rgb(242,186,53)]"/></PopoverTrigger>
                    <PopoverContent className="flex flex-col bg-[rgb(37,26,9)] pb-4 w-[200px]">
                        {links.map((link, index) => (
                            <Link className="text-[rgb(242,186,53)] font-[400] text-md hover:text-white transition-colors duration-300 last:mb-4" key={index} href={link.href}>{link.title}</Link>
                        ))}
                    </PopoverContent>
                </Popover>
            </div>
            <div className="p-4 h-full text-center items-center justify-center flex text-2xl w-[10%]"/>
        </div>
    )
}
