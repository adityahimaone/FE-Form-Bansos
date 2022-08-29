const ConvertToIDR = (number: number | bigint | undefined) =>
  typeof number === 'number' || typeof number === 'bigint'
    ? new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
      }).format(number)
    : number;

export default ConvertToIDR;
