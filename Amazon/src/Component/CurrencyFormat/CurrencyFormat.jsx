import React from "react";
import numeral from "numeral";

const CurrencyFormat = ({ amount }) => {
    const formattedValue = numeral(amount).format("$0,0.00");
    return <div>{formattedValue}</div>;
};

export default CurrencyFormat;