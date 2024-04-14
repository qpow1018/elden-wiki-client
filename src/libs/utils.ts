class Utils {
  public convertNumberWithDecimal(num: number, decimal: number) {
    return Number(num.toFixed(decimal));
  }

}

const _instance = new Utils();
export default _instance;