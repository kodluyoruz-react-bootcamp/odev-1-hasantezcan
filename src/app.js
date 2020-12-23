import getData from "./lib/service";

const content = getData(1);

content.then((result) => console.log(result));

