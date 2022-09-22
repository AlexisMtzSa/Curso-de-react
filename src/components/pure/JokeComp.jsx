import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material'


const JokeComp = ({joke, showThumbs , countValoration}) => {

    const [evaluation, setEvaluation] = useState(null)

    const sendValoration = () => {
        countValoration(evaluation)
        setEvaluation(null)
        
    }

    return (
        <div>
            <h2>{joke}</h2>
            {
                showThumbs?
                    <FormControl>
                        <RadioGroup row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="evaluation"  value={evaluation} onChange={(event)=>setEvaluation(event.target.value)}>
                            <FormControlLabel value={true} control={<Radio  icon={<ThumbUpIcon className='icon'/>}/>} />
                            <FormControlLabel value={false} control={<Radio  icon={<ThumbDownIcon className='icon' />}/>}/>
                        </RadioGroup>
                        {evaluation!=null?<Button style={{marginBottom: '1em'}} onClick={sendValoration} variant="outlined" color="inherit" endIcon={<SendIcon/>}>Send</Button>:null}
                        
                    </FormControl>: null
                
            }
            
            
        
        </div>
    );
}

JokeComp.propTypes = {
    joke: PropTypes.string,
    showThumbs: PropTypes.bool
}

export default JokeComp;
