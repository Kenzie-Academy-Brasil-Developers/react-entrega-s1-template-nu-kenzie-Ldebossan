export const CardProduct1 = ({product, removeProductFromProductList}) => {
    return (
        <li className='cardProduct1'>
            <div className='DivEsquerda'>
                <span className='TextSalario'> {product.ProductName} </span>
                <span> {product.ProductCategory} </span>
            </div>
            <div className='DivDireita'>
                <span> {product.ProductWeight.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}</span>
                <button className='ButtonExcluir' onClick={() => removeProductFromProductList(product.id)}> Excluir </button>
            </div>
        </li>
    );
};

