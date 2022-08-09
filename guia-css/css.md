 # <strong title="Cascating Style Sheet">CSS</strong> 
> _<strong> CSS </strong> (Cascating Style Sheet) é uma folha de estilo em cascata que utiliza a linguagem Style Sheet._

<br>

É utilizado para estruturar e embelezar o clássico 
    <strong title="Hypertext Markup Language" >
        HTML
    </strong>:

```
HTML                        CSS

<h1>Título</h1>             h1{
                                color: blue;
                              }


Comentários em CSS:
*/ são feitos entre estes recursos */

```
[Praticando HTML, CSS E JS](https://codepen.io/pen/)

<br>

 ## # Anatomia
````
h1{                              
    color: blue;
    font-size: 60px;
    background: gray;
 }
````

### Descrição dos elementos da estrutura acima:

<br>

* ####  ``h1``
O elemento de seleção(Selector)

* #### `` { } ``
 Serve para agrupar as propriedades (Declaration)

* #### `` color ``
A propriedade (property) que contém um valor

* #### `` blue ``

É o valor da propriedade (property value)

<br>

## # Selector
> Conectam os elementos HTML ao CSS

### Tipos de selector:

* #### `` Global Selector ``
````
*
````
* #### `` Element/Type Selector ``
````
h1
h2
p
div
strong
````
* #### `` ID Selector ``
````
#box
#container
````
* #### `` Class Selector ``
````
.red
.m-4
````
* #### `` Attribute Selector ``
````

````

<br>

## # Adicionando CSS

* #### `` Inline  ``
<dd> Utiliza-se o atributo 'style' para adicionar o css </dd>

````
<p style="color: red">
````

* #### `` Tag style ``
<dd> Faz o uso da tag html 'style' para adicionar o css </dd>

````
<style>
    h1{
        background-color: black;
    }
</style>

````

* #### `` Tag link ``
<dd> O arquivo CSS externo em HTML </dd>

````
<link rel="stylesheet" href= "style.css">
````

* #### `` @import ``
<dd> O arquivo CSS externo dentro do CSS </dd>

````
@import url(https://local.com/style.css)
````
[Adiconando CSS](https://font.google.com)

<br>

## # Cascading

> No CSS o style é lido em cascata, de cima para baixo seguindo uma ordem.

Leva em consideração 3 factores:

### > Origem do estilo
<dd> Quanto à origem, o css segue a ordem:</dd>

* #### ``1. Inline  ``
````
style=""
````

* #### `` 2. Tag style ``
````
<style>
````

* #### `` 3. Tag link ``
````
<link>
````

### > Especificidade
<dd> É um valor matemático para os selectors:</dd>

* #### `` Global Selector ``
````
* = 0
````
* #### `` Element/Type Selector ``
````
element/type = 1
````
* #### `` Class/Attribute Selector ``
````
class/attribute = 10
````
* #### `` ID Selector ``
````
id = 100
````
* #### `` Inline ``
````
 inline = 1000
````
<br>

### > A regra !important
<dd> !important é ima regra que quebra o fluxo natural de cascata. </dd>

````
h1{
    color: blue !important;
}

(*evitar uso)
````
<br>

## # At-rules
> Está relacionado ao comportamento do CSS.<br> Começa como o sinal '@' seguido do identificador e do valor:

* #### `` @import ``
<dd> Inclui um CSS externo </dd>

````
@import url(https://local.com/style.css)
````

* #### `` @media  ``
<dd> Regras condicionais para dispositivos </dd>

````
@media(min-width: 500px){
    *Rules here!
}
````

* #### `` @font-face  ``
<dd> Fontes externas </dd>

````
@font-face{ *Rules here!}
````
* #### `` @keyframes ``
<dd> Animation </dd>

````
keyframes *nameOfAnimation {
    *Rules here!
}

````
<br>

## Consulta

* [Praticando HTML, CSS E JS](https://codepen.io/pen/)
* [Adiconando CSS](https://font.google.com)




     