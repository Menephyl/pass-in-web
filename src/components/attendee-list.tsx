import {Search,
    MoreHorizontal,
     ChevronsLeft, 
     ChevronsRight,
      ChevronLeft,
    ChevronRight} from 'lucide-react'
import 'dayjs/locale/pt-br'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { IconButton } from './icon-button';
import {Table} from './table/table'
import { TableHeader } from './table/table-head';
import {TableCell} from './table/table-cell'
import {TableRow} from './table/table-row'
import { ChangeEvent,useState } from 'react';
import { attendees } from '../data/attendee-list';


 dayjs.extend(relativeTime)
dayjs.locale('pt-br')

export function AttendeeList(){

  const [search, setSearch] = useState("");
  
  const [page,setPage] = useState(1);

  const totalPages = Math.ceil(attendees.length)/10



function onSearchInputChanged(event:ChangeEvent<HTMLInputElement>) {
  setSearch(event.target.value);

}
function goToFirstPage() {
  setPage(1);
}

function goToLastPage() {
  setPage(totalPages);
}

function goToPreviousPage() {
  setPage(page - 1);
}

function goToNextPage() {
  setPage(page + 1);
}


    return (
        <div className='flex flex-col gap-4'>
            <div className="flex gap-3 items-center">
              <h1 className="text-2xl font-bold">Participantes</h1> 
               <div className="px-3  w-72 py-1.5 border border-white/10  rounded-lg text-sm flex items-center gap-3">
                 <Search className="size-4 text-emerald-300"/>
                 <input
            className="bg-transparent flex-1 outline-none border-0 p-0 text-sm"
            placeholder="Buscar participante..."
            onChange={onSearchInputChanged}
          />
        </div>
        {search}
      </div>


             <Table>
               
               <thead>
             
                 <tr className='border-b border-white/10'>
                   <TableHeader style={{width:48}} className=' hover:bg-white/5'>
                   <input type="checkbox"  className='size-4 bg-black/20 rounded border border-white/10 checked:bg-orange-400'/>
                   </TableHeader>

                  <TableHeader >Código </TableHeader>

                   <TableHeader >Participante</TableHeader>

                   <TableHeader >Data de Inscrição</TableHeader>

                   <TableHeader >Data Check-in</TableHeader>
                  <TableHeader style={{width:64}} ></TableHeader>
                  </tr>
                  </thead>
               <tbody>
                {attendees.map((ateendee) => {
                 return(
                  <TableRow key={attendee.id} >

                <TableCell >
                  <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
                </TableCell>
                  <TableCell >{attendee.id}</TableCell>
                <TableCell > <div className='flex flex-col gap-1'>
               <span className="font-semibold text-white">
                  {attendee.name}
               </span>
              <span>{attendee.email}</span>
            </div>
                </TableCell>
           
                    <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                    <TableCell>
                  {ateendee.checkedInAt === null ? (
                    <span className="text-zinc-400">Não fez check-in</span>
                  ) : (
                    dayjs().to(ateendee.checkedInAt)
                  )}
                </TableCell>
                  
                    <TableCell>
                       
                   <IconButton transparent={true}> 
                    <MoreHorizontal className='size-4'/>
                    </IconButton>
                   </TableCell>
               
                 </TableRow>
                    );
                   }
                     )
                       }
                         </tbody>
                           <tfoot>
                <tr>
                       <td className='py-3 px-4 text-sm text-zinc-300' colSpan={3} >
                       Mostrando {attendees.length} de {total} itens
                       </td>
                       <td className='py-3 px-4 text-sm text-zinc-300 text-right' colSpan={3} >
               
                       <div className='inline-flex items-center gap-8'>
               
                       <span>Página {page} de {totalPages}</span>     
                       
                       <div className='flex gap-1.5'>
                           <IconButton onClick={goToFirstPage} disabled={page === 1}>
                       <ChevronsLeft className="size-4" />
                         </IconButton>
                           <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                        <ChevronLeft className="size-4" />
                        </IconButton>
                      <IconButton onClick={goToNextPage} disabled={page === totalPages}>
                       <ChevronRight className="size-4" />
                        </IconButton>
                         <IconButton onClick={goToLastPage} disabled={page === totalPages}>
                         <ChevronsRight className="size-4" />
                         </IconButton>
                          </div>
                          </div>
                          </td>
                       </tr>
                     </tfoot>
             </Table>
    </div>
 )
}