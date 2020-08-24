export default function paginate(array: any[], page: number, limit: number) {
  let result: any[] = [];
  let totalPage = Math.ceil(array.length / limit);
  let count = (page * limit) - limit;
  let delimiter = count + limit;

  if (page <= totalPage) {
    for (let i = count; i < delimiter; i++) {
      if (array[i] !== undefined) {
        result.push(array[i]);
      }
      count++;
    }
  }
  
  return result;
};