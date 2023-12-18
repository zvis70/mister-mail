import { Link } from "react-router-dom";
/* import { Component, useEffect, useState } from "react" */
import { utilService } from "../services/util.service";

export function EmailPreview({ email }) {

    /* const [isStar, setIsStar] = useState(email.isStarred)
 */
    
    
    const emailReadClass = email.isRead ? '' : 'email-not-read'
   
      return (

        <div className="email-preview">
            <label>
                <input type="checkbox" value="selected" checked={false} onChange={() => { }} />
            </label>
            <Link className="email-line" to={`/email/${email.id}`}>
                <div className={`from ${emailReadClass}`}>{email.from}</div>
                <div className={`subject ${emailReadClass}`}> {email.subject} </div>
                <div className="email-body"> {email.body} </div>
                <div className={`sent-at ${emailReadClass}`}>{utilService.getDateToDisplay(new Date(email.sentAt))}</div>
            </Link>
            <img className="icon" onClick={()=> {onRemoveEmail(email.id)}} src={utilService.getIconUrl('trash', false)} />

        </div>
    )
}
