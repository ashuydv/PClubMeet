import React from 'react';
import Card from '@material-ui/core/Card'
import './Preview.css'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import CardMedia from '@material-ui/core/CardMedia'
import { BiMicrophone } from 'react-icons/bi'
import { IoVideocamOutline } from 'react-icons/io5'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import { IoCopySharp } from 'react-icons/io5'
import Button from '@material-ui/core/Button'


const Preview = () => {

    return (
        <div>
            <div className="preview-main">
                <h1>Room #1</h1>
                <Card>
                    <CardContent>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            width='350'
                            height="280"
                            image='https://dummyimage.com/350x280/37AF4B/333'
                            title="Contemplative Reptile"
                        />
                    </CardContent>
                    <CardActions className='card-buttons'>
                        <IconButton size="medium" className='preview-icon'>
                            <BiMicrophone />
                        </IconButton>
                        <IconButton size="medium" className='preview-icon' >
                            <IoVideocamOutline />
                        </IconButton>
                    </CardActions>
                </Card>
                <Input type="text" variant="filled" className='username' placeholder='Add Username' />
                <div className='join'>
                    <Input
                        className='input'
                        value='Some text to copy'
                        label="Filled" variant="filled"
                        id="input-with-icon-adornment text"
                        endAdornment={
                            <InputAdornment position="end" >
                                <IconButton>
                                    <IoCopySharp />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <Button className='btn'>Join Meet</Button>
                </div>
            </div>
        </div>
    );
}

export default Preview;
