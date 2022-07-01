const http = require("http");

const DEFAULT_USER = {
  userName: "abs",
  password: "123",
};

const routes = {
  "/contact:get": (request, response) => {
    response.write("contact us page");
    return response.end();
  },
  "/login:post": async (request, response) => {
    //..reponse é um interador
    for await (const data of request) {
      const user = JSON.parse(data);
      console.log("user", user);
      console.log(
        user.userName !== DEFAULT_USER.userName ||
          user.password !== DEFAULT_USER.password
      );

      if (
        user.userName !== DEFAULT_USER.userName ||
        user.password !== DEFAULT_USER.password
      ) {
        response.writeHead(401);
        response.write("logging failed!");
        return response.end();
      }

      response.write("Logging has succeeded");
      return response.end();
    }
    // response.write("Logging has succeeded");
    // return response.end();
  },
  default: (request, response) => {
    response.write("Hello, world!");
    return response.end();
  },
};

const handler = function (request, response) {
  const { url, method } = request;
  const routeKey = `${url}:${method.toLowerCase()}`;

  console.log("routeKey", routeKey);
  //return response.end("Hello World");
  const chosen = routes[routeKey] || routes.default;
  console.log("chosen", chosen);
  response.writeHead(200, {
    "Content-Type": "text/html",
  });

  return chosen(request, response);
};

const app = http
  .createServer(handler)
  .listen(3000, () => console.log("app running at", 3000));

module.exports = app;
