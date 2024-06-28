import { Character } from '@/types/Character'

type Props = {
    character: Character
}

export default function CharacterCard(props: Props) {
    return <>
        <a href={`/characters/${props.character.id}`}>Visita dettaglio di: {props.character.name}</a>
    </>
}