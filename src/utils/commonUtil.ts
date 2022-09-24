import replace from 'lodash/replace';
import toNumber from 'lodash/toNumber';

export const toNumberMoney = (money: string): number => toNumber(replace(money, '$', ''));
