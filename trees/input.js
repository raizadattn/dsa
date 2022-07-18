// process.stdin.end('12 34 56');
// process.stdout.on('data', (data) => {
//     console.log('hi')
//   console.log(data);
// });
// process.on('close', (code) => console.log('Exit code: ' + code));

// process.stdin.on('data', data => {
//     console.log(`You typed ${data.toString()}`);
//     process.exit();
//   });

// process.stdin.on('readable', () => {
//       console.log('hi')
//     let chunk;
//     // Use a loop to make sure we read all available data.
//     while ((chunk = process.stdin.read()) !== null) {
//      process.stdout.write(`data: ${chunk}`);
//     }
//   });


//   const readable = getReadableStreamSomehow();

// // 'readable' may be triggered multiple times as data is buffered in
// process.stdin.on('readable', () => {
//   let chunk;
//   console.log('Stream is readable (new data received in buffer)');
//   // Use a loop to make sure we read all currently available data
//   while (null !== (chunk = readable.read())) {
//     console.log(`Read ${chunk.length} bytes of data...`);
//   }
// });

// // 'end' will be triggered once when there is no more data available
// process.stdin.on('end', () => {
//   console.log('Reached end of stream.');
// });

let _input = "";
function processThis(){
    console.log('input', _input, _input.length, JSON.stringify(_input))

}
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
   processThis(_input);
});