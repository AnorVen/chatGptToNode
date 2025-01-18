'use client'
import {Flag} from "@/types/types";
import Image from 'next/image'
import {useState} from "react";


export default function FlagComponent({flag, setDeletedFlagsAction}: {flag: Flag, setDeletedFlagsAction: (iso_code2: string)=>void}) {
    const [deleting, setDeleting] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const handleDeleteFlag = () => {
        setDeleting(true)
        setTimeout(()=>{
            setDeleted(true)
            setDeleting(false)
            setDeletedFlagsAction(flag.iso_code2)
        }, 1000)
    }

    let className = 'item'
    if (deleting){className += ' deleting'}
    if (deleted){className += ' deleted'}
    return (
            <div className={className}>
                {flag.name_ru}
                {flag.flag_url && <Image
                src={`https:${flag.flag_url}`}
                alt={flag.name_ru}
                width={22}
                height={16}
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg=='
                placeholder="blur"
            />}

                <button onClick={handleDeleteFlag}>X</button>
            </div>
    )
}
