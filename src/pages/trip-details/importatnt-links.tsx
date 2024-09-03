import { Link2, Plus } from 'lucide-react'
import { Button } from '../../components/button'

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="text-zinc-50 text-xl font-semibold">Links importantes</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 ">
            <span className="text-zinc-100 block text-base font-medium">
              Reserva do AirBnB
            </span>
            <a
              href="#"
              className="text-zinc-400 block text-xs truncate hover:text-zinc-200"
            >
              https://www.airbnb.com.br/rooms/104700011231111111323244
            </a>
          </div>
          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 ">
            <span className="text-zinc-100 block text-base font-medium">
              Regras da casa
            </span>
            <a
              href="#"
              className="text-zinc-400 block text-xs truncate hover:text-zinc-200"
            >
              https://www.notion.com/pages/1047000112354648336?adults=13&children=0&infants=0&pets=0&wishlist_item_id=11003621872995&check_in=2024-08-17&check_out=2024-08-26&source_impression_id=p3_1717600906_P3DL0E-bJZzguEci&previous_page_section_name=1000
            </a>
          </div>
          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>
      </div>

      <Button variant="secondary" size="full">
        <Plus className="size-5" /> Cadastrar novo link
      </Button>
    </div>
  )
}
