import { Sub } from "../types";
import useNewSubForm from "../hooks/useNewSubForm";
interface FormProps {
    onNewSub: (newSub: Sub) => void
}

const Form = ({ onNewSub }: FormProps) => {

    const [inputValues, dispatch] = useNewSubForm()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onNewSub(inputValues)
        handleClear()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch({
            type: "change_value",
            payload: {
                inputName: e.target.name,
                inputValue: e.target.value
            }
        })
    }

    const handleClear = () => {
        dispatch({
            type: "clear"
        })
    }

    return (
        <div>
            <h3>Add new user</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder="nick" />
                <input onChange={handleChange} value={inputValues.subMonths} type="text" name="subMonths" placeholder="subMonths" />
                <input onChange={handleChange} value={inputValues.avatar} type="text" name="avatar" placeholder="avatar" />
                <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="description" />
                <button onClick={handleClear} type="button">Clear the form</button>
                <button type="submit">Save new sub!</button>
            </form>
        </div>
    );
};

export default Form;
