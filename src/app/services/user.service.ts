export class UserService {
  getUser(id:string){
      if(id==='1'){
          return{
              id:'1',
              name:'Leela',
              age:54,
              gender:'male'
          }
      }else{
          return{
              id:'2',
              name:'krishna',
              age:54,
              gender:'male'
          }
      }
  }
//   getUser(id: number) {
//       {id[1]: { id: '1', name: 'Leela', age: 54, gender: 'male' },
//       [2]: { id: '2', name: 'krishna', age: 54, gender: 'male' },}
//   }
}
