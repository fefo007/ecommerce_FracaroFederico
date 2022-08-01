import ItemCount from "./ItemCount";


const ItemDetail = ({item}) => {
    const onAdd = ()=>{
        console.log('agregado al carrito')
    }
return ( 
    <section className="itemDetail">
        <h3 className="itemDetail__title">{item?.name}</h3>
        <img className="itemDetail__image" height={350} src={item?.image} alt='assassinsCreedVal' />
        <h2 className="itemDetail__subtitle1">Screenshots</h2>
        <div className="itemDetail__screens">
            <img height={250} src={item?.screen.a} alt='assassinsA'/>
            <img height={250} src={item?.screen.b} alt='assassinsB'/>
            <img height={250} src={item?.screen.c} alt='assassinsC'/>
        </div>
        <h2 className="itemDetail__subtitle2">Sinopsis</h2>
        <div className="itemDetail__text">
            <p>{item?.text}</p>
        </div>
        <aside className="itemDetail__aside">
            <div className="itemDetail__aside__price">
                {item?.price}
            </div>
            <button className="itemDetail__aside__buy">Comprar</button>
            <ItemCount stock={6} initial={0} onAdd={onAdd}/>
        </aside>
    </section>
    );
}

export default ItemDetail;