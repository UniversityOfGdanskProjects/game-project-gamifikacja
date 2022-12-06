import { useFormik } from 'formik';
import axios from "axios";

const SignIn = ({setIsAuthorised}) => {

    const validate = values => {
        const errors = {}
        if (values.name === '') errors.name = 'Enter nick';
        if (values.password === '') errors.password = 'Enter password'; // FOR DEMONSTRATION ONLY
        return errors
    }

    const formik = useFormik({

        initialValues: {
          name: '',
          password: ''
        },
        validate,

        onSubmit: values => {

            const credentials = {
                nick: formik.values.name,
                password: formik.values.password
            }
            axios.post("https://jsonplaceholder.typicode.com/comments", credentials)
            .then(res => {
                // if (res.status === 200){
                    setIsAuthorised(true)
                    formik.resetForm()
                // }
            })
        }
    });
    
    return (
        <form className='form' onSubmit={formik.handleSubmit}>
            <h1>Login</h1>
            <label htmlFor="name">Name</label>
            <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}

            <label htmlFor="password">Password</label>
            <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}
        
            <button className='loginButton' type= "submit">Log in</button>
        </form>
    );

}
export default SignIn;