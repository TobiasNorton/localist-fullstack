import React, { Component } from 'react'
import { decorate, computed, observable } from 'mobx'
import axios from 'axios'

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

  populateBrowseSection = callBack => {
    // This is everyone whose location matches my trip destination
    axios.get('/api/profiles/browse').then(response => {
      dataStore.peopleInMyDestinations = response.data.profiles

      if (callBack) {
        callBack()
      }
    })
  }

  editProfile = event => {
    event.preventDefault()

    const formData = new FormData(event.target)

    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    }

    axios.put('/api/profile', formData).then(response => {
      // TODO: Replace with history.push()
      window.location = '/add_trips'
    })
    this.getAllProfiles()
  }

  getProfile = id => {
    axios.get(`/api/profiles/${id}`).then(response => {
      console.log(response.data.displaying_profile)
      dataStore.profileDisplayed = response.data.displaying_profile
    })
  }
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
