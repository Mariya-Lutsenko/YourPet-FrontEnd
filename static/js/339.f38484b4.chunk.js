"use strict";(self.webpackChunkyour_pet_frontend=self.webpackChunkyour_pet_frontend||[]).push([[339],{4339:function(e,r,o){o.r(r),o.d(r,{default:function(){return C}});var t=o(2791),a=o(1483),i=o(9434),s=o(9869),n=o(1107),l=o(5861),d=o(9439),u=o(4687),c=o.n(u),m=o(7689),f=o(1087),p=o(5705),h=o(6727),x=o(4554),b=o(8866),g=o(3400),F=o(3710),_=o(9569),w=o(427),Z={form:"registerFormDetails_form__wOm+e",title:"registerFormDetails_title__pAFRD",questionText:"registerFormDetails_questionText__V7bgL",loginLink:"registerFormDetails_loginLink__yz5Gz",buttonContainer:"registerFormDetails_buttonContainer__5y6Jx",button:"registerFormDetails_button__VJfUX","my\u0421omponent":"registerFormDetails_my\u0421omponent__-z0dL",dark:"registerFormDetails_dark__wzPUm"},M=o(8724),j=o(3329),v=h.Ry().shape({name:h.Z_().required("Name is required").matches(/^[a-zA-Z\s]*$/),email:h.Z_().email("Invalid email").required("Email is required").matches(/^(?=.{10,63}$)(([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,"Invalid email"),password:h.Z_().required("Password is required").min(6,"Password must be at least 6 characters").max(16,"Password must be at most 16 characters").matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([0-9a-zA-Z]{6,})*$/,"Password must contain at least one uppercase letter, one lowercase letter, and one digit"),confirmPassword:h.Z_().required("Confirm password is required").oneOf([h.iH("password"),null],"Passwords must match")}),y={name:"",email:"",password:"",confirmPassword:""},I=function(){var e=(0,t.useState)(!1),r=(0,d.Z)(e,2),o=r[0],s=r[1],n=(0,t.useState)(!1),u=(0,d.Z)(n,2),h=u[0],I=u[1],k=(0,t.useContext)(a.N).theme,A=(0,m.s0)(),C=function(){return s((function(e){return!e}))},D=function(){return I((function(e){return!e}))},P=(0,i.I0)(),z=function(){var e=(0,l.Z)(c().mark((function e(r){var o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={name:r.name,email:r.email,password:r.password},e.next=3,P((0,M.z2)(o));case 3:A("/user");case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("div",{className:"".concat(Z["my\u0421omponent"]," ").concat("light"===k?Z.light:Z.dark),children:(0,j.jsx)(p.J9,{initialValues:y,onSubmit:z,validationSchema:v,children:function(e){var r=e.values,t=e.errors,a=e.touched,i=e.handleSubmit,s=e.handleChange;return(0,j.jsxs)(p.l0,{className:Z.form,onSubmit:i,children:[(0,j.jsx)("h2",{className:Z.title,children:"Registration"}),(0,j.jsx)(x.Z,{sx:{marginBottom:"10px",display:"flex",alignItems:"flex-end"},children:(0,j.jsx)(b.Z,{name:"name",type:"text",label:"Name",size:"small",fullWidth:!0,sx:{".MuiInputBase-root.MuiOutlinedInput-root":{borderRadius:"40px"},"& .MuiInputLabel-root":{color:"dark"===k&&"#b2abab"},"& .MuiInputLabel-root.Mui-focused":{color:"light"===k?"#54ADFF":"#183a3d"},"& .MuiOutlinedInput-root":{"& fieldset":{borderRadius:40,border:"1px solid ".concat("light"===k?"#54ADFF":"#2f5a5f")},"&:hover fieldset":{borderColor:"".concat("light"===k?"#54ADFF":"#d9d2d2")},"&.Mui-focused fieldset":{borderColor:"".concat("light"===k?"#54ADFF":"#2f5a5f"),borderWidth:"2px"},"& .MuiInputBase-input":{color:"dark"===k&&"#d9d2d2"}}},onChange:s,value:r.name,error:a.name&&Boolean(t.name),helperText:a.name&&t.name})}),(0,j.jsx)(x.Z,{sx:{marginBottom:"10px",display:"flex",alignItems:"flex-end"},children:(0,j.jsx)(b.Z,{name:"email",type:"email",label:"Email",size:"small",fullWidth:!0,sx:{".MuiInputBase-root.MuiOutlinedInput-root":{borderRadius:"40px"},"& .MuiInputLabel-root":{color:"dark"===k&&"#b2abab"},"& .MuiInputLabel-root.Mui-focused":{color:"light"===k?"#54ADFF":"#183a3d"},"& .MuiOutlinedInput-root":{"& fieldset":{borderRadius:40,border:"1px solid ".concat("light"===k?"#54ADFF":"#2f5a5f")},"&:hover fieldset":{borderColor:"".concat("light"===k?"#54ADFF":"#d9d2d2")},"&.Mui-focused fieldset":{borderColor:"".concat("light"===k?"#54ADFF":"#2f5a5f"),borderWidth:"2px"},"& .MuiInputBase-input":{color:"dark"===k&&"#d9d2d2"}}},onChange:s,value:r.email,error:a.email&&Boolean(t.email),helperText:a.email&&t.email})}),(0,j.jsx)(x.Z,{sx:{marginBottom:"10px",display:"flex",alignItems:"flex-end"},children:(0,j.jsx)(b.Z,{name:"password",type:o?"text":"password",label:"Password",size:"small",fullWidth:!0,sx:{"& .MuiInputLabel-root":{color:"dark"===k&&"#b2abab"},"& .MuiInputLabel-root.Mui-focused":{color:"light"===k?"#54ADFF":"#183a3d"},"& .MuiOutlinedInput-root":{"& fieldset":{borderRadius:40,border:"1px solid ".concat("light"===k?"#54ADFF":"#2f5a5f")},"&:hover fieldset":{borderColor:"".concat("light"===k?"#54ADFF":"#d9d2d2")},"&.Mui-focused fieldset":{borderColor:"".concat("light"===k?"#54ADFF":"#2f5a5f"),borderWidth:"2px"},"& .MuiInputBase-input":{color:"dark"===k&&"#d9d2d2"}}},InputProps:{endAdornment:(0,j.jsx)(g.Z,{"aria-label":"toggle password visibility",onClick:C,edge:"end",size:"small",children:o?(0,j.jsx)(F.Z,{style:{color:"dark"===k?"#2f5a5f":w.Z[300]}}):(0,j.jsx)(_.Z,{style:{color:"dark"===k?"#2f5a5f":w.Z[300]}})})},onChange:s,value:r.password,error:a.password&&Boolean(t.password),helperText:a.password&&t.password})}),(0,j.jsx)(x.Z,{sx:{marginBottom:"10px",display:"flex",alignItems:"flex-end"},children:(0,j.jsx)(b.Z,{name:"confirmPassword",type:h?"text":"password",label:"Confirm password",size:"small",fullWidth:!0,sx:{"& .MuiInputLabel-root":{color:"dark"===k&&"#b2abab"},"& .MuiInputLabel-root.Mui-focused":{color:"light"===k?"#54ADFF":"#183a3d"},"& .MuiOutlinedInput-root":{"& fieldset":{borderRadius:40,border:"1px solid ".concat("light"===k?"#54ADFF":"#2f5a5f")},"&:hover fieldset":{borderColor:"".concat("light"===k?"#54ADFF":"#2f5a5f")},"&.Mui-focused fieldset":{borderColor:"".concat("light"===k?"#54ADFF":"#2f5a5f"),borderWidth:"2px"},"& .MuiInputBase-input":{color:"dark"===k&&"#d9d2d2"}}},InputProps:{endAdornment:(0,j.jsx)(g.Z,{"aria-label":"toggle password visibility",onClick:D,edge:"end",size:"small",children:h?(0,j.jsx)(F.Z,{style:{color:"dark"===k?"#2f5a5f":w.Z[300]}}):(0,j.jsx)(_.Z,{style:{color:"dark"===k?"#2f5a5f":w.Z[300]}})})},onChange:s,value:r.confirmPassword,error:a.confirmPassword&&Boolean(t.confirmPassword),helperText:a.confirmPassword&&t.confirmPassword})}),(0,j.jsx)("div",{className:Z.buttonContainer,children:(0,j.jsx)("button",{type:"submit",className:Z.button,children:"Registration"})}),(0,j.jsxs)("p",{className:Z.questionText,children:["Already have an account?"," ",(0,j.jsx)(f.rU,{to:"/login",className:Z.loginLink,children:"Login"})]})]})}})})})},k=function(){var e=(0,i.v9)(s.xU);return(0,j.jsxs)(j.Fragment,{children:[e&&(0,j.jsx)(n.Z,{}),(0,j.jsx)(I,{})]})},A={sectionMain:"RegisterPage_sectionMain__CMxya","my\u0421omponent":"RegisterPage_my\u0421omponent__WYYX-",dark:"RegisterPage_dark__6Y95v"},C=function(){var e=(0,t.useContext)(a.N).theme;return(0,j.jsx)("div",{className:"".concat(A["my\u0421omponent"]," ").concat("light"===e?A.light:A.dark),children:(0,j.jsx)("section",{className:A.sectionMain,children:(0,j.jsx)("div",{className:"container",children:(0,j.jsx)(k,{})})})})}}}]);
//# sourceMappingURL=339.f38484b4.chunk.js.map