import axios from 'axios'
export default async function handler(req, res) {
  
        try {
            let body = req.body
            let headers = body.headers
            delete body.headers
            let ticketID = body.ticketID
            delete body.ticketID
        
        
            const {data} = await axios.put(`${process.env.NEXT_PUBLIC_ZENDESK_URL}/api/v2/tickets/${ticketID}.json`, body.ticketData,{
              headers
            })
            res.status(200).send({success: true, data});
          } catch (error) {
            console.log(error);
            res.status(500).send({success: false});
          }
    
  }