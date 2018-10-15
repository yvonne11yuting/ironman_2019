import React from 'react'
import { withFormik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

const errMsg = {
  color: 'red',
  fontSize: '12px',
  paddingLeft: '5px'
};

const Register = ({
  values,
  isSubmitting
}) => (
  <Form>
    <div>
      <Field type="email" name="email" placeholder="Email"/>
      <ErrorMessage name="email" component="span" style={errMsg}/>
    </div>
    <div>
      <Field type="password" name="password" placeholder="Password"/>
      <ErrorMessage name="password" component="span" style={errMsg}/>
    </div>
    <div>
      <label>
        <Field type="checkbox" name="rule" checked={values.rule}/>
        同意註冊<a href="#">條款</a>
      </label>
      <ErrorMessage name="rule" component="span" style={errMsg}/>
    </div>
    <button type="submit" disabled={isSubmitting}>送出</button>
  </Form>
)

export default withFormik({
  // input 預設值
  mapPropsToValues({ email, password, rule }) {
    return {
      email: email || '',
      password: password || '',
      rule: rule || false
    }
  },
  // 表單驗證條件＆錯誤訊息
  validationSchema: yup.object().shape({
    email: yup.string().email('Email不符合格式').required('必填'),
    password: yup.string().min(6, '密碼至少大於6').required('必填'),
    rule: yup.boolean().oneOf([true], '一定要同意！'),
  }),
  // 點擊送出時
  handleSubmit(values, { resetForm, setSubmitting }) {
    setTimeout(() => {
      resetForm();  //重設表單
      setSubmitting(false); //狀態更新(true:傳送中, false:傳送完成)
      alert(JSON.stringify(values, null, 2));  //alert values
    }, 1000)
  }
})(Register)
