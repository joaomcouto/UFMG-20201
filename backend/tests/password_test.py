import pytest, unittest, json
from modules.utils import hash_password, verify_password
from init_flask import app

def test_password_hash():
    password = "test_pass"
    hash_pass = hash_password(password)
    assert(verify_password(hash_pass, password))
