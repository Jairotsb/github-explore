export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'Default'}</strong>
            <p>{props.respository?.description ?? 'Sem descrição'}</p>

            <a href={props.repository?.url}>
                Acessar repositórios
            </a>
        </li>
    )

}