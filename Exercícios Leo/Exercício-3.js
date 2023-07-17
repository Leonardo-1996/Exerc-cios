function nomeDoItem (melancia) {
    let array = [];

    array.push("Banana");
    array.push("Abacaxi");
    array.push("Morango");
    array.push("Uva");
    array.push("Melancia");

    const buscarItem = array.find((item) => item === "Melancia");
    console.log(`O item: ${buscarItem} foi encontrado em nosso estoque.`);
 }
    nomeDoItem ("Melancia");