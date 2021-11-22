import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'unform',
    description: 'the description' , 
    url: 'https://github.com/unform/unform',
}

export function RespositoryList() {
    return (
        <section className="repository-list">  
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}