const Questao01X = () => {

    const Alunos = [
        {nome: "Sicrano", notas: {ap1: 8.4, ap2:5.4}},
        {nome: "Beltrano", notas: {ap1: 7.5, ap2:3.5}},
        {nome: "Fulano", notas: {ap1: 7.3, ap2:9.2}}
    ] 

    return (
        <div>
            <h1>Componenete A</h1>
            <Questao01Y nome={Alunos.nome} ap1={Alunos.ap1} ap2={Alunos.ap2} />
        </div>
    )
}

function Questao01Y({nome, ap1, ap2}) {
    return <div>
        <h1>Componente B</h1>
    </div>
}

export default Questao01X
