import { Character } from '@/types/Character'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function CharacterDetailPage() {

    const [personaggio, setPersonaggio] = useState<Character>()
    const router = useRouter()
    const characterId = router.query.id;

    useEffect(() => {
        if (characterId !== undefined)
            axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
                .then(response => setPersonaggio(response.data))
                .catch(error => console.log(error))
    }, [characterId])


    return <>
        <img src={personaggio?.image} alt={personaggio?.name} />
        <p>{personaggio?.name}</p>
        {personaggio?.created !== undefined && <p>{new Date(personaggio.created).toLocaleDateString()}</p>}
        <p>{personaggio?.origin.name}</p>
        <p>{personaggio?.gender}</p>
        <p>{personaggio?.species}</p>
        <p>{personaggio?.status}</p>
        <p>{personaggio?.type}</p>
    </>
}