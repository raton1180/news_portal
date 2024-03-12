import Link from 'next/link'
import React from 'react'

const ListTags = ({ tg, idx, isShowBorder }: any) => {
    return (
        <Link href={"/"} key={idx} className={`md:col-span-3 hidden md:block col-span-12 ${isShowBorder ? 'border-r-2' : ''}`}>
            <div className="flex gap-x-5 items-center">
                <div
                    className="w-[80px] h-[50px] bg-no-repeat relative overflow-hidden"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform hover:scale-110"
                        style={{ backgroundImage: `url(${tg?.image})` }}
                    ></div>
                </div>
                <p className="hover:text-primary">{tg?.title}</p>
            </div>
        </Link>
    )
}

export default ListTags