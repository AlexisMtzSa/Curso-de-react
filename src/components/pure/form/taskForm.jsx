import React from 'react';
import PropTypes from 'prop-types'
import { useRef } from 'react';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const TaskForm = ({add, length}) => {

    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef(LEVELS.NORMAL)

    const initialValues = {
        name: '',
        desc: '',
        level: LEVELS.NORMAL
    }

    const addTaskSchema = Yup.object().shape({
        name: Yup.string().required('Task name is required'),
        desc: Yup.string().required('Description is required')
    })

    const addTask = (values) => add(new Task(values.name, values.desc, false, values.level));
    

    const normalStyle = {
        color: 'blue',
        fontWeight: 'bold'
    }

    const urgentStyle = {
        color: 'yellow',
        fontWeight: 'bold'
    }

    const blockingStyle = {
        color: 'tomato',
        fontWeight: 'bold'
    }

    return (
            <Formik
            initialValues={initialValues}
            validationSchema={addTaskSchema}
                onSubmit={(values)=>addTask(values)}

            >

            {({values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur})=>(
                        <Form className='d-flex justify-content-center align-items-center mb-4'>
                        <div className='form-outline flex-fill'>
                            <Field id='name' type='text' name='name' placeholder='Task name' className='form-control form-control-lg'></Field>
                            {
                                errors.name && touched.name &&
                                (
                                    <ErrorMessage name='name' component='div'></ErrorMessage>
                                )
                            }

                            <Field id='desc' type='text' name='desc' placeholder='Task description' className='form-control form-control-lg'></Field>
                            {
                                errors.desc && touched.desc &&
                                (
                                    <ErrorMessage name='desc' component='div'></ErrorMessage>
                                )
                            }

                            <Field id='priority' component='select' name='priority' className='form-control form-control-lg' defaultValue={LEVELS.NORMAL}>
                                <option style={normalStyle} value={LEVELS.NORMAL}>Normal</option>
                                <option style={urgentStyle} value={LEVELS.URGENT}>Urgent</option>
                                <option style={blockingStyle} value={LEVELS.BLOCKING}>Blocking</option>
                            </Field>
                        </div>
                            <button type='submit' className='btn btn-success btn-lg ms-2'>
                                {length>0?'Add New Task':'Create Your First Task'}
                            </button>

                        </Form>
                        
                    )}

            </Formik>      
    );
}

TaskForm.propTypes ={
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default TaskForm;
