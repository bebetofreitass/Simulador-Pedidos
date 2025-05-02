export const calculadorTotal = (itens, aplicarTaxa) => {
    let total = 0;

    for (const item of itens) {
        total += aplicarTaxa(item.preco);
    }
    return total;
};