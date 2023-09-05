import { Field, Form, Formik } from "formik";

const AdvancedForm = () => {
  return (
    <Formik
      initialValues={{ name: '' }}
    //  onSubmit={(values, actions) => {
    //    setTimeout(() => {
    //      alert(JSON.stringify(values, null, 2));
    //      actions.setSubmitting(false);
    //    }, 1000);
    //  }}
    >
      {props => (
        <Form>
          <Field type="text" name="name" placeholder="Name" />
          {/* <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
          /> */}
          {/* {props.errors.name && <div id="feedback">{props.errors.name}</div>} */}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
export default AdvancedForm;
