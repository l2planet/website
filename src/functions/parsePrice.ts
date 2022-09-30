/** Parses price numbers to a nice format. */
export function parsePrice(price: number) {
    return parseFloat(price.toPrecision(5)).toLocaleString()
}
