declare const $: any;

export default class CommonUtils {
  allOption: 'all';
  noneOption: 'none';

  static isNothing(obj) {
    return typeof obj === 'undefined' ||
      obj === 'null' ||
      !obj ||
      obj.length <= 0 ||
      obj === '' ||
      obj === `` ||
      obj === undefined ||
      obj === null;
  }

  static isSuccess(status) {
    return status === 200 || status === 201 || status === 202;
  }
}
