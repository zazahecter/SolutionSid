import React, {useState} from 'react'

function form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const validateForm = () => {
    const errors = {};
    if(!formData.name.trim()){
      errors.name = 'Name is required';
    }
    if(!formData.email.trim()){
      errors.email = 'Email is required';
    }else if(!/^[^\s@]+@[^|s@]+\.[^\s@]+$/.test(formData.email)){
      errors.email = 'Invalid email format';
    }
    if(!formData.subject.trim()){
      errors.subject = 'subject is required';
    }
    if(!formData.message.trim()){
      errors.message = 'message is required';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()){
      alert('message sent succesfully')
      console.log(formData);

      //redirect another page
      window.location.href = '/contact'
    }
  };
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
        <div className="d-flex mt-3">
          <div className="flex-grow-1 me-2">
             <input type="text" name='name' value={formData.name} placeholder='Name' className={`form-control ${errors.name && 'is-invalid'}`} onChange={handleChange}/>
             {errors.name && <div className='invalid-feedback'>{errors.name}</div>}  
          </div>
          <div className="flex-grow-1 ms-2">
             <input type="email" name='email' value={formData.email} placeholder='Email' className={`form-control ${errors.email && 'is-invalid'}`} onChange={handleChange} />
             {errors.email && <div className='invalid-feedback'>{errors.email}</div>}    
          </div>
        </div>

        <div className="d-flex mt-3">
          <div className="flex-grow-1 me-2">
             <input type="text" name='phone' value={formData.phone} placeholder='Phone (optional)' className='form-control' />    
          </div>
          <div className="flex-grow-1 ms-2">
             <input type="text" name='subject' value={formData.subject} placeholder='Subject' className={`form-control ${errors.subject && 'is-invalid'}`} onChange={handleChange} /> 
             {errors.subject && <div className='invalid-feedback'>{errors.subject}</div>}  
          </div>
        </div>
        <textarea name="message" id="" value={formData.message} cols="30" rows="10" className={`form-control mt-3 ${errors.name && 'is-invalid'}`} onChange={handleChange} placeholder='Enter your Message here'></textarea>

        <button className='btn btn-danger mt-4'>submit</button>
      </form>
    </>
  )
}

export default form