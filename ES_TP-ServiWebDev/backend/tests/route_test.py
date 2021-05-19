import pytest, unittest, json, flask
from init_flask import app
from routes.auth import status

def test_route(self):
    app_test = app.test_client()
    self.response = app_test.post('/orders')
    self.assertEqual(201, self.response.status_code)
