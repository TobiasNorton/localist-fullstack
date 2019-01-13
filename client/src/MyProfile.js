import React, { Component } from 'react'
import { observer } from 'mobx-react'
import dataStore from './DataStore'
import Local from './Local'

class MyProfile extends Component {
  componentDidMount = () => {
    dataStore.showPeopleIAmLinkedWith()
  }

  render() {
    return (
      <>
        <nav className="nav-bar">
          <p className="logo">Localist</p>
          <div className="links">
            <div className="dropdown">
              <a href="#" className="dropdown-button">
                Requests (4)
              </a>
              <div className="request-list hidden">
                <a href="#">Michael Kelly</a>
                <a href="#">Brenna Hensley</a>
                <a href="#">Francis Begby</a>
                <a href="#">Budsarin Hiranprueck</a>
              </div>
            </div>
            <a href="#">Browse</a> <a href="#">My Profile</a>
            <a href="#">Sign Out</a> <a href="#" />
            <div className="hamburger">
              <span />
              <span />
              <span />
            </div>
          </div>
        </nav>

        <section className="my-profile">
          <div className="left">
            <div className="category">
              <h3 className="profile-name">{dataStore.profileDisplayed.name}</h3>
              <img src="./TobyCropped.jpg" className="profile-pic" alt="Toby" />
              <p className="from">{dataStore.profileDisplayed.location}</p>
            </div>

            <div className="category">
              <p className="header">Languages I Speak</p>
              <div className="line" />
              <p className="body">English, some Spanish</p>
            </div>

            <div className="category">
              <p className="header">Preferred Contact Information</p>
              <div className="line" />
              <ul className="body">
                <li>WhatsApp: {dataStore.profileDisplayed.whatsapp}</li>
                <li>Email: {dataStore.profileDisplayed.email}</li>
                <li>Facebook Messenger: {dataStore.profileDisplayed.facebook}</li>
                <li>Instagram: {dataStore.profileDisplayed.instagram}</li>
                <li>Phone: {dataStore.profileDisplayed.phone}</li>
              </ul>
            </div>

            <div className="category">
              <p className="header">About Me</p>
              <div className="line" />
              <p className="body">{dataStore.profileDisplayed.about}</p>
            </div>

            <div className="category">
              <p className="header">Why I Joined Localist</p>
              <div className="line" />
              <p className="body">{dataStore.profileDisplayed.why_joined}</p>
            </div>
          </div>

          <div className="right">
            <div className="category">
              <p className="header">My Upcoming Trips</p>
              <div className="line" />
              <ul>
                <li>Paris, France</li>
                <li>June 18 - July 8, 2019</li>
              </ul>
              <ul className="body">
                <li>Chiang Mai, Thailand</li>
                <li>June 18 - July 8, 2019</li>
              </ul>
            </div>

            <p className="my-links">My Links</p>
            <div className="line" />

            {dataStore.peopleInMyDestinations.map((profile, index) => {
              return (
                <Local
                  key={index}
                  id={profile.id}
                  data-id={profile.id}
                  picture={profile.picture_url}
                  name={profile.name}
                  location={profile.location}
                  availability={profile.availability}
                />
              )
            })}

            <div className="local">
              <section>
                <img src="./JeanSebastian.jpeg" className="mini-pic" />
              </section>
              <section>
                <p>Jean-Sebastian Sirois</p>
                <p>Paris, France</p>
                <p>Available: June 18 - July 8, 2019</p>
                <button>View Profile</button>
                <button>Unlink</button>
              </section>
            </div>

            <div className="local">
              <section>
                <img src="./Margaux.jpg" className="mini-pic" />
              </section>
              <section>
                <p>Margaux Anati</p>
                <p>Paris, France</p>
                <p>Available: June 18 - July 8, 2019</p>
                <button>View Profile</button>
                <button>Unlink</button>
              </section>
            </div>

            <div className="local">
              <section>
                <img src="./Bruno.jpg" className="mini-pic" />
              </section>
              <section>
                <p>Bruno Chastain</p>
                <p>Paris, France</p>
                <p>Available: June 28 - July 4, 2019</p>
                <button>View Profile</button>
                <button>Unlink</button>
              </section>
            </div>

            <div className="local">
              <section>
                <img src="./Sarah.jpg" className="mini-pic" />
              </section>
              <section>
                <p>Sarah Richelieu</p>
                <p>Paris, France</p>
                <p>Available: June 18 - July 2, 2019</p>
                <button>View Profile</button>
                <button>Unlink</button>
              </section>
            </div>

            <div className="local">
              <section>
                <img src="./Duanphen.jpeg" className="mini-pic" />
              </section>
              <section>
                <p>Duanphen Kaekwoon</p>
                <p>Chiang Mai, Thailand</p>
                <p>Available: June 18 - July 8, 2019</p>
                <button>View Profile</button>
                <button>Unlink</button>
              </section>
            </div>

            <div className="local">
              <section>
                <img src="./BudsarinCropped.jpg" className="mini-pic" />
              </section>
              <section>
                <p>Budsarin Hiranprueck</p>
                <p>Chiang Mai, Thailand</p>
                <p>Available: June 18 - July 8, 2019</p>
                <button>View Profile</button>
                <button>Unlink</button>
              </section>
            </div>

            <div className="local">
              <section>
                <img src="./Naowarat.jpg" className="mini-pic" />
              </section>
              <section>
                <p>Naowarat Angsakul</p>
                <p>Chiang Mai, Thailand</p>
                <p>Available: June 18 - July 8, 2019</p>
                <button>View Profile</button>
                <button>Unlink</button>
              </section>
            </div>
            <footer />
          </div>
        </section>
      </>
    )
  }
}

export default observer(MyProfile)
