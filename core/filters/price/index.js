import { currentStoreView } from '@vue-storefront/store/lib/multistore'

/**
 * Converts number to price string
 * @param {Number} value
 */
export function price (value) {
  if (isNaN(value)) {
    return value
  }
  let formattedVal = parseFloat(value).toFixed(2)
  const storeView = currentStoreView()

  const prependCurrency = (price) => {
    return storeView.i18n.currencySign + price
  }

  const appendCurrency = (price) => {
    return formattedVal + storeView.i18n.currencySign
  }

  if (storeView.i18n.currencySignBehind) {
    formattedVal = appendCurrency(formattedVal)
  } else {
    formattedVal = prependCurrency(formattedVal)
  }

  if (value >= 0) {
    return formattedVal
  } else {
    return '-' + formattedVal
  }
}
