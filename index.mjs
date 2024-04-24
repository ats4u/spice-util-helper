
async function readAll(stream) {
  const chunks = [];
  for await (const chunk of stream) chunks.push(chunk);
  return Buffer.concat(chunks).toString('utf8');
}

const input = await readAll(process.stdin);

const output = input.replace( /\\u([a-fA-Z0-9]{4})/g, (s,s0)=>{
  return String.fromCharCode( Number.parseInt( s0,16 ) );
})

process.stdout.write( output );

