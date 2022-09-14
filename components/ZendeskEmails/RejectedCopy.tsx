import { AllOrderFieldsCopy } from './AllOrderFieldsCopy';
import { SpecificFieldsCopy } from './SpecificFieldsCopy';

export const rejectedCopy = (
  declineReason: string,
  order: any,
  tasks: any,
  brands: any,
  specificFields: any
) => {
  const orderCopy: string = AllOrderFieldsCopy(order, tasks, brands);
  const specificFieldsCopy: string =
    SpecificFieldsCopy(specificFields);
  console.log(
    specificFields.orderNumbers,
    specificFields.pics,
    specificFields.skus
  );

  return (
    `This email is to let you know that we cannot currently complete this Work Order request, we are sorry for any inconvenience that this may cause. 
  You can see the message from the team to explain why below:\n
          ${
            declineReason
              ? `Decline Reason: ${declineReason} \n`
              : 'Decline Reason: not found'
          }
          \n` +
    `${orderCopy}` +
    `${specificFieldsCopy}`
  );
};
