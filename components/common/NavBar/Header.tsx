"use client"

import ListTags from "@/components/Reusable/ListTags/ListTags"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { headerNav } from "@/constant/data"
import Image from "next/image"
import Link from "next/link"
import { JSX, SVGProps, useEffect, useState } from "react"

const tags = [
    {
        title: "অস্কারের দর্শক সারিতে এ কোন মেসি",
        image: "/assets/images/tagsimg.png"
    },
    {
        title: "অস্কারের দর্শক সারিতে এ কোন মেসি",
        image: "/assets/images/tagsimg.png"
    },
    {
        title: "অস্কারের দর্শক সারিতে এ কোন মেসি",
        image: "/assets/images/tagsimg.png"
    },
]

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <>
            <div className={`md:container md:mx-auto`} style={{ maxHeight: isScrolled ? '0' : 'none', transition: 'max-height 0.3s ease-out' }}>
                <div className="py-5 grid grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-3 col-span-12 flex justify-center">
                        <Image src={"/assets/images/logo.png"} width={250} height={250} alt="Logo" />
                    </div>
                    {tags.map((tg, idx) => (
                        <ListTags tg={tg} idx={idx} key={idx} isShowBorder={idx !== tags.length - 1} />
                    ))}
                </div>
            </div>
            <div className="border-t-[1px] border-b-2 sticky top-0 bg-white">
                <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 md:container md:mx-auto">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button className="lg:hidden" size="icon" variant="outline">
                                <MenuIcon className="h-6 w-6" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <div className="grid gap-2 py-6">
                                {headerNav.map((nav, idx) => (
                                    <Link key={idx} className="flex w-full items-center py-2 text-lg font-semibold" href="#">
                                        {nav?.title}
                                    </Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                    <nav className="hidden mx-auto lg:flex gap-6">
                        {headerNav.map((nav, idx) => (
                            <Link
                                key={idx}
                                className="group font-semibold inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm transition-colors hover:text-primary focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                href="#"
                            >
                                {nav?.title}
                            </Link>
                        ))}
                    </nav>
                </header>
            </div>
        </>
    );
}

export default Header


function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}