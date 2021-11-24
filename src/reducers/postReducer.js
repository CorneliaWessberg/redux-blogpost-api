export default (state = [], action) => {
   switch (action.type) {
       case 'FETCH_POSTS':
           return action.payload;
        case 'ADD_POST':
            return [...state, action.payload]; 
        default: 
            return state; 
   }
   
    // if (action.type === 'FETCH_POSTS') {
    //     return action.payload; 
    // }

    // return state; 
}; 


    // bad:
    // state[0] = 'Sam
    // state.pop()
    // state.push()

    // bad: 
    // state.name = 'Same'
    // state.age = 30

    // return state;

    // bad:
    // return document.querySelector('input');
    
    // bad: 
    // return axios.get('/posts)
