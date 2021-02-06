import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

   
    // const [images, setImages] = useState([]);
    const {data:images, loading} = useFetchGifs( category );
     
    // //Esto quiere decir que el codigo se ejecuta cuando el componente es renderizado por primera vez
    // useEffect( () => {
    //     getGifs( category )
    //         .then( imgs => {
    //             setImages(imgs) 
    //         })
    //         // .then( setImages )
    // }, [category])

    // images.map( img => ( 
    //     <li key={ img.id }> { img.title }</li>
    // ))
    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>
            { loading && <p className="animate__animated animate__flash">Loading</p> }
            <div className="car-grid">
                {
                    images.map( ( img ) => ( 
                        <GifGridItem 
                            key={img.id} 
                            {...img} // img={ img } Es lo mismo
                        />
                    ))
                }
            </div>
        </>
    )
}
