import React, { Component } from 'react'
import { decorate, computed, observable } from 'mobx'
import { observer } from 'mobx-react'
import axios from 'axios'

import { toJS } from 'mobx'

class DataStore {
  constructor() {
    this.profiles = []
    this.profileDisplayed = []
    this.peopleInMyDestinations = []
    this.myProfile = []
    this.myTrips = []
    this.peopleIAmLinkedWith = []
    this.currentProfile = []
  }

  getAllProfiles = () => {
    // Gets all profiles in database
    axios.get('/api/profiles').then(response => {
      dataStore.profiles = response.data.profiles
    })
  }

  populateBrowseSection = () => {
    // This is everyone whose location matches my trip destination
    axios.get('/api/profiles/browse').then(response => {
      dataStore.peopleInMyDestinations = response.data.profiles
    })
  }

  // getMyTrips = () => {
  //   // This fills the 'Availability' fields with my trip dates
  //   axios.get(`api/trips/${1}`).then(response => {
  //     dataStore.myTrips = response.data.trips
  //   })
  // }

  createProfile = event => {
    event.preventDefault()

    const formData = new FormData(event.target)

    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    }

    axios.post('/api/profiles', formData).then(response => {})
    this.getAllProfiles()
  }

  getProfile = id => {
    axios.get(`/api/profiles/${id}`).then(response => {
      console.log(response.data.displaying_profile)
      dataStore.profileDisplayed = response.data.displaying_profile
    })
  }

  // showPeopleIAmLinkedWith = () => {
  //   axios.get('/api/links').then(response => {
  //     console.log(response.data)
  //   })
  // }

  // getMyProfile = () => {
  //   axios.get('/api/profiles/:id').then(response => {
  //     console.log(response.data)
  //   })
  // }
}

decorate(DataStore, {
  profiles: observable,
  profileDisplayed: observable,
  peopleInMyDestinations: observable,
  myProfile: observable,
  myTrips: observable,
  peopleIAmLinkedWith: observable
})

let dataStore = new DataStore()

export default dataStore
