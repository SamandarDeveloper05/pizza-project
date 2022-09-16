import React,{ useState, useEffect }  from 'react'
import Card from './Card'
const CardList = ({products,addToCart}) => {//Cardlani list qilish va loader yasash uchun
  const [delay,setDelay] = useState(true)

  useEffect(()=>{
    setDelay(true);
    setTimeout(()=>{
      setDelay(false)
    }, 3500)
  }, [products])
  return (
    <>
        {
          delay ? <div className='loader'>
      <img src="https://i.imgur.com/kRuCoPO.gif" alt="loader" className='loader'/>
         
          </div>
          :
          <>
          <div className='card-list'>
            {
              products.length === 0 ? <p>Mahsulotlar yo'q</p>:
              products.map(item=>{
                return(
                  <Card key={item.id} data={item} addToCart={addToCart}/>
                )
              })
            }

          </div>
          </>
        }
    </>
  )
}

export default CardList