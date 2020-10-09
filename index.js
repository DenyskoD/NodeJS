const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url)

  res.write('<h1>gegee</h1>')
  res.write('<h1>gegee</h1>')
  res.end(`
    <div>
      <h1>grgfsfsr<i>this is /i tag!</i></h1>
    </div>
  `)  
})

server.listen(3000, () => {
  console.log('server is running...')
})