export default function paginate(array: any[], page: number = 1, limit: number = 10) {
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
  
  return {
    data: result,
    total: array.length,
    per_page: limit,
    current_page: page,
    last_page: totalPage,
  };
};