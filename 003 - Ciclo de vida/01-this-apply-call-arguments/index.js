"strict mode";

const {
  watch,
  promises: { readFile },
} = require("fs");

// watch(__filename, async (event, filename) => {
//   // console.log("index.jx", event, filename);
//   console.log((await readFile(filename)).toString());
// });

class File {
  watch(event, filename) {
    console.log("this", this);
    console.log("arguments", arguments);
    this.showContent(filename);
  }

  async showContent(filename) {
    console.log((await readFile(filename)).toString());
  }
}

const file = new File();
// dessa forma ele ignora o this da class file
// e herda o this do watch
//watch(__filename, file.watch);

//alternativa para não herdar o this da funcção
//mas fica feio
// watch(__filename, (event, filename) => file.watch(event, filename));

// Deixando explicito o contexto que a função deve seguir
// o bind retorna uma função como this  que se mante do file e não do watch
// watch(__filename, file.watch.bind(file));

// sobre escreve a função da classe CALL e APPLY é a mesma coisa so muda como passar os parametros
file.watch.call(
  { showContent: () => console.log("Call: hey sinon") },
  null,
  __filename
);

file.watch.apply({ showContent: () => console.log("Call: hey sinon") }, [
  null,
  __filename,
]);
