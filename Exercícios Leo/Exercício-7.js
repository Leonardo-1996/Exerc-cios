const produtos = [
    {
      titulo: "Notebook",
      preco: 3200.00,
      categoria: "Eletrônicos"
    },
    {
      titulo: "Caderno",
      preco: 10.50,
      categoria: "Papelaria"
    },
    {
      titulo: "Celular",
      preco: 1500.99,
      categoria: "Eletrônicos"
    },
    {
      titulo: "Televisão",
      preco: 2349.99,
      categoria: "Eletrônicos"
    },
    {
      titulo: "Mesa",
      preco: 529.49,
      categoria: "Casa"
    },
    {
      titulo: "Tênis",
      preco: 69.99,
      categoria: "Esporte"
    },
  ];
  
  const contarProdutos = produtos.length;   //Quantidade de produtos
  console.log (`Seu carrinho possui um total de: ${contarProdutos} produtos.`);

  const filtrarEletronicos = produtos.filter((item) => item.categoria === "Eletrônicos");
  console.log(filtrarEletronicos);   //Total de produtos eletrônicos

  const filtrarMaiorPreco = produtos.filter((item) => item.preco >= 1500);
  console.log(filtrarMaiorPreco);   //Filtro de valor acima de 1.500

  const filtrarTitulo = produtos.filter((item) => item.titulo == "Caderno");
  console.log(filtrarTitulo);  //Filtro por nome (Caderno)

  const filtrarMenorPreco = produtos.filter ((item) => item.preco <= 1500);
  console.log(filtrarMenorPreco); //Filtro de preços entre 10 e 1500
  
  produtos.push = ({
    titulo: "Jordam",
    preco: 1499.90,
    categoria: "Esportes"
  }); 
  console.log (produtos);  //Adicionado o produto (Jordam)