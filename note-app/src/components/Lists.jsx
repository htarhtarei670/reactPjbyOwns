import List from './List'

const Lists = ({notes,onDelete,onEdit,dark}) => {
  return (
       <div className='relative h-[520px] md:h-[600px]'>
        {notes.length !== 0 ? (
          <div className="mt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            { notes.map((note,index)=>
              <List 
                key={index} 
                note={note} 
                onDelete={onDelete}
                onEdit={onEdit}
                dark={dark}
              />)}
          </div>
        ):(<p className='text-red-600 pt-6 text-lg text-center'>No note take yet!</p>)}

       </div>
  )
}

export default Lists

