import { Field, Form, Formik } from "formik";
import { advancedSchema } from "../schemas";
import CustomInput from "./CustomInput";

const AdvancedForm = () => {
  return (
    <Formik
      initialValues={{ name: '',jobType:'', acceptedTos:false }}
      validationSchema={advancedSchema}
    >
      {props => (
        <Form>
          <CustomInput
          label="username"
          name="username"
          type="text"
          placeholder="Enter your username"
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
export default AdvancedForm;
