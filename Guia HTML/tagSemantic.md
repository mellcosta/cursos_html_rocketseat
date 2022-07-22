# Tags HTML Semânticas

>As tags HTML semânticas são de grande importância , pois algumas tags têm significados específicos e orientações claras sobre onde devem ficar na página e o motivo dela existir.
___

# Seções comuns

Podemos entender algumas estruturas comuns do HTML, por isso vamos falar sobre essas seções comuns que temos entre documentos, mas atenção que nem todas as páginas vão ter todas essas seções.

* Cabeçalho 
```
<header> :
O cabeçalho do nosso site, o local onde geralmente fica a logo e o menu.
```
* Navegação 
```
<nav> :
A navegação do site vai oferecer links para seções do site, o nosso menu. costuma ficar dentro da header, porém pode ficar em outros lugares, como em uma parte lateral, ou na parte de baixo.
```
* Conteúdo principal 
````
<main> :
A parte do site aonde vai o conteúdo principal, no caso de um blog, teremos vários artigos, vários posts.
````
* Conteúdo relacionado 
````
<aside>:
O conteúdo relacionado é algo que seja relacionado levemente ao nosso conteúdo principal, porém não tanto para ficar lá.
````

* Rodapé 
````
<footer>
Onde ficam as informações da parte de baixo da página.
````
Exemplo básico de como ficaria um HTML semântico:
````
<body>
    <header>
        logomarca

        <nav>
            <ul>
                <li>item</li>
            </ul>
        </nav>
    </header>

    <main>
        <h1> Conteúdo principal </h1>

        <article>
            <h2> Bloco de conteúdo relacionado</h2>
        </article>

        <aside>
            <p> Parte lateral: Glossário, Links relacionados, Biografias</p>
        </aside>

        <section> 
            <h1> Secções da página</h1>
        </section>
    </main>

    <footer>rodapé</footer>

</body>
```` 

## Elementos HTML não semânticos

Escrever HTML semântico é algo que leva tempo, e precisa de muita prática para fazer com que o HTML tenha maior significado. 
Existem dois elementos não semânticos para uso genérico, ambos usam atributos globais como id e class para entregar um maior significado:

* span: é usado quando não se acha um elemento de texto semântico, dando destaque
* div: quando não se acha um elemento de bloco semântico.

````
<h1>Título <span class="destaque">destacado</span></h1>
Um exemplo do uso de div semântico:

<div class="cart">
    <h2>Carrinho de compras</h2>
</div>
````