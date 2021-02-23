# Success and Error Handling

<span>Estrutura de sucesso</span>

```json
{
  "data": {
		"success": {
			"type": "Success",
			"message": "Mensagem descevendo a operação",
			"code": 201
		}
	}
}
```

<span>Estrutura de erros</span>

```json
{
  "data": {
		"error": {
			"type": "OAuthException",
			"message": "Mensagem descevendo a operação concluída",
			"detail": "Mensagem detalhada",
			"code": 201,
			"help": "link para encontrar ajuda"
		}
	}
}
```
