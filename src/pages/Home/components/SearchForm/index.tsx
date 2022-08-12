import { Container, Form } from './styles'

interface SearchFormProps {
  totalIssues: number
}

export function SearchForm({ totalIssues }: SearchFormProps) {
  return (
    <Container>
      <header>
        <strong>Publicações</strong>
        <span>
          {totalIssues} {totalIssues > 1 ? ' publicações' : ' publicação'}
        </span>
      </header>

      <Form>
        <input type="text" placeholder="Buscar contéudo" />
      </Form>
    </Container>
  )
}
