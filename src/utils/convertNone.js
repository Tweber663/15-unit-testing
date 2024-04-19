
export const convertNone = (from, amount) => {
    return from === 'USD' ? `$ ${amount}.00` : `PLN ${amount}.00`;
}

