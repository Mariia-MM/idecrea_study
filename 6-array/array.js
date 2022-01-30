
//6-1

const shop = ['apple','milk','bread','butter','sugar'];
console.log(shop);

//6-2

     arr1 = [1, 2, 3];
    let sum = 0;
    let count = 0;
    let media;

    arr1.forEach(function (el){
       sum = sum+el;
       count = count+1;
        media= sum/count;
    })
    console.log('Media de las notas:',media);



    arr2 = [10, 80, 10];
    let media2 = arr2.reduce(function (total,el){
          return  total+el;
    },0)
    console.log('Media de otras notas:', Math.round(media2/arr2.length));



    //6-3
    numerosSueltos = [2, 1, 6, 7, 6, 3];
    console.log('Start array:',numerosSueltos);

        //1 Suma todos los números


            let summary = function (arr){
                let suma = 0;
                arr.forEach(function (el){
                 suma = suma+el;
                })
                return console.log('Summary of all elements of array: ',suma);
            };


            summary(numerosSueltos);

       //2 Imprime un número aleatorio de la lista


         let random = function getRandom(){
            return  console.log('Random number:',numerosSueltos[Math.trunc(Math.random( )*(numerosSueltos.length-1)+1)]) ;
         };
          random();


       //3 Borra el primer número.

        let newArray =[];
        let deleteFirst = function (){
            numerosSueltos.shift();
            newArray = numerosSueltos;
            return console.log('New array without first element:',numerosSueltos);
        }
        deleteFirst();


       //4 Borra el último número.

            let deleteLast = function (){
                numerosSueltos.pop();
                return console.log('New array without last element',newArray)
            }
            deleteLast();

       //5 Vuelve a sumarlos.

            summary(newArray);

       //6 Añade un 5.

        newArray.push(5);
        console.log('New array with added 5 : ',newArray);

        //7 Vuelve a sumarlos.

          summary(newArray);


