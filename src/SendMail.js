import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { CloseSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase';


function SendMail() {

    const dispatch = useDispatch();

    const{register, handleSubmit, watch, errors} = useForm();

    const onSubmit=(formData)=>{
       
       db.collection('emails').add({
          to: formData.to,
          subject: formData.subject,
          message: formData.message,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
       });
       dispatch(CloseSendMessage());
    };
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon onClick={()=>dispatch(CloseSendMessage())} className="sendMail__close"/>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input name='to' placeholder="To" type="email" ref={register({required: true})}/>
                 {errors.to && <p className="sendMail__error">To is Required!</p>}

                <input name='subject' placeholder="Subject" type="text" ref={register({required: true})}/>
                {errors.to && <p className="sendMail__error">Subject is Required!</p>}

                <input name='message' placeholder="Type a message" type="text"
                   className="sendMail__message"
                   ref={register({required: true})}/>
                   {errors.to && <p className="sendMail__error">Message is Required!</p>}

                <div className="sendMail__options">
                    <Button className="sendMail__send"
                     variant="contained"
                     color="primary"
                     type="submit"
                     >Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail