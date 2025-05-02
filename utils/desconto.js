export function aplicarDesconto(valor) {
    if (valor > 200) {
        return valor * 0.8;
    }
    return valor;
}
