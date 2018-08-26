export class CurrencyPair {
  id: string;
  base_currency: string;
  quote_currency: string;

  constructor( id: string, base_currency: string, quote_currency : string) {
     this.id = id;
     this.base_currency = base_currency;
     this.quote_currency = quote_currency; 
  }
};
