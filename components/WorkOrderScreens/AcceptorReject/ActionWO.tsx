import { useState } from 'react';
import { AcceptWO } from './Options/AcceptWO';
import { RejectWO } from './Options/RejectWO';

export const ActionWO = ({
  targetTime = 0,
  estCost = 0,
}: {
  targetTime: number;
  estCost: number;
}) => {
  const [WOAction, setWOAction] = useState<
    'accept' | 'reject' | null
  >(null);

  return (
    <>
      <h2 className="mt-3">Accept / Reject Work Order</h2>
      <button
        id="accept"
        type="button"
        onClick={() => setWOAction('accept')}
      >
        Accept
      </button>
      <button
        id="reject"
        type="button"
        onClick={() => setWOAction('reject')}
      >
        Reject
      </button>
      {WOAction && WOAction === 'accept' ? (
        <AcceptWO targetTime={targetTime} estCost={estCost} />
      ) : null}
      {WOAction && WOAction === 'reject' ? <RejectWO /> : null}
    </>
  );
};
