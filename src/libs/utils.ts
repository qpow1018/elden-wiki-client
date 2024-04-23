class Utils {
  public convertNumberWithDecimal(num: number, decimal: number) {
    return Number(num.toFixed(decimal));
  }

  public removeStringExcludingInteger(str: string) {
    const regex = /[^0-9]/g;
    return str.replace(regex, '');
  }

}

const _instance = new Utils();
export default _instance;