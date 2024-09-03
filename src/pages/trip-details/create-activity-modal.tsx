import { Clock, Tag, X } from 'lucide-react'
import { Button } from '../../components/button'
import { FormEvent } from 'react'
import { api } from '../../lib/axios'
import { useParams } from 'react-router-dom'

interface CreateActivityModalProps {
  CloseCreateActivityModal: () => void
}
export function CreateActivityModal({
  CloseCreateActivityModal,
}: CreateActivityModalProps) {
  const { tripId } = useParams()
  async function createActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const title = data.get('title')?.toString()
    const occurs_at = data.get('occurs_at')?.toString()

    await api.post(`/trips/${tripId}/activities`, {
      title,
      // eslint-disable-next-line camelcase
      occurs_at,
    })
    window.document.location.reload()
  }
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex  items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação da viagem
            </h2>
            <button type="button" onClick={CloseCreateActivityModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-zinc-400 text-sm">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        <form onSubmit={createActivity} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="size-5 text-zinc-400" />
            <input
              name="title"
              placeholder="Qual a atividade?"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full flex-1"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="flex-1 h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Clock className="size-5 text-zinc-400" />
              <input
                type="datetime-local"
                name="occurs_at"
                placeholder="Data E horario da atividade"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full flex-1 "
              />
            </div>
          </div>

          <Button type="submit" size="full">
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  )
}
