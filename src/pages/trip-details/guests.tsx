import { CircleCheck, CircleDashed, UserCog } from 'lucide-react'
import { Button } from '../../components/button'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
interface Participant {
  id: string
  name: string | null
  email: string
  is_confirmed: boolean
}
export function Guests() {
  const { tripId } = useParams()
  const [participants, setParticipants] = useState<Participant[]>([])
  useEffect(() => {
    api
      .get(`/trips/${tripId}/participants`)
      .then((response) => setParticipants(response.data.participants))
  }, [tripId])

  return (
    <div className="space-y-6">
      <h2 className="text-zinc-50 text-xl font-semibold">Convidados</h2>

      <div className="space-y-5">
        {participants.map((participant, index) => {
          return (
            <div
              key={participant.id}
              className="flex items-center justify-between gap-4"
            >
              <div className="space-y-1.5 ">
                <span className="text-zinc-100 block text-base font-medium">
                  {participant.name ?? `Convidado ${index}`}
                </span>
                <span className="text-zinc-400 block text-sm truncate">
                  {participant.email}
                </span>
              </div>
              {participant.is_confirmed ? (
                <CircleCheck className="size-5 text-lime-300 shrink-0" />
              ) : (
                <CircleDashed className="size-5 text-zinc-400 shrink-0" />
              )}
            </div>
          )
        })}
      </div>

      <Button variant="secondary" size="full">
        <UserCog className="size-5" /> Gerenciar convidados
      </Button>
    </div>
  )
}
