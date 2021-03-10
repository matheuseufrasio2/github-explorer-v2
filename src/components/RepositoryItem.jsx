export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>Forms in React</p>

      <a target="_blanck" href={props.repository.link}>
        Acessar repositório
          </a>
    </li>
  )
}