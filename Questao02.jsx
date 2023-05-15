// //V1 -> fiz essa quando estava sem internet
// import { useState } from "react"

// const Questao02 = () => {
//     let [virar, setVirar] = useState(1) //sem internet não consegui consultar alguma maneira de utilizar estados com boolean (e nem consegui fazer nos meus testes), então tentei fazer uma lógica com números

//     let Pikachu = () => {
//         setVirar(<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt=""/>)

//     }

//     if (virar === 1) { //se o número for 1 o pikachu aparece de frente, se não de costas
//         Pikachu = () => {
//             return(
//             <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt=""/>
//             )
//         }
//     } else {
//         Pikachu = () => {
//             return(
//             <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png" alt=""/>
//             )
//         }
//     }

//     return (
//         <div>
//             <Pikachu />
//             <button onClick={() => setVirar(virar +1)}> 
//                 Costas
//             </button>
//             <button onClick={() => setVirar(virar -1)}>
//                 Frente
//             </button>
//             <h1>{virar}</h1>
//         </div>
//     )
// }
// //adicionei mais um botão para conseguir fazer com que o sprite fosse trocado, pois não consegui implementar a troca 
// export default Questao02

//V2 -> quando a internet deu o ar da graça
import { useState } from "react"

const Questao02 = () => {
    const [virar, setVirar] = useState(false)
    const handleToggle = () => {
        setVirar((current) => !current)
    }

    let Pikachu = () => <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="" />

    return (
        <>
            <Pikachu />
            <button onClick={handleToggle}>Trocar</button>
            {virar && <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png" alt=""/>}
        </>
    )
}

//tentei criar uma variável para receber a imagem e conseguir trocar a partir da troca, mas não consegui
// para fazer com que a imagem de costas aparecesse eu usei o HanddleToggle para manusear o boolean o ligando e desligando
export default Questao02
