import{test,expect} from '@playwright/test'
import { request } from 'node:http'


//Get-https://jsonplaceholder.typicode.com/

test('get request-fetch users',async({request})=>{
    const response=await request.get('https://jsonplaceholder.typicode.com/users/1')
    expect(response.status()).toBe(200)
    const responsebody=await response.json()
    console.log(responsebody)

})

//post adding new user

test('post request-create users',async({request})=>{
    const response=await request.post('https://jsonplaceholder.typicode.com/users',{
        data:{
            
    "id": 11,
    "name": "Amritha",
    "username": "Malu",
    "email": "Amritha123@gmail.com",
    "address": {
      "street": "Green Villa",
      "suite": "123 Suite",
      "city": "Washington",
      "zipcode": "56454545",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "54545555",
    "website": "amritha.org",
    "company": {
      "name": "Testing",
      "catchPhrase": "new user can be added",
      "bs": "Test data"
    }
        }
    })
    expect(response.status()).toBe(201)
    const responsebody=await response.json()
    console.log(responsebody)

})


//patch

test('patch request-create users',async({request})=>{
    const response=await request.patch('https://jsonplaceholder.typicode.com/users',{
        data:{ 
    "email": "Amritha123@gmail.com",
        }
        }
    )
    expect(response.status()).toBe(200)
    const responsebody=await response.json()
    console.log(responsebody)

})

//put

test('put request-update users entire data',async({request})=>{
    const response=await request.put('https://jsonplaceholder.typicode.com/users/1',{
        data:{
            
    "id": 1,
    "name": "Amritha",
    "username": "Malu",
    "email": "Amritha123@gmail.com",
    "address": {
      "street": "Green Villa",
      "suite": "123 Suite",
      "city": "Washington",
      "zipcode": "56454545",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "54545555",
    "website": "amritha.org",
    "company": {
      "name": "Testing",
      "catchPhrase": "new user can be added",
      "bs": "Test data"
    }
        }
    })
    expect(response.status()).toBe(200)
    const responsebody=await response.json()
    console.log(responsebody)

})

//delete
test('Delete request-delete the user',async({request})=>{
const response=await request.delete('https://jsonplaceholder.typicode.com/users/1'
    
)
expect(response.status()).toBe(200)
})

