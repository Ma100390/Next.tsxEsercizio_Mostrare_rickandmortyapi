import CharacterCard from '@/components/characters/CharacterCard'
import { Character } from '@/types/Character'
import axios from 'axios'
import { useEffect, useState } from 'react'

import styles from '../../components/characters/Characters.module.css'

export default function CharactersPage() {

    const [personaggi, setPersonaggi] = useState<Character[]>()

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(response => setPersonaggi(response.data.results))
            .catch(error => console.log(error))
    }, [])

    return <>
        <div className={`${styles.charactersContainer}`}>
            {personaggi?.map(personaggio => <CharacterCard character={personaggio} />)}
        </div>
    </>
}