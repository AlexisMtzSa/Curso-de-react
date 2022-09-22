import React, {useState} from 'react'
import JokeComp from '../components/pure/JokeComp'
import { Button } from '@mui/material'
import getRandomJoke from '../utils/axios-service'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function JokesPage() {

    const [joke, setJoke] = useState('')
    const [showThumbs, setShowThumbs] = useState(false)
    let [positiveJokes, setPositiveJokes] = useState(0)
    let [negativeJokes, setNegativeJokes] = useState(0)


  function countValoration(valoration){
    valoration=='true'?setPositiveJokes(++positiveJokes):setNegativeJokes(++negativeJokes)
    setShowThumbs(false)
  }

    function generateJoke(){
        getRandomJoke()
            .then(response => {
              if(response.status==200){
                setJoke(response.data.value)
                setShowThumbs(true)
              }
              else 
                console.log(response)
            })
            .catch(error => console.log(error))
    }

  return (
    <div>
        <h1>Chuck Norris Jokes</h1>
          {joke!=''?<JokeComp joke={joke}  showThumbs={showThumbs} countValoration={countValoration}/>:null}        
        <Button  onClick={generateJoke} variant="contained">Generate joke</Button>
        <div style={{marginTop: '2em'}}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell><ThumbUpIcon/></TableCell>
                  <TableCell><ThumbDownIcon/></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                    <TableCell>{positiveJokes}</TableCell>
                    <TableCell >{negativeJokes}</TableCell>
                </TableRow>
                
              </TableBody>
            </Table>
          </TableContainer>
         </div>
        
        

    </div>
    
  )
}


  
    

