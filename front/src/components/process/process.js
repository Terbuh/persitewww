import baner from '../../../public/computerWriting.png'
import Image from 'next/image';
import React from 'react'

export default function Process() {
    return (

        <div>
            <Image
                src={baner}
                alt="baner"
                width={800}
            />

        </div>
    )
}
