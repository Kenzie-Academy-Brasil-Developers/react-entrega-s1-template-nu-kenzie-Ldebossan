import '../../styles/index.scss';

export function TotalMoney({teamTotalBuget}) {
    return(
        <div className='DivTotalMoney'>
            <div className='containerValor'>
                <h3> Valor total: </h3>
                <h3 className='ValorTotal'>{teamTotalBuget.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})} </h3>
            </div>
            <p className='TextValor'> O valor se refere ao saldo </p>
        </div>
    );
};
