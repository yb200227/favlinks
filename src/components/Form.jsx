function Form(){


    function handleSubmit(event){
        event.preventDefault()
        alert("submitted!")
    }

    return(    
      <form onSubmit={handleSubmit}>
      <label for="linkName">Link Name</label>
      <input typ="text" name="linkName"/>
      <br/>
      <label for="LinkURL">Link URL</label>
      <input type="text" name="linkURL"/>
  
      <br/>
      <br/>
  
      <input type="submit"/>
    </form>
    )
  }
  

export default Form