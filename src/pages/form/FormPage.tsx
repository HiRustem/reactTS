import Form from './components/Form'

import { useAppSelector } from '../../app/hooks'

const FormPage = () => {

    const { form } = useAppSelector(state => state.form)
    const { answers } = useAppSelector(state => state.test)

    const show = () => {

        console.log(form)
        console.log(answers)
    }

    return (
        <>
            <Form />

            <button onClick={show}>Показать</button>
        </>
    )

}

export default FormPage