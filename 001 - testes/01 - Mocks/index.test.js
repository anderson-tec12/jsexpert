const { error } = require("./src/constants");
const File = require("./src/file");
const { rejects, deepStrictEqual } = require("assert");

(async () => {
  {
    const filePath = "./mocks/emptyFile-Invalid.csv";
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    //rejects espera uma prommise rejeitada e uma mensagem que deve ser a mesma do erro
    await rejects(result, rejection);
  }

  {
    const filePath = "./mocks/fourItems-invalid.csv";
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }

  {
    const filePath = "./mocks/threeItems-valid.csv";
    const result = await File.csvToJson(filePath);
    const expected = [
      {
        "id": 123,
        "name": "Anderson B.",
        "profession": "Front End",
        "birthDay": 1993
      },
      {
        "id": 321,
        "name": "xuxa da silva",
        "profession": "Backend",
        "birthDay": 1993
      },
      {
        "id": 322,
        "name": "joaozinho ciclano",
        "profession": "fullstack",
        "birthDay": 1993
      }
    ];

    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
  }
})();
