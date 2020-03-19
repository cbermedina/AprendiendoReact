import React ,{Component} from 'react';
class MyComponent extends Component{
    render(){
        let receta={
            nombre:'Pizza',
            ingredientes:['Tomato','Cheese','Cooked Ham'],
            calorias:400
        }
        return <React.Fragment>
            <h1>Receta: {receta.nombre}</h1>
             <h2>Calorias: {receta.calorias}</h2>
             <ol>
                 {
                     receta.ingredientes.map((ingrediente,index) =>{
                         return(
                         <li key={index}>
                            {ingrediente}
                         </li>)
                     })
                 }
             </ol>
            <hr/>
        </React.Fragment>
    }
}
export default MyComponent;