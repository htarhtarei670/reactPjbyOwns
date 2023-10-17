import Card from './Card'

const Cards = ({datas,onLoadMore,isLoading,onImageClick}) => {

const clickHandler=()=>{
  onLoadMore(true)
}

  return (
    <div className="pb-8">
      <ul className='gap-4 lg:columns-4 md:columns-3 sm:columns-2 columns-1 mt-12 mx-12 cards'>
        {
          datas && datas.map((data,index)=><Card key={index} data={data} onImageClick={onImageClick}/>)
        }
      </ul>
     {
      datas &&
       <div className='flex justify-center mt-12' onClick={clickHandler}>
        <button className='bg-purple-500 py-3 px-8 text-white rounded-xl'>{isLoading ? "Loading...":"See More"}</button>
       </div>
     }
    </div>
  )
}

export default Cards
