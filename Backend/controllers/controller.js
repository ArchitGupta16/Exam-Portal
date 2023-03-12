/**The async keyword is used to define an asynchronous function in JavaScript. An asynchronous function is a function that allows non-blocking execution of code, which means that the function will not block the execution of other code while it is running. Instead, it returns a Promise, which can be resolved with a value or rejected with an error.

In the code you provided, the async keyword is used to define the getQuestions function as an asynchronous function. This means that it can use the await keyword inside it to pause the execution of the function until a Promise is resolved.

By using asynchronous functions, we can write code that can handle long-running tasks without blocking the main thread of execution, which can help improve the overall performance and responsiveness of the application. */


/** get all questions */
export async function getQuestions(req, res) {
    res.json("Questions api get request");
}

/** insert all questions */
export async function insertQuestions(req, res) {
    res.json("questions api post request");
}

/** delete all questions */
export async function dropQuestions(req, res) {
    res.json("questions api delete request");
}

/** get all result */
export async function getResult(req, res) {
    res.json("result api get request");
}

/** post all result */
export async function storeResult(req, res) {
    res.json("result api post request");
}

/** delete all result */
export async function dropResult(req, res) {
    res.json("result api delete request");
}