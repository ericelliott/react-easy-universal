import server from './server';

const NODE_PORT = process.env.NODE_PORT || 3000;

server.listen(NODE_PORT, () => {
  console.log(`Listening on port ${ NODE_PORT }.`);
});
