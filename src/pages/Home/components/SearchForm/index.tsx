import * as zod from 'zod'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Container, Form } from './styles'
import { useEffect } from 'react'

interface SearchFormProps {
  totalIssues: number
}

const searchFormSchema = zod.object({
  query: zod.string().min(3),
})

type SearchFormData = zod.infer<typeof searchFormSchema>

export function SearchForm({ totalIssues }: SearchFormProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialData = searchParams.get('search') || ''

  const { register, watch } = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: initialData,
    },
  })

  const search = watch('query')

  useEffect(() => {
    setSearchParams({
      search,
    })
  }, [search, setSearchParams])

  return (
    <Container>
      <header>
        <strong>Publicações</strong>
        <span>
          {totalIssues} {totalIssues > 1 ? ' publicações' : ' publicação'}
        </span>
      </header>

      <Form>
        <input
          type="text"
          placeholder="Buscar contéudo"
          {...register('query')}
        />
      </Form>
    </Container>
  )
}
