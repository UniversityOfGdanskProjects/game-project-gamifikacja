import { useFormik } from 'formik';
import axios from "axios";

const SignUp = ({setIsUser}) => {

    const validate = values => {
        const errors = {}
        if (values.name === '') errors.name = 'Enter nick';
        if (values.password === '') errors.password = 'Enter password'; // FOR DEMONSTRATION ONLY
        if (values.password2 === '') errors.password2 = 'Enter password'; // FOR DEMONSTRATION ONLY
        if (values.password !== values.password2) errors.password2 = 'Repeat correct password'; // FOR DEMONSTRATION ONLY
        if (values.email === '') errors.email = 'Enter password';
        return errors
    }

    const formik = useFormik({

        initialValues: {
          name: '',
          password: '',
          password2: '',
          email: ''

        },
        validate,

        onSubmit: values => {

            const credentials = {
                nick: formik.values.name,
                password: formik.values.password,
                email: formik.values.email
            }
            axios.post("https://jsonplaceholder.typicode.com/comments", credentials)
            .then(res => {
                // if (res.status === 200){
                    // response from data base
                    setIsUser(true)
                    formik.resetForm()
                // }
            })
        }
    });
    
    return (
        <form className='form' onSubmit={formik.handleSubmit}>
            <h1>Sign up</h1>
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

            <label htmlFor="password">Repeat password</label>
            <input
            id="password2"
            name="password2"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password2}
            />
            {formik.touched.password2 && formik.errors.password2 ? <div className='error'>{formik.errors.password2}</div> : null}

            <label htmlFor="password">Email</label>
            <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
        
            <button className='loginButton' type= "submit">Sign up</button>

        </form>
    );

}
export default SignUp;