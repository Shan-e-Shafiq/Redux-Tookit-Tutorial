import Chance from "chance";

const chance = Chance()

export const fakeUserData = () => {
   return new Promise((res, rej) => {
      try {
         res(chance.name({ middle: true }))
      } catch (error) {
         rej("Error during fetching")
      }
   })
}