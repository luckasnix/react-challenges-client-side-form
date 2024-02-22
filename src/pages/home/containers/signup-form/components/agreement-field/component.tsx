import { useShallow } from 'zustand/react/shallow'

import { useSignupFormStore } from '@/stores/signup-form'
import { Checkbox } from '@/common/components/checkbox'

export const AgreementField = () => {
  const { wasAgreed, wasAgreedErrors, setWasAgreed } = useSignupFormStore(
    useShallow((state) => ({ wasAgreed: state.wasAgreed, wasAgreedErrors: state.wasAgreedErrors, setWasAgreed: state.setWasAgreed }))
  )

  return (
    <Checkbox
      id='agreement'
      name='agreement'
      label='Declaro que li e aceito os termos de uso e privacidade'
      value={wasAgreed}
      setValue={setWasAgreed}
      errors={wasAgreedErrors}
    />
  )
}
