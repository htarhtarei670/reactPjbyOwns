const List = ({note,onDelete,onEdit,dark}) => {

    return (
        <div className={`${dark? 'bg-slate-800':'bg-white'} shadow-xl mb-4 relative ${dark? 'text-white' :'text-black'} px-4 py-3 rounded-xl min-h-[300px]`}>
           <div className=" min-h-[200px]" onClick={()=>onEdit(note.id)}>
                <h1 className="text-xl pb-3 font-semibold">{note.data.title}</h1>
                <p className="leading-5 pb-8 text-slate-400">{note.data.text}</p>
           </div>
            <div className="pt-1">
                <span className="text-[.8rem] absolute bottom-2 text-slate-400 ">{note.date}</span>
                <span onClick={()=>{onDelete(note.id)}} className="absolute bottom-2 right-4"><i className="ri-delete-bin-line text-red-700"></i></span>
            </div>
        </div>
    )
}

export default List
