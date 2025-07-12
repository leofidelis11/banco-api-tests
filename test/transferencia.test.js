const request = require('supertest')
const { expect } = require('chai')
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao.js')

describe('Transferências', () => {
    describe('POST/transferencias', () => {
        let token

        beforeEach(async () => {
            token = await obterToken('julio.lima', '123456')
        })

        it('Deve retornar sucesso com 201 quando o valor da transferência for maior ou igual a dez reais', async () => {
            const resposta = await request(process.env.BASE_URL)
            .post('/transferencias')
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send({
              contaOrigem: 1,
              contaDestino: 2,
              valor: 11,
              token: ""
            })

            expect(resposta.status).to.equal(201)
        })

        it('Deve retornar sucesso com 422 quando o valor da transferência for menor que dez reais', async () => {
            const resposta = await request(process.env.BASE_URL)
            .post('/transferencias')
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send({
              contaOrigem: 1,
              contaDestino: 2,
              valor: 9,
              token: ""
            })

            expect(resposta.status).to.equal(422)
        })
    })
})