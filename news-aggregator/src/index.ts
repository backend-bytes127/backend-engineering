import app from './app';
const { SERVER_PORT, NEWS_TOKEN } = process.env;

console.log('server_port', NEWS_TOKEN)
// app listening 
app.listen(SERVER_PORT, () => {
  console.info(`App running on port ${SERVER_PORT}`);
});