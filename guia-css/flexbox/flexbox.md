# Flexbox

* ### Layout

 A maneira como os elementos estão distribuidos na tela

* ### Normal Flow

 A maneira como os elementos <span title="<p>, <div>" >`block`</span> e <span title="<span>, <strong>">`inline`</span> ficam na página.

* ### Tables

 A tag  `table` recebe um *display: table* e faz os elementos <span title="linha" >`td`</span> e  <span title="coluna" >`tr`</span> formarem uma tabela.

* ### Tableless

 Usa as propriedades <span title="float: left / rigth;" >`float`</span> e <span title="clear: both" >`clear`</span> para que os elementos possam mudar de posição na tela.

* ### Flexbox

 Caixa que se torna flexível, fazendo com que os elementos internos recebam melhor alinhamento, organização e tamanhos flexíveis.

 ---

 ## Terminologias


* <h3 title="elemento que contém">Flex container</h3>
    <p title="elemento contido">-Flex item</p>

* <h3 title="elementos dentro de elementos">Nesting</h3>

* <h3>Axis (eixos)</h3>
    <p   title="start; end">-main (principal)</p >
    <p title="start; end">-cross (cruzado)</p>   

* <h3 title="flex: 1;">Flex sizing</h3>
    <p>-item flexível</p>
    <p>-altera width e hwight para ajustar tamanho da tela</p>

---

## Propridades

```
<div class="container">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
    <div class="item">D</div>
</div>
```

### Flex .container:

* `Direção dos itens`

```
flex-direction: row|row-reverse|column|column-reverse;
```

* `Multiplas linhas`

Cria mais de 1 eixo principal ao flexionar

```
flex-wrap: wrap|wrap-reverse;
```

* `Shorthand direction + wrap`

```
flex-flow:column wrap;
```

* `Alinhamento (main, cross)`

 1. eixo principal

```
justify-content: flex-start|flex-end;
                 center;
                 space-around( ao redor)
                 space-between(entre)
                 space-evenly (por-eles)
```

 2. eixo cruzado
 
```
align-items: stretch (esticar);
             flex-start|flex-end;
             center;
```

* `Espaço entre os itens`

Unidades:

* fixas: px,pt

* flexíveis: %, em, rem

```
gap: 2em;
```

---
---

### Flex .items:

* `Largura e altura dos itens(width/height)`

```
flex-basis: auto | 0 | 1px | 2em | 3rem;
```

* `Crescimento e adaptação dos itens`

1. Aplicar em elementos
2. Ocupa espaços por frações
3. cresce em relação aos espaços vazios e adapta-se

```
flex-grow: 0 | 1| 2;
```

* `Encolhimento e encaixe de elementos`

1. Encurta em relação ao que tem na caixa
2. Quanto maior o número, menor fica: 0>1>2...

```
flex-shrink: 0 | 1| 2;
```

* `Shorthand grow + shrink + basis`

1. Altera o tamanho de múltiplos items
2. basis > grow > shrink

```
flex: 1 0 20px;
```

* `Order`

Ordena os elementos na caixa

```
Se: A B C

.box div:nth-child (3) {
    order: 0;
}
= C A B
```
