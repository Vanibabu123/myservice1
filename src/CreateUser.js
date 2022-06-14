import { useFormik } from 'formik';
import React from 'react';

function CreateUser () {
    let formik = useFormik( {
        initialValues : {
            username : "",
            password : "",
            firstname : "",
            typeofuser : 0,
            startDate : "",
            lastname : 0

        },
        onSubmit : (values) => {
            console.log(values);
        },
    });
    return (
        <div className='container'>
        <form onSubmit={formik.handleSubmit}>
         <div className='row'>
                <div className='col-lg-6'>
                    <label>Username</label>
                    <input 
                     type={'text'} 
                     name="username" 
                     onChange={formik.handleChange} 
                     value={formik.values.username} 
                     className="form-control" 
                    />
                </div>
                <div className='col-lg-6'>
                    <label>Password</label>
                    <input 
                     type={'text'} 
                     name="password" 
                     onChange={formik.handleChange} 
                     value={formik.values.password} 
                     className="form-control" 
                    />
                </div>
                <div className='col-lg-6'>
                    <label>Firstname</label>
                    <input 
                     type={'text'} 
                     name="firstname" 
                     onChange={formik.handleChange} 
                     value={formik.values.firstname} 
                     className="form-control" 
                    />
                </div>
                <div className='col-lg-6'>
                    <label>Typeofuser</label>
                    <input 
                     type={'text'} 
                     name="typeofuser" 
                     onChange={formik.handleChange} 
                     value={formik.values.typeofuser} 
                     className="form-control" 
                    />
                </div>
                <div className='col-lg-6'>
                    <label>Start Date</label>
                    <input 
                     type={'date'} 
                     name="startDate" 
                     onChange={formik.handleChange} 
                     value={formik.values.startDate} 
                     className="form-control" 
                    />
                </div>
                <div className='col-lg-6'>
                    <label>Lastname</label>
                    <input type={'text'} 
                    name="lastname" 
                    onChange={formik.handleChange} 
                    value={formik.values.lastname} 
                    className="form-control" 
                   />
                </div>
                <div className='col-lg-6 mt-3'>
                    <input type={'submit'} className="btn btn-primary" />
                </div>
            </div>                 
        </form>
        </div>
    )
}

export default CreateUser;