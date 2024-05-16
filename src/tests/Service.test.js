import instanceAxios from "../services/axios";

test('Testa Login API', () => {

    return instanceAxios({
        method: 'post',
        url: "/auth/login",
        data: {
            "email": process.env.REACT_APP_EMAIL_API,
            "password": process.env.REACT_APP_SENHA_API
        }
    })
        .then((resp) => {
            expect(resp.data.acces_token).not.toBeNull()
        })
        .catch((error) => {
            expect(error.response.data).rejects.not.toStrictEqual({
                "error": "Unauthorized"
            })
        })
});
test('Testa Login API Erro', () => {

    return instanceAxios({
        method: 'post',
        url: "/auth/login",
        data: {
            "email": 'aaa',
            "password": 'senhaincorreta'
        }
    })
        .then((resp) => {
            expect(resp.data.acces_token).rejects.not.toBeNull()
        })
        .catch((error) => {
            expect(error.response.data).toStrictEqual({
                "error": "Unauthorized"
            })
        })
});