import React from 'react'
import "./Searchbox.css"
const Searchbox = ({searchChange}) => {
    return (
        <div>
            <link rel="stylesheet" 
href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" 
integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>

        <form action ="">
        <input type="text" placeholder="Search" className="tc bg-lightest-blue height-15px"
        onChange={searchChange}/>
        <i className="fa fa-search"></i>
        </form>
        </div>
    )
}

export default Searchbox