import React,{useState} from 'react'
import {connect} from 'react-redux'
import { addNotify } from './redux/notification/notifyAction'

const Input = (props) => {
    const [noti, setNoti] = useState('')
    return (
        <>
            <div className="my-3 container">
                <h2>Input for Notification</h2>
                <input type="text" className='form-control' value={noti} onChange={e=>setNoti(e.target.value)}/>
                <button className='btn btn-primary align-items-center my-3' onClick={()=>{props.addNotify(noti); setNoti('')}}>Add Notification</button>
            </div>
        </>
    )
}

const mapDispatchToProps=dispatch=>{
    return{
        addNotify:noti=>dispatch(addNotify(noti))
    }
}

export default connect(null,mapDispatchToProps)(Input)
