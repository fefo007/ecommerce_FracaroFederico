import assassins from '../../complements/Image/assassinsCreed.webp'
import callisto from '../../complements/Image/callistocoleccion.webp'
import elden from '../../complements/Image/eldenRing.webp'
import farCry from '../../complements/Image/farcry6Xbox.webp'
import assassinsA from '../../complements/Image/screens/assassinsA.webp'
import assassinsB from '../../complements/Image/screens/assassinsB.webp'
import assassinsC from '../../complements/Image/screens/assassinsC.webp'
import fifa2022 from '../../complements/Image/fifa2022.webp'
import forspoken from '../../complements/Image/forspoken.webp'
import finalFantasy from '../../complements/Image/finalFantasy.webp'
import hogwarts from '../../complements/Image/hogwartsXbox.webp'
import callistoA from '../../complements/Image/screens/callistoA.webp'
import callistoB from '../../complements/Image/screens/callistoB.webp'
import callistoC from '../../complements/Image/screens/callistoC.webp'

const products = [
    {   id:0,
        name:'Assassins Creed Valhala',
        console:'PlayStation',
        price:'$12000',
        image:`${assassins}`,
        screen:{a:`${assassinsA}`,b:`${assassinsB}`,c:`${assassinsC}`},
        text:'Assassins Creed Valhalla es un RPG de acción ambientado durante la invasión vikinga de Inglaterra. Los jugadores tendrán la oportunidad de encarnar al líder de un clan nórdico que ha sido expulsado de Noruega durante las primeras horas del juego y que decide asentarse en Inglaterra para empezar una nueva vida. Pero este es un territorio hostil que no quiere a los vikingos allí, así que debes encontrar la manera de construir tu asentamiento, hacer alianzas a través de la diplomacia o la espada y crecer para satisfacer a tu gente. Mientras, el jugador debe lidiar con una profecía que afirma que traicionará a su familiar más cercano, a su hermano Sigurd. Así que hay una gran historia política con el asentamiento y las alianzas y también hay una historia personal sobre la familia y la traición. En este juego te conviertes en un vikingo, experimentas todo lo que significa ser un vikingo en la Inglaterra del siglo IX.'},
    {   id:1,
        name:'The Callisto Protocol',
        console:'PC',price:'$25000',
        image:`${callisto}`,
        screen:{a:`${callistoA}`,b:`${callistoB}`,c:`${callistoC}`},
        text:'El juego está ambientado en el año 2320 en Calisto, uno de los satélites de Júpiter, y ofrece una vuelta de tuerca al género de horror y supervivencia de nueva generación. Este título desafía a los jugadores a escapar de la cárcel de máxima seguridad Sideros y desvelar sus secretos más estremecedores.'},
    {id:2,name:'Elden Ring',console:'PlayStation',price:'$15000',image:`${elden}`},
    {id:3,name:'Far Cry 6',console:'Xbox',price:'$15000',image:`${farCry}`},
    {id:4,name:'Fifa 2022',console:'PlayStation',price:'$15000',image:`${fifa2022}`},
    {id:5,name:'Final Fantasy XVI',console:'PlayStation',price:'$15000',image:`${forspoken}`},
    {id:6,name:'Forspoken',console:'PlayStation',price:'$15000',image:`${finalFantasy}`},
    {id:7,name:'Hogwarts Legacy',console:'Xbox',price:'$15000',image:`${hogwarts}`}]
    

export const mock=()=>{
    const task = new Promise ((resolve)=>{
        setTimeout(()=>resolve(products),2000)
    })
    return task
}

export const getItem=()=>{
    const task = new Promise ((resolve)=>{
        setTimeout(()=>resolve(products[0]),2000)
    })
    return task
}