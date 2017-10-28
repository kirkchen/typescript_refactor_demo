export default interface IDiscounter {
    Calculate(totalPrice: number, totalQty: number): number;
}