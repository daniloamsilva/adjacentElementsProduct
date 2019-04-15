function adjacentElementsProduct(inputArray) {
    // Variável para armazenar o maior resultado.
    let largestProduct = null;
    
    // Laço para controle o índice do primeiro valor.
    for (let x = 0; x < inputArray.length; x++){
        // Laço para controlar o índice do segundo valor.
        for (let y = x; y == x; y++){
            // Esse if incrementa y na primeira iteração.
            // Essa foi a solução para não quebrar o funcionamento do laço x.
            if (y == x) y++;
            
            // Cálculo do produto entre os valores.
            let product = inputArray[x] * inputArray[y];
            
            // O valor é atribuido se o produto novo for maior
            // ou a variável largestProduct ainda estiver nula.
            if (product > largestProduct || largestProduct == null)
                largestProduct = product;
        }
    }
    
    // Por fim, é retornado a variável largestProduct.
    return largestProduct;
}