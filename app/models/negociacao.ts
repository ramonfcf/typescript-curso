export class Negociacao {

   constructor(
      private _data: Date,
      public readonly quantidade: number,
      public readonly valor: number)
      {}

   get volume(): number {
      return this.valor * this.quantidade;
   }

   get date(): Date {
      const data_ = new Date(this._data.getTime());
      return data_;
   }
}
