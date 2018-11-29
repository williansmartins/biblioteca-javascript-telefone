# Uma biblioteca simples de usar que já traz pronto as máscaras utilizadas nos telefones do Brasil com 7,8 e 9 números.

Exemplo da biblioteca funcionando: [clique aqui](https://williansmartins.github.io/biblioteca-javascript-telefone/)

## Forma de usar esta biblioteca:

### Adicionar dependências:
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.11/jquery.mask.min.js"></script>
<script type="text/javascript" src="br-phone-mask.js"></script>
```

### Criar o elemento html:
```
<input type="text" id="telefone" />
```

### Aplicar a mascara:
```
myLib("#telefone").aplicarMascara();
```
