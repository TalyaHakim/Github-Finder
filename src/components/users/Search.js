import React, {useState, useContext} from 'react';
import AlertContext from '../../context/Alert/alertContext';
import GithubContext from '../../context/github/githubContext';

const Search = () => {
    const githubContext =  useContext(GithubContext);
    const alertContext = useContext(AlertContext);     
    const [text, setText] = useState('')

    const onTyping = e => setText(e.target.value);

    const onClick = e => {
        e.preventDefault()
        if(text === ''){
            alertContext.setAlert('Pleas enter something', 'light')
        } 
        else{
            githubContext.searchUsers(text);
            setText('');  
        } 
    }  

    return (
        <div>
            <form className='form' onSubmit= {onClick}> 
                <input type='text' name='text' placeholder='Search user..'
                value= {text}
                onChange= {onTyping}
                />
                <input type='submit' value='search' className='btn btn-dark btn-block'/>
                
            </form>
            {githubContext.users.length > 0 && (
            <button className='btn btn-light btn-block'
            onClick= {githubContext.clearUsers}>Clear</button>
            )}
        </div>
    )
}

export default Search;
