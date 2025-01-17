import {Flag} from "@/components/types/types";
import Image from 'next/image'

export default async function Flags() {
    const res = await fetch('https://gist.githubusercontent.com/sanchezzzhak/8606e9607396fb5f8216/raw/39de29950198a7332652e1e8224f988b2e94b166/ISO3166_RU.json')
    const data = await res.json() || []

    const handleDeleteFlag = (e) =>{
        console.log(e.target)
    }
    return (
        <>
            {data.map((flag: Flag) => (<div key={flag.iso_code2}>
                {flag.name_ru} {flag.flag_url && <Image
                src={`https:${flag.flag_url}`}
                alt={flag.name_ru}
                width={22}
                height={16}
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg=='
                placeholder="blur"
            />}

                <button>X</button>
            </div>))

            }
        </>
    );
}
