import * as express from 'express'




const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send ('Hello, World!')

} );
















// ultima parte do código, nossas funções devem estar acima desse bloco:
app.listen(port, () => {
    console.log(`Server is running at port ${port}!`);
    
});