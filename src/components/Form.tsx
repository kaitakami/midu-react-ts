const Form = () => {
    const handleSubmit = () => {

    }

    return (
        <div>
            <h3>Add new user</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nick" placeholder="nick" />
                <input type="text" name="subMonths" placeholder="nick" />
                <input type="text" name="avatar" placeholder="nick" />
                <input type="text" name="description" placeholder="nick" />
                <button>Save new sub!</button>
            </form>
        </div>
    );
};

export default Form;
