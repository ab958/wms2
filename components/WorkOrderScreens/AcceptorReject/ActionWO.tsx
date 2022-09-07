import { useState } from 'react';
import { AcceptWO } from './Options/AcceptWO';
import { RejectWO } from './Options/RejectWO';

export const ActionWO = ({
  targetTime = 0,
}: {
  targetTime: number;
}) => {
  const [WOAction, setWOAction] = useState<
    'accept' | 'reject' | null
  >(null);

  return (
    <>
      <h2 className="mt-3">Accept / Reject Work Order</h2>
      {WOAction && WOAction === 'accept' ? (
        <AcceptWO targetTime={targetTime} />
      ) : null}
      {WOAction && WOAction === 'reject' ? <RejectWO /> : null}
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
    </>
  );
};
