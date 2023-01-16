import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateProfileImage, updateProfileUser } from "../../redux/actions";
import styled from "styled-components"

const Container = styled.div`
width:100%;
height: 625px;
background-image: url(https://images.deliveryhero.io/image/pedidosya/home-backgrounds/home-background-ar.jpg?quality=100&width=1345),
    url(https://images.deliveryhero.io/image/pedidosya/home-backgrounds/home-background-others.jpg?quality=100&width=1345);
display:flex;
justify-content:center;
align-items:center;
background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`
const Box1 = styled.div`
width:350px;
height:450px;
background-color: white;
`
const Box2 = styled.div`
width:300px;
height: 300px;
background-color: black;
`
const ImageUpdate = styled.img`
width:80px;
height: 80px;
`
const Form = styled.form`

padding:10px;
margin: 0 auto;
width:300px;
border-radius:3px;
`
const Input = styled.input`
margin:2px;

`
const Title = styled.p`

`
const Button = styled.button`
margin-top:10px;
`

export default function UserProfile (){
    const dispatch = useDispatch()
    const [image, setImage] = useState("")
    const [loading, setLoading] = useState(false)
    const id = "dc1f39a7-22a3-4534-acf2-ce060176d687"
    const [user, setUser] = useState({
        name:"",
        user_mail:"",
        password:""
    })
    
    const updateUser = (e)=>{
        e.preventDefault()
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    const submitUserUpdate = (e) =>{
        e.preventDefault()
        dispatch(updateProfileUser(id,user))
        alert("se actualizo con exito papa")
    }
    const uploadImage = async (e) => {
        const files = e.target.files
        const data = new FormData()
        data.append("file", files[0])
        data.append("upload_preset", "vmfhvx1d")
        setLoading(true)
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dlibclk9r/upload",
            {
                method: "POST",
                body:data,
            })
           const file = await res.json()

           setImage(file.secure_url)
           const dataFinal =res.url
           console.log(dataFinal)
           setLoading(false)
           dispatch(updateProfileImage(id,dataFinal))
           alert("SE ACTUALICO SU FOTO")
    }
    return(
    <>
   <Container>
        <Box1>
            <Form onSubmit={submitUserUpdate}>
      <Title>Name:</Title>
        <Input
        type={"text"}
        name={"name"}
        onChange={updateUser}/>
         <Title>User_mail:</Title>
        
         <Input
        type={"text"}
        name={"user_mail"}
        onChange={updateUser}
        />
         <Title>Password:</Title>

         <Input 
        type={"text"}
        name={"password"}
        onChange={updateUser}
        />
        <Button type="submit">Modificar</Button>  
        </Form>
        <Title>Actualize su  de perfil</Title>
        <input
    type={"file"}
    name={"file"}
    placeholder={"Suba su imagen"}
    onChange={uploadImage}
    />
      {loading ? (<h3>Cargando</h3>): (<ImageUpdate src={image}/>)}  
        </Box1>
        <Box2>

        </Box2>
   </Container>
    </>)
}