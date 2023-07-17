        const array = [12.40, 26.70, 120.89, 3.30, 1.25, 1024.00];
        const valorInicial = 0;
        const somaDosValores = array.reduce(
          (valorAcumulado, valorAtual) => valorAcumulado + valorAtual,valorInicial
        ); 
        console.log(`O valor total da compra é: ${somaDosValores}`);