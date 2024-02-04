module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res.json({
        text: "Hello from the API 240128 1828"
    })
//240128    const name = (req.query.name || (req.body && req.body.name));
//240128    const responseMessage = name
//240128        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
//240128        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

//240128    context.res = {
//240128        // status: 200, /* Defaults to 200 */
//240128        body: responseMessage
//240128    };
}