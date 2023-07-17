import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
  } from '@tanstack/react-table'
import Link from 'next/link'
  import { useState } from 'react'
  
  export default function BasicTable({ data, columns }) {
  
    const [sorting, setSorting] = useState([])
    const [filtering, setFiltering] = useState('')
  
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      state: {
        sorting: sorting,
        globalFilter: filtering,
      },
      onSortingChange: setSorting,
      onGlobalFilterChange: setFiltering,
    })
  
    return (
      <div className='w-full text-start rounded-md outline outline-[1px] outline-neutral-200'>
        <div className='p-2 w-full bg-neutral-200'>
        <input
            className='p-2 rounded-md'
          type='text'
          placeholder='Search...'
          value={filtering}
          onChange={e => setFiltering(e.target.value)}
        />
        </div>
        <table className='w-full p-2'>
          <thead className='p-2'>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    className='text-left'
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {
                          { asc: '🔼', desc: '🔽' }[
                            header.column.getIsSorted() ?? null
                          ]
                        }
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
  
          <tbody className='w-full'>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => {
                  console.log(cell);
                  return (
                  <td key={cell.id} className=''>
                    {flexRender(cell.column.id === "linkToConstituencies" ? <Link href={cell.renderValue()} passHref>See Constituencies</Link> : cell.column.columnDef.cell, cell.getContext())}
                  </td>
                )})}
              </tr>
            ))}
          </tbody>
          </table>
        {/* <div>
          <button onClick={() => table.setPageIndex(0)}>First page</button>
          <button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
          >
            Previous page
          </button>
          <button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          >
            Next page
          </button>
          <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
            Last page
          </button>
        </div> */}
      </div>
    )
  }