const exchangeRateUsdToVnd = 23255.814;
const exchangeRateKrwToVnd = 19.5813953;
const exchangeRateIdrToVnd = 1.60465116;
const exchangeRateEurToVnd = 26118.2558;

function addFormatting(amount) {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  }

function determineExchangeRate(currencyToConvert, convertedCurrency, amount) {
    if (currencyToConvert === 'vnd' && convertedCurrency === 'usd') {
      return (amount + ' ' + currencyToConvert + ' is equivalent to ' + addFormatting(amount / exchangeRateUsdToVnd) + ' ' + convertedCurrency)
    }
    if (currencyToConvert === 'vnd' && convertedCurrency === 'krw') {
        return (amount + ' ' + currencyToConvert + ' is equivalent to ' + addFormatting(amount / exchangeRateKrwToVnd) + ' ' + convertedCurrency)
    }
    if (currencyToConvert === 'vnd' && convertedCurrency === 'idr') {
        return (amount + ' ' + currencyToConvert + ' is equivalent to ' + addFormatting(amount / exchangeRateIdrToVnd) + ' ' + convertedCurrency)
    }
    if (currencyToConvert === 'vnd' && convertedCurrency === 'eur') {
        return (amount + ' ' + currencyToConvert + ' is equivalent to ' + addFormatting(amount / exchangeRateEurToVnd) + ' ' + convertedCurrency)
    }
    if (currencyToConvert === 'usd' && convertedCurrency === 'vnd') {
        return (amount + ' ' + currencyToConvert + ' is equivalent to ' + addFormatting(amount * exchangeRateUsdToVnd) + ' ' + convertedCurrency)
    }
    if (currencyToConvert === 'usd' && convertedCurrency === 'krw') {
        return (amount + ' ' + currencyToConvert + ' is equivalent to ' + addFormatting(amount * exchangeRateUsdToVnd / exchangeRateKrwToVnd) + ' ' + convertedCurrency)
    }
    if (currencyToConvert === 'usd' && convertedCurrency === 'idr') {
        return (amount + ' ' + currencyToConvert + ' is equivalent to ' + addFormatting(amount * exchangeRateUsdToVnd / exchangeRateIdrToVnd) + ' ' + convertedCurrency)
    }
    if (currencyToConvert === 'usd' && convertedCurrency === 'eur') {
        return (amount + ' ' + currencyToConvert + ' is equivalent to ' + addFormatting(amount * exchangeRateUsdToVnd / exchangeRateEurToVnd) + ' ' + convertedCurrency)
    }
    if (currencyToConvert === 'krw' && convertedCurrency === 'usd') {
        return (amount + ' ' + currencyToConvert + ' is equivalent to ' + addFormatting(amount * exchangeRateKrwToVnd / exchangeRateUsdToVnd) + ' ' + convertedCurrency)
    }
    if (currencyToConvert === 'krw' && convertedCurrency === 'vnd') {
        return (amount + ' ' + currencyToConvert + ' is equivalent to ' + addFormatting(amount * exchangeRateKrwToVnd) + ' ' + convertedCurrency)
    }
    if (currencyToConvert === 'krw' && convertedCurrency === 'idr') {
        return (amount + ' ' + currencyToConvert + ' is equivalent to ' + addFormatting(amount * exchangeRateKrwToVnd / exchangeRateIdrToVnd) + ' ' + convertedCurrency)
    }
    if (currencyToConvert === 'krw' && convertedCurrency === 'eur') {
        return (amount + ' ' + currencyToConvert + ' is equivalent to ' + addFormatting(amount * exchangeRateKrwToVnd / exchangeRateEurToVnd) + ' ' + convertedCurrency)
    }
    if (currencyToConvert === 'idr' && convertedCurrency === 'usd') {
        return (amount + ' ' + currencyToConvert + ' is equivalent to ' + addFormatting(amount * exchangeRateIdrToVnd / exchangeRateUsdToVnd) + ' ' + convertedCurrency)
    }
    if (currencyToConvert === 'idr' && convertedCurrency === 'krw') {
        return (amount + ' ' + currencyToConvert + ' is equivalent to ' + addFormatting(amount * exchangeRateIdrToVnd / exchangeRateKrwToVnd) + ' ' + convertedCurrency)
    }
    if (currencyToConvert === 'idr' && convertedCurrency === 'vnd') {
        return (amount + ' ' + currencyToConvert + ' is equivalent to ' + addFormatting(amount * exchangeRateIdrToVnd) + ' ' + convertedCurrency)
    }
    if (currencyToConvert === 'idr' && convertedCurrency === 'eur') {
        return (amount + ' ' + currencyToConvert + ' is equivalent to ' + addFormatting(amount * exchangeRateIdrToVnd / exchangeRateEurToVnd) + ' ' + convertedCurrency)
    }
    if (currencyToConvert === 'eur' && convertedCurrency === 'usd') {
        return (amount + ' ' + currencyToConvert + ' is equivalent to ' + addFormatting(amount * exchangeRateEurToVnd / exchangeRateUsdToVnd) + ' ' + convertedCurrency)
    }
    if (currencyToConvert === 'eur' && convertedCurrency === 'krw') {
        return (amount + ' ' + currencyToConvert + ' is equivalent to ' + addFormatting(amount * exchangeRateEurToVnd / exchangeRateKrwToVnd) + ' ' + convertedCurrency)
    }
    if (currencyToConvert === 'eur' && convertedCurrency === 'idr') {
        return (amount + ' ' + currencyToConvert + ' is equivalent to ' + addFormatting(amount * exchangeRateEurToVnd / exchangeRateIdrToVnd) + ' ' + convertedCurrency)
    }
    if (currencyToConvert === 'eur' && convertedCurrency === 'vnd') {
        return (amount + ' ' + currencyToConvert + ' is equivalent to ' + addFormatting(amount * exchangeRateEurToVnd) + ' ' + convertedCurrency)
    }
  }

function convertCurrency() {
    const valueOfInput = document.getElementById('amountInput').value
    const initialCurrency = document.getElementById('start').value
    const finalCurrency = document.getElementById('end').value
  
    console.log('initialCurrency', initialCurrency)
    console.log('finalCurrency', finalCurrency)
  
    const convertedValue = determineExchangeRate(initialCurrency, finalCurrency, valueOfInput)
  
    document.getElementById('result').innerHTML = convertedValue
  }
