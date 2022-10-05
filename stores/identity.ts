import { defineStore } from 'pinia'

export interface IIdentityState {
  firstName: string
  lastName: string
}

export const useIdentity = defineStore('identity', {
  state: (): IIdentityState => ({
    firstName: 'Ahmed',
    lastName: 'Seyam',
  }),
  actions: {
    setFirstName(firstName: string) {
      this.firstName = firstName
    },
    setLastName(lastName: string) {
      this.lastName = lastName
    },
    reset() {
      this.firstName = 'Ahmed'
      this.lastName = 'Seyam'
    },
  },
  getters: {
    fullName(): string {
      return `${this.firstName} ${this.lastName}`
    },
  },
})
