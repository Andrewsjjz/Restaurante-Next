const formatearDinero = cantidad => {
    return cantidad.toLocaleString ("en-US", {
        sytle: "currency",
        currency: "USD",
    })
}

export {formatearDinero}
