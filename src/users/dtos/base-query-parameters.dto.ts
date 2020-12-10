export abstract class BaseQueryParametersDto {
    sort: string;
    page: number;
    limit: number;
  }

  // exemplo de um objeto com as informações de ordenação
/*const sort = {
  name: "ASC",
  email: "DESC"
}

const sortString = JSON.stringify(sort)
// sortString => "{\"name\":\"ASC\",\"email\":\"DESC\"}"*/