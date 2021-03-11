interface RepositoryItemProps {
  repository: RepositoryProps;
}

interface RepositoryProps {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a target="_blanck" href={props.repository.html_url}>
        Acessar repositório
          </a>
    </li>
  )
}