import './profile.css'
// import Popup from 'reactjs-popup';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const Profile = () => {
  const random=parseInt[Math.random]
  return(
      <div className="profile">
  <img src="/images/wana.png"className="wana" alt=""/>
          {/* <div className="about">
              Wanadamu<br/> admin@redwing
          </div> */}
          <div>
          <img src="/imgs/profile.png"  className="edit" alt=""/>
          <button  >
          Wanadamu<br/> admin@redwing

          </button>
          </div>
          <div>
              <div className="phone">
                  <div className="sim">Phone</div>
                  <img src="/images/phone.png"className="phon" alt=""/>
                  <input type="text" placeholder="0717867280"  id="random" className="phonenum" const />
              </div>
          </div>
          <div>
              <div className="email">
                  <div className="sim">Email</div>
                  <img src="/images/email.png"className="mail" alt=""/>
                  <input type="text" placeholder="wanadamu@gmail.com"  className="mailnum"/>
              </div>
          </div>
          <div>
            
              <div className="add">
                  <div className="sim">Address</div>
                  <img src="/images/location.png"className="adds" alt=""/>
                  <input type="text" placeholder="Nairobi Karen"   className="adress"/>
              </div>
          </div>
            <div>
              <div className="web">
                  <div className="sim">Website</div>
                  <img src="/images/web.png"className="webs" alt="" />
                  <input type="" placeholder="https://hapakenya.com-wanadamu"   className="webname" />
              </div>
          </div>
          <div>
              <div className="bio">
                  <div className="sim">Bio</div>
                  <input type="text" placeholder="Wanadamu helps people  to search for the right blood group from wiiling donors database and make requests."  className="bioname" />
              </div>
              <button className='but'  >
                Submit

          </button>
          </div>
      </div>
  )
}
export default Profile;