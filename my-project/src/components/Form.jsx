import { useState } from 'react'
import axios from 'axios';
import Button from './Button';

const Form = () => {

    const [email, setEmail] = useState('Email Address');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            setError('Email is required');
            return;
          }
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
            setError('Invalid email format');
            return;
          }

          try {
            const response = await axios.post('http://34.225.132.160:8002/api', { email });
            if (response.status === 200) {
              setMessage('email Submitted (post request successfull)');
              setError('');
            }
          } catch (error) {
            if (error.response && error.response.status === 422) {
              setError('Email ends with @ez.works is not allowed');
            } else {
              setError('An error occurred');
            }
          }
        };
      

  return (
    <>
      <div className="flex justify-center ">
      <form onSubmit={handleSubmit} className=''>
        <input
        className='p-2 text-lg m-2 border-4 text-grey_color'
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className="mt-2 text-lg text-red-600">{error}</p>}
        {message && <p className="mt-2 text-sm text-green-600">{message}</p>}
        {/* <button type="submit">Submit</button> */}
        <Button btnName='Contact Me'/>
        
      </form>
    </div>
    </>
  )
}

export default Form
