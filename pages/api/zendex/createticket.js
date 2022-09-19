import axios from 'axios'
export default async function handler(req, res) {
    
        try {
            let body = req.body
            let headers = body.headers
            delete body.headers

            console.log(body,headers)
        
            const {data} = await axios.post(`${process.env.NEXT_PUBLIC_ZENDESK_URL}/api/v2/tickets.json`, body.ticketData,{
              headers
            })
        
            res.status(200).send({success: true, data});
          } catch (error) {
            console.log(error.response)
            res.status(500).send({success: false});
          }
    
  }