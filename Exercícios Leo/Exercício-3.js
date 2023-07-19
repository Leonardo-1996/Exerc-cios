function nomeDoItem (fruta) {
    let array = ["Banana", "Abacaxi", "Morango", "Uva", "Melancia"];

    const buscarItem = array.find((item) => item === "Melancia");
    console.log(`O item: ${buscarItem} foi encontrado em nosso estoque.`);
 }
    nomeDoItem ("fruta");