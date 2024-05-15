import Card from "react-bootstrap/Card";
import "../stylesheet/ProdutoCard.css";

function ProdutoCard({ Produto }) {
    const limitCaracterOnDescription = 30;

    const listastatus = [
        { name: "Em Estoque", value: 1 },
        { name: "Em Reposição", value: 2 },
        { name: "Em Falta", value: 3 },
    ]

    //Objeto de Produto Enviado via API
    // id : 122
    // name : "Produto Teste 2"
    // description: "Produto Teste 2"
    // price : 5 
    // status : 1 
    // stock_quantity : 5 
    // created_at : "2024-05-12T15:31:01.000000Z"
    // updated_at : "2024-05-12T15:31:01.000000Z" 
    // deleted_at : null
    return (
        <>
            <Card className="card-produto">
                <Card.Body className="text-center">
                    <Card.Title>
                        {Produto.name}
                    </Card.Title>
                    <Card.Subtitle>
                        {Produto.description.length > limitCaracterOnDescription ?
                            Produto.description.substring(0, limitCaracterOnDescription) + '...' : Produto.description}
                    </Card.Subtitle>
                    <Card.Text className="mt-2">
                        Preço: R$ {Produto.price}
                        <br />
                        Status: {listastatus.find((element) => element.value === Produto.status).name}
                        <br />
                        Estoque: {Produto.stock_quantity}
                    </Card.Text>
                    <Card.Text className="text-muted">
                        Criado em: {new Date(Produto.created_at).toLocaleDateString()}
                        <br />
                        Ultima Alteração em: {new Date(Produto.updated_at).toLocaleDateString()}
                    </Card.Text>
                </Card.Body>

            </Card>
        </>
    )
}

export default ProdutoCard;