import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import { produce } from 'immer';
import { create } from 'zustand';

import { Participant } from '@/types/participants';

type AuthStoreType = {
  participant: Participant[];
  setParticipant: (particint: Participant[]) => void;
};

const useAuthStoreBase = create<AuthStoreType>((set) => ({
  participant: [],
  setParticipant: (participant) => {
    set(
      produce<AuthStoreType>((state) => {
        state.participant = participant;
      }),
    );
  },
}));

const useParticipantStore = createSelectorHooks(useAuthStoreBase);

export default useParticipantStore;
