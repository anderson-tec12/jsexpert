const { readFile } = require("fs/promises");

class BaseRepository {
  constructor({ file }) {
    this.file = file;
  }

  async find(itemId) {
    const fileBuffer = await readFile(this.file);
    const content = JSON.parse(fileBuffer);

    if (!itemId) return content;
    const itemSearch = content.find(({ id }) => id === itemId);
    return itemSearch;
  }
}

module.exports = BaseRepository;
