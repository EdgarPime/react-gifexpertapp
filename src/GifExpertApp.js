import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = () => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setcategories] = useState(['One Punch'])
    
    // const handleAdd = () => {
    //     // setcategories( ['HunterXHunter',...categories])
    //     setcategories( cats => [...cats, 'HunterXHunter']);
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setcategories }/>
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    // categories.map( (category,i) - i en este caso es la posicion del elemento.
                    //Key debe ser el identificador unico.
                    categories.map( category => 
                        // return <li key={ category }> { category } </li>
                         <GifGrid 
                        key={ category }
                        category={ category } 
                        />
                    )
                }
            </ol>
        </div>
    )
}

export default GifExpertApp;
