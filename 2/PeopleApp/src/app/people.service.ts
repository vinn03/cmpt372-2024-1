import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  people:any[]
  constructor() {
    // call the data service for the people
    
    this.people = [
      {
        name: 'john',
        instructor: false,
        added_on: new Date().getTime()
      },
      {
        name: 'bobby',
        instructor: false,
        added_on: new Date().getTime()
      },
      {
        name: 'jenny',
        instructor: true,
        added_on: new Date().getTime()
      },
      {
        name: 'jane',
        instructor: true,
        added_on: new Date().getTime()
      },
      {
        name: 'steve',
        instructor: true,
        added_on: new Date().getTime()
      }
    ]
   }

   get() {
    // get people-list from storage ...
    return this.people
   }

   add(newPerson:any){
    newPerson.added_on = (new Date()).getTime()
    this.people.push(newPerson)
    // update the people-list on the storage ...
    console.log(this.people)
   }

   delete(del_person:string){
    this.people = this.people.filter((p) => p.name != del_person)
    // update the people-list on the storage ...
    return this.people
   }
}
