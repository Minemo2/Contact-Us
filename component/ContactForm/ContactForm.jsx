import React from 'react'
import styles from "./Contact.module.css";
import Button from '../Button/Button';
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";


const ContactForm = () => {
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="25px" />} />
        <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="25px" />}/>
        </div>
        
        <Button isOutline = {true} text="VIA EMAIL FORM" icon={<HiMail fontSize="25px" />}/>
        <form>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" /></div>
            <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" /></div>
            <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name='text' rows={6}/>
            </div>
          <div style={{
            display: "flex",
            justifyContent: 'end'
          }}>
          <Button  text="SUBMIT"/>
          </div>
        </form>
        
        </div>
        
        <div className={styles.contact_image}>
        <img src='./images/Service24_7.svg' />
        </div>
    </section>
  )
}

export default ContactForm;