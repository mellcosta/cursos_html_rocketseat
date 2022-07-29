/*
1.Declare uma variável de nome weight
*/ 
        let weight

/*
2.Que tipo de dado é a váriavel acima?
*/ 
        
        console.log(typeof weight)
            //undefined
         

/*
3.Declare uma variável e atribua valores para cada um dos dados:
        *nome: String
        *age: Number(integer)
        *stars:Number(float)
        *inSubscribed: Boolean
*/ 
        
        const  nome = 'Costa'
        let age, stars
        age = 18
        stars = 1.5
        var inSubscribed= false
         

/*
4-A variável student abaixo é de que tipo de dado?

*/ 
        
        let student = {}

            console.log(typeof student)
                //object
         
        
/*
4.1-atribua a ela as mesmas propriedades e valores do exercício 3.
*/ 
        
              
                 student = {
                    nome: 'Costa',
                    age:18,
                    weight: 1.5,
                    inSubscribe: false
                }
            console.log(student)
                 

/*
4.2-Mostre no console a seguinte mensagem:
<nome> de idade <age> pesa <weight> kg.

        ~~Atenção~~
-Substituir <nome> <age> e <weigth> pelos valores de cada propridade do objecto
*/ 

            console.log(`${student.nome} de idade ${student.age} pesa ${student.weight} kg`)
/*
5-Declare uma variável de tipo Array , de nome students  e atribua a ela nenhum valor, ou seja, um array vazio.
*/ 
            let students=[]

/*
6-Reatribua valor para a variável acima colocando dentro dela o objecto student da questão 4.
(Não copiar e colar o objecto, mas usar o objecto criado e inserir ele no array)
*/ 
           
                students= [
                    student
                ]
                console.log(students)
           

/*
7-Coloque no console o valor da posição 0 no array acima
*/ 
        console.log(students[0])

/*
8-Crie um novo student e coloque na posição 1 do array students.
*/ 

               const student2= {
                    widht: 1.80
                }
               
                students=[
                    student,
                    student2
                ]

            console.log(students[1])
        

/*
9-Sem rodar o código responda qual é a resposta do código abaixo e porquê?
Após sua resposta, rode e veja se acertou.

        console.log(a)
         var a = 1
            -undefined
*/ 