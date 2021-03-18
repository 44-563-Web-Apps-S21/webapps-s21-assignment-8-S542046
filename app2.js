const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<table>')
      res.write('<tr>')
      res.write('<th>Location</th>')
      res.write('<th>No. of hours</th>')
      res.write('<th>Amount to spend</th>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>Charminar</td>')
      res.write('<td>1 Hour</td>')
      res.write('<td>$ 15</td>')
      res.write('</tr>')
      res.write('<td>Tank Band</td>')
      res.write('<td>3 hours</td>')
      res.write('<td>$ 50</td>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>Golkanda Fort</td>')
      res.write('<td>4 Hours</td>')
      res.write('<td>$ 50</td>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>Ramoji Film City</td>')
      res.write('<td>8 hours</td>')
      res.write('<td>$ 70</td>')
      res.write('</tr>')
      res.write('</table>')   
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})