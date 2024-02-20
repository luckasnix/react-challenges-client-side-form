import { useSignupForm } from '../../../../stores/signup-form'
import { SubmitButton } from '../../../../common/components/submit-button'
import { NameField } from './components/name-field'
import { GenderField } from './components/gender-field'
import { EducationLevelField } from './components/education-level-field'
import { AgreementField } from './components/agreement-field'

import './styles.css'

export const SignupForm = () => {
  const { getFields, resetFields } = useSignupForm((state) => state)

  return (
    <form
      className='form'
      onSubmit={(event) => {
        event.preventDefault()
        window.alert(JSON.stringify(getFields()))
        resetFields()
      }}
    >
      <h1>Cadastro</h1>
      <NameField />
      <GenderField />
      <EducationLevelField />
      <AgreementField />
      <SubmitButton label='Cadastrar' />
    </form>
  )
}