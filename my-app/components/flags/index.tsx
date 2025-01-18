'use client'
import {Flag} from "@/components/types/types";
import FlagComponent from "@/components/flag";
import {useState} from "react";

export default function Flags({flags}: {flags: Flag[]}) {
    const [deletedFlags, setDeletedFlags] = useState<string[]>([''])
    const handleDeleteFlags = (iso_code2:string) =>{
        setDeletedFlags((deletedFlags) => [...deletedFlags, iso_code2])
    }

    const renderFlags = flags.filter(item => !deletedFlags.includes(item.iso_code2))

    return (
        <>
            {renderFlags.map((flag: Flag) => <FlagComponent flag={flag} key={flag.iso_code2} setDeletedFlags={handleDeleteFlags}/>)}
        </>
    );
}
