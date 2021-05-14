const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection,callback) {
      if(typeof collection === 'object'){
        let values = Object.values(collection)
        values.forEach(value => {
           return callback(value)
        })
      }
      return collection
    },

    map: function(collection,callback) {
      if(typeof collection === 'object'){
        const values = Object.values(collection)
         let a = values.map(newValues =>{
           callback(newValues)
        })

      }
      else{
         let a = collection.map(value => {
          callback(value)
        })
      return a 
      }
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
