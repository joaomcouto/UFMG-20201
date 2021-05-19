import pytest, unittest, json
from modules.db import userModel
from init_flask import app

def test_db_userModel():
    nome = "test user"
    email = "test@email.com"
    telefone = "912345678"
    senha = "senha"
    endereco = "Rua Teste"
    cidade = "Cidade Teste"
    bairro = "Bairro Teste"
    contratante = 0
    user = userModel(nome, email, senha, telefone, endereco, cidade, bairro, contratante)

    assert(user["nome"] == nome)
    assert(user["email"] == email)
    assert(user["telefone"] == telefone)
    assert(user["senha"] != senha)
    assert(user["endereco"] == endereco)
    assert(user["cidade"] == cidade)
    assert(user["bairro"] == bairro)
    assert(user["contratante"] == contratante)
