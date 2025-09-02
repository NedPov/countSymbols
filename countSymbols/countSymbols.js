    function countSymbols(str){
      // Создание переменных

      let countStart = 1; //инициализация кол-ва букв
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

      // Проходимся по Map и вытаскиваем ключи и значения, и записываем их в результирующую строку
      strMap.forEach((values, key) =>{
        strEnd +=`${key}${values}`
      })
      
      console.log(strEnd);
    }

    countSymbols('AAAABBCCCDDD');