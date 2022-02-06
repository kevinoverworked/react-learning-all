import useInput from "../hooks/use-input";

const BasicForm = (props) => {
    const {
        value: firstName,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstName,
    } = useInput((value) => value.trim() !== "");

    const {
        value: lastName,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastName,
    } = useInput((value) => value.trim() !== "");

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => value.trim().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/));

    let formIsValid = false;

    if (firstNameIsValid && lastNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        if (!firstNameIsValid && !lastNameIsValid) {
            return;
        }

        console.log(firstName);
        console.log(lastName);
        console.log(enteredEmail);
        resetFirstName();
        resetLastName();
        resetEmailInput();
    };

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className="control-group">
                <div className={firstNameHasError ? "form-control invalid" : "form-control"}>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="name"
                        value={firstName}
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBlurHandler}
                    />
                    {firstNameHasError && (
                        <p className="error-text">First name cannot be blank</p>
                    )}
                </div>
                <div className={lastNameHasError ? "form-control invalid" : "form-control"}>
                    <label htmlFor="name">Last Name</label>
                    <input
                        type="text"
                        id="name"
                        value={lastName}
                        onChange={lastNameChangeHandler}
                        onBlur={lastNameBlurHandler}
                    />
                    {lastNameHasError && (
                        <p className="error-text">Last name cannot be blank</p>
                    )}
                </div>
            </div>
            <div className={emailInputHasError ? "form-control invalid" : "form-control"}>
            <input
                    type="email"
                    id="email"
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                />
                {emailInputHasError && (
                    <p className="error-text">Please enter a valid email.</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
