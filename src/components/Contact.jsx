
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // template_jo0ov4b  service_nsg5u93  gkgEchNug1gm2Hn1n



  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_nsg5u93',
        'template_jo0ov4b', 
        
        // import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        // import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Emmanuel S. Yealue",
          from_email: form.email,
          to_email: "emmanuelyealue21@gmail.com",
          message: form.message,
        },
        'gkgEchNug1gm2Hn1n'
        // import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

 {/* Add icons here as links */}
 <div className='flex gap-4 mt-4'>
 <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
   <FaFacebook size={30} color='#1877f2' />
 </a>
 <a href="https://wa.me/+231881508586" target="_blank" rel="noopener noreferrer">
   <FaWhatsapp size={30} color='#25D366' />
 </a>
 <a href="https://www.instagram.com/yealueemmanuel/?igsh=MTYweW9wcmtqOWJ4YQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
   <FaInstagram size={30} color='#0088cc' />
 </a>
 <a href="https://drive.google.com/file/d/1PKwh2sAUNIKrGwsfs1Wste2QkB3KsJbO/view?usp=drive_link" target="_blank" rel="noopener noreferrer">CV
 {/* <FaCv size={30} color='#0088cc' /> */}
 </a>
</div>

       </motion.div>

   <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
       className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
      <EarthCanvas />
       </motion.div>
    </div>
   );
 };

 export default SectionWrapper(Contact, "contact");






// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";
// import { FaFacebook, FaWhatsapp, FaTelegram } from "react-icons/fa";

// import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { target } = e;
//     const { name, value } = target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
//         {
//           from_name: form.name,
//           to_name: "Emmanuel S. Yealue",
//           from_email: form.email,
//           to_email: "emmanuelyealue21@gmail.com",
//           message: form.message,
//         },
//         import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           setLoading(false);
//           alert("Thank you. I will get back to you as soon as possible.");

//           setForm({
//             name: "",
//             email: "",
//             message: "",
//           });
//         },
//         (error) => {
//           setLoading(false);
//           console.error(error);

//           alert("Ahh, something went wrong. Please try again.");
//         }
//       );
//   };

//   return (
//     <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
//       >
//         <p className={styles.sectionSubText}>Get in touch</p>
//         <h3 className={styles.sectionHeadText}>Contact.</h3>

//         <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
//           {/* ... (other form fields) */}

//           <button
//             type='submit'
//             className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
//           >
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>

//         {/* Add icons here as links */}
//         <div className='flex gap-4 mt-4'>
//           <a href="your-facebook-url" target="_blank" rel="noopener noreferrer">
//             <FaFacebook size={30} color='#1877f2' />
//           </a>
//           <a href="your-whatsapp-url" target="_blank" rel="noopener noreferrer">
//             <FaWhatsapp size={30} color='#25D366' />
//           </a>
//           <a href="your-telegram-url" target="_blank" rel="noopener noreferrer">
//             <FaTelegram size={30} color='#0088cc' />
//           </a>
//         </div>
//       </motion.div>

//       <motion.div
//         variants={slideIn("right", "tween", 0.2, 1)}
//         className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
//       >
//         <EarthCanvas />
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(Contact, "contact");
