import React from 'react'
import { createZendeskTicket, updateZendeskTicket } from '../data/services/zendesk';

function Test() {
    const createTicket= async()=>{
        const ticketData = {
            ticket: {
              subject: "My printer is on fire!",
               comment: {
                body: "The smoke is very colorful."
              }
            
          }
        };
        const response = await createZendeskTicket(ticketData);
        console.log(response)
      };

      const updateTicket= async()=>{
        const ticketID= 4;
        const ticketData = {
            ticket: {
              subject: "My printer is on fire!",
               comment: {
                body: "The smoke is very colorful."
              },
              status: "solved" 
            
          }
        };
        const response = await updateZendeskTicket(ticketID, ticketData);
        console.log(response)
      };
  return (
    <div>
        <button  onClick={createTicket}> Create Ticket</button>
        <button  onClick={updateTicket}> Update Ticket</button>
    </div>
  )
}

export default Test