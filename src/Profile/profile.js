import "./profile.css";


const Profile= ()=>{
    return(
        

        
      
        <div className="profile">

            <div className="head">
               
                    <img src="/images/noti.png"className="noti " alt=""  />
                    <div className="two">
                    <img src="/images/sttings.png"className="set" alt=""/>
                    </div>
                    <div className="prof">
                    <img src="/images/prof.png"className="pro" alt=" http://localhost:3006/profile"/>
                    </div>
                <h2>Donors</h2>
                <p>Admin Profile</p>
            </div>
            
            <img src="/images/wana.png"className="wana" alt=""/>

            <div className="about">
                Wanadamu<br/> admin@redwing
            </div>

            <div>
            <img src="/images/edit.png"className="edit" alt=""/>
                <input type="text" placeholder="edit_profile"  className="edpro" readOnly="true"/>
            </div>

            <div>
                <div className="phone">
                    <div className="sim">Phone</div> 

                    <img src="/images/phone.png"className="phon" alt=""/>
                    <input type="text" placeholder="0717867280" readOnly="true" className="phonenum"/>
                    
                </div>
            </div>

            <div>
                <div className="email">
                    <div className="sim">Email</div> 

                    <img src="/images/email.png"className="mail" alt=""/>
                    <input type="text" placeholder="wanadamu@gmail.com" readOnly="true" className="mailnum"/>
                    
                </div>
            </div>

            <div>
                <div className="add">
                    <div className="sim">Address</div> 

                    <img src="/images/location.png"className="adds" alt=""/>
                    <input type="text" placeholder="Nairobi Karen" readOnly="true"  className="adress"/>
                    
                </div>
            </div>


            
            <div>
                <div className="web">
                    <div className="sim">Website</div> 

                    <img src="/images/web.png"className="webs" alt="" />
                    <input type="" placeholder="https://hapakenya.com-wanadamu" readOnly="true"  className="webname" />
                    
                    
                    
                </div>
            </div>


            <div>
                <div className="bio">
                    <div className="sim">Bio</div> 

                    <input type="text" placeholder="Wanadamu helps people  to search for the right blood group from wiiling donors database and make requests."  className="bioname" readOnly="true"/>    
                    
                </div>
            </div>

           

           
        </div>
      
        
       
    )
}


export default Profile;
