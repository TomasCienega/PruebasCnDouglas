function Pedidos2(props) {

    const showCantidad = (event) => {
        props.agregarCarrito(event)
    }
    return (
    
            props.items.map((expense) => (
                <div className={cx(globalStyles.div, globalStyles['col-lg-3'], globalStyles['col-sm-6'], styles['expenses'])}>
                    <Card >
                        <PedidosItem
                            key={expense.id}
                            url_img={expense.url_img}
                            nombre_comida={expense.nombre_comida}
                            descripcion={expense.descripcion}
                            precio={expense.precio}
                            changeCantidad={showCantidad}
                        />
                    </Card>
                 </div>
                ))

    );
}


export default Pedidos2;