# acessibilidade
Código super simples em JavaScript puro para acessibilidade.

Com o intuito de ajudar a quem precisa criei essa classe super simples em JavaScript puro para ser usada em qualquer projeto WEB. 

<h3>Como usar</h3>

<b>1. Inicie os Arquivos</b>

Para começar a usar, inicie os arquivos CSS e JS.

```html
<head>
    <title>Acessibilidade</title>

    <!-- STYLE E CONTRASTE -->
    <link rel='stylesheet' id='styleContraste' href="css/style.css"  type='text/css' media='all' />

    <!-- ACESSIBILIDADE JS -->
    <script src="js/acessibilidade.js"></script>
</head>
```

OBS: Use o ID para poder mudar o CSS que será alterado. 

DICA: Para não precisar escrever duas folhas de estilo, geralmente uso dois css um abaixo do outro. Sendo o primeiro o CSS DEFAULT e o segundo o css de contraste sobrescrevendo apenas as cores do arquivo DEFAULT. 

<b>2. Inicie a Função de Cookie</b>

Para que os textos e cores sejam sempre ajustados conforme o salvo no COOKIE.

```html
<body onload="checkCookie()">
```

<b>3. Adicione os Botões de Fonte</b>

Para que as fontes possam ser alteradas e salvas no COOKIE utilize a base abaixo. Você pod estilizar da forma que quiser.

```html
<span class="font-con">
    <button Onclick="mudaFonte('menos'); return false;">A-</button>
    <button Onclick="mudaFonte('padrao'); return false;">A</button>
    <button Onclick="mudaFonte('mais'); return false;">A+</button>
</span>
```

<b>4. Adicione o Botão de Contraste</b>

Ultilize o BUTTON abaixo para mudar o estilo css para o contraste. Para que altera a LABEL do botão use o ID.

```html
<span class="font-con">
    <button id="mudaEstilo" onClick="mudaContraste()">PRETO</button>
</span>
```

<b>5. Adicione a Classe de Formatação</b>

Para poder aumentar e diminuir suas fontes use a classe "txtFontC", ou altere no arquivo JS para a que melhor lhe atender. 

```html
<div class="txtFontC">
    <p>Lorem ipsum dolor sit amet...</p>
    <p>Lorem ipsum dolor sit, amet...</p>
</div>
```

<h3>Conclusão</h3>

Veja abaixo alguns sites que usam esses mesmo códigos:

https://www.senadorcanedo.go.gov.br/

https://www.altohorizonte.go.gov.br/

http://www.perolandia.go.gov.br/