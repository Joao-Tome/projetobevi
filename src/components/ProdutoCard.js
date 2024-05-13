import Card from "react-bootstrap/Card";

function ProdutoCard({ Produto }) {
    const limitCaracterOnDescription = 30;
    
    const listastatus = [
        { name: "Em Estoque", value: 1 },
        { name: "Em Reposição", value: 2 },
        { name: "Em Falta", value: 3 },
    ]

    return (
        <>
            <Card border="primary">
                <Card.Body className="text-center">
                    <Card.Title>
                        {Produto.name}
                    </Card.Title>
                    <Card.Subtitle>
                        {Produto.description.length > limitCaracterOnDescription ? 
                        Produto.description.substring(0,limitCaracterOnDescription) + '...' : Produto.description}
                    </Card.Subtitle>
                    <Card.Text className="mt-2">
                        Preço: R$ {Produto.price}
                        <br/>
                        Status: {listastatus.find( (element) => element.value === Produto.status).name}
                        <br/>
                        Estoque: {Produto.stock_quantity}
                    </Card.Text>
                </Card.Body>

            </Card>
        </>
    )
}

export default ProdutoCard;