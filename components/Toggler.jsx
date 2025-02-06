"use client"

import { useState } from "react"

export default function Toggler() {

    const [visible, setVisible] = useState(false);

        
    const toggle = () => {
        setVisible(!visible)
        {visible ? 'Afficher Moin' : 'Afficher Plus'}
    }


    return <div>
    
    <div onClick={toggle}>
        Cliquer Moi
    </div>
    {visible &&
        <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quidem? Numquam nisi voluptas, est ipsam accusantium quia deleniti nihil quas corrupti laboriosam molestias. Quasi et laboriosam voluptate doloribus quis impedit.
        </div>
    }

    
    </div>
}