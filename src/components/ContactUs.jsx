import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Navbar2 from "../components/Navbar2";
import Sidebar from '../components/Sidebar';
import RightBar from '../components/RightBar';
const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_z9ylwtc','template_lu49e5c', form.current, 'yB_HwGykM1yPFJj6j')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <div className="m-0 p-0 h-screen w-screen overflow-scroll">
        <Navbar2 />
        <div className="flex h-5/6 z-[1]">
          <Sidebar />
          
      <div className="flex w-[65vw] mt-[1rem] rounded-[1.5rem] bg-gray-50/50 shadow-lg p-4 overflow-y-scroll">
        <div className="text-zone">
          <h1 className="flex justify-center font-bold text-3xl ">
            Contact Us
          </h1>
          <p className='flex text-xl text-justify'>
          Thank you for using our chat website! If you have any questions, comments,
           or concerns, please do not hesitate to contact us. We are dedicated to providing 
           the best possible service to our users, and we value your feedback. You can reach us by email,
            phone, or through our contact form on this page. 
          </p>
          <div className="contact-form text-center mt-[4rem]">
            <form ref={form} onSubmit={sendEmail}>
              <ul >
                <li className="half ">
                  <input className='p-[1rem] w-[40vw] rounded-xl mb-[2rem]' placeholder="Name" type="text" name="user_name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="user_email"
                    required
                    className='p-[1rem] w-[40vw] rounded-xl mb-[2rem]'
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="user_subject"
                    required
                    className='p-[1rem] w-[40vw] rounded-xl mb-[2rem]'
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                    className='p-[1rem] w-[40vw] rounded-xl mb-[2rem]'
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="px-[2rem] py-[1rem] rounded-2xl bg-teal-300 font-bold hover:bg-cyan-400 " value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>  
      </div>
          <RightBar/>
        </div>
      </div>
    
  )
}

export default Contact