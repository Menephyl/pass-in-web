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


const [search, setSearch] = useState(() => {
  const [search, setSearch] = useState("");
  const [page,setPage] = useState(1);

  const totalPages = Math.ceil(attendees.length)/10


 



               
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
          
          