function countSymbols(str){
      // Создание переменных

      let countStart = 1; //инициализация кол-ва букв
      // Массивы для ключей и значений
      let keysArr = [];
      let valuesArr = [];
      //Конечная строка
      let strEnd = '';
      // Пойдем через Map
      const strMap = new Map();

      // Заходим в строку
      [...str].forEach(el =>{

        // Проверяем есть ли уже наш эл. в Map по ключу
        if(strMap.has(el)){

          // Выясняем кол-во букв
          let count = strMap.get(el);
          // И перезаписываем увеличивая кол-во букв при совпадении
          strMap.set(el, count + 1);
        } else{
          // иначе просто добавляем
          strMap.set(el, countStart)
        }
      });

      console.log(strMap);

      // Создаем 2 массива с ключами и значениями из Mapa (Может можно подругому но хз)
      for(let el of strMap.keys()){
        keysArr.push(el)
      } 
      for(let el of strMap.values()){
        valuesArr.push(el)
      } 


      // Заходим в в массив ключей, проходимся по нему и создаем строку из текущего эл. в массиве ключей и забираем из массива значений по индексу текущего ел. значение
      keysArr.forEach((el, ind) =>{
        strEnd += `${el}${valuesArr[ind]}`;
      })
      
      console.log(strEnd);
    }

    countSymbols('AAAABBCCCDDD');