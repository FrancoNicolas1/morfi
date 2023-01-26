import React from "react";
import "../Admin/Admin.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allRestaurants, getAllUsers, updateBanned, updateUserAdmin } from "../../redux/actions";
import { DonutChart } from "@tremor/react";
import '@tremor/react/dist/esm/tremor.css';
import { NavLink } from "react-router-dom";

function Admin1() {
   const dispatch = useDispatch()
   const user = useSelector((state) => state.user)
   const users = useSelector((state) => state.allUsers)
   const restaurants = useSelector((state) => state.allRestaurants)
   const adminUsers = users.filter((user) => user.isAdmin === true).length;
   const nonAdminUsers = users.filter((user) => user.isAdmin === false).length;
   const bannedUsers = users.filter((user) => user.isBanned === true).length;
   const nonBannedUsers = users.filter((user) => user.isBanned === false).length;
   const productsByRestaurant = restaurants.map((res) => res.Products)
   const allProducts= productsByRestaurant.flat().length
   console.log(user)
   const allRestaurant = restaurants.map((res) => res).length

   
useEffect(()=>{
    dispatch(getAllUsers())
    dispatch(allRestaurants())
},[])

const handleUpdateUserAdmin = (e) => {
    dispatch(updateUserAdmin(e))
}
const handleUpdateBanned = (e) => {
    dispatch(updateBanned(e))
}

const dataAdmin = [
    { name: "Administradores", value: adminUsers },
    { name: "No administradores", value: nonAdminUsers },
  ];

const dataBanned = [
    { name: "Baneados", value: bannedUsers },
    { name: "No baneados", value: nonBannedUsers },
 ];
const dataProducts = [
    { name: "Productos en la plataforma", value: allProducts },
    { name: "Restaurantes en la plataforma", value: allRestaurant },
];
    return (
<>
<body>
   <input type="checkbox" id="menu-toggle"/>
    <div class="sidebar">
       
        
        <div class="side-content">
            <div class="profile">
                <img class="profile-img bg-img"src={user[0].photo}/>
                <h4>{user[0].name}</h4>
                <small>Administrador</small>
            </div>

            <div class="side-menu">
                <ul>
                    <li>
                       <a href="" class="active">
                            <span class="las la-home"></span>
                            <small>Dashboard</small>
                        </a>
                    </li>
                    <li>
                     
                        <NavLink
               
                to={"/"}
              >  
          
              <span class="las la-home"></span>
              <small>Volver</small>
        
               
              </NavLink>
                    </li>

                </ul>
            </div>
        </div>
    </div>
    
    <div class="main-content">
        
       
        
        
        <main>
            
            <div class="page-header">
                <h1>Dashboard</h1>
                <small>Home / Dashboard</small>
            </div>
            
            <div class="page-content">
            
                <div class="analytics">
        
                    <DonutChart
                        data={dataAdmin}
                        category="value"
                        dataKey="name"
                        colors={[ "blue" ]}
                        variant="pie"
                        valueFormatter={undefined}
                        label={undefined}
                        showLabel={true}
                        showTooltip={true}
                        showAnimation={true}
                        height="h-44"
                        marginTop="mt-0"
                    />
            
                    <DonutChart
                        data={dataBanned}
                        category="value"
                        dataKey="name"
                        colors={[ "red", "green" ]}
                        variant="pie"
                        valueFormatter={undefined}
                        label={undefined}
                        showLabel={true}
                        showTooltip={true}
                        showAnimation={true}
                        height="h-44"
                        marginTop="mt-0"
                    />
                     <div class="card">
                        <div class="card-head">
                            <h2>{restaurants.length}</h2>
                            <span class="las la-user-friends"></span>
                        </div>
                        <div class="card-progress">
                            <small>Restaurantes publicados en la plataforma</small>
                            <div class="card-indicator">
                                <div class="indicator one" ></div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-head">
                            <h2>{allProducts}</h2>
                            <span class="las la-user-friends"></span>
                        </div>
                        <div class="card-progress">
                            <small>Productos en la plataforma</small>
                            <div class="card-indicator">
                                <div class="indicator one" ></div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="records table-responsive">

                    
                    <div>
                        <table width="100%" >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th><span class="las la-sort"></span> USUARIO</th>
                                    <th><span class="las la-sort"></span> RESTAURANTES</th>
                                    <th><span class="las la-sort"></span> ADMIN/ USER</th>
                                    <th><span class="las la-sort"></span> BANEADO</th>
                                    <th><span class="las la-sort"></span> TELEFONO</th>
                                    <th><span class="las la-sort"></span> ACTIONS</th>
                                    <th><span class="las la-sort"></span> ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                            {users?.map((user,index)=>{
                          return(
                            <tr>
                            <td>{index+1}</td>
                            <td>
                                <div class="client">
                                 <img class="client-img bg-img" src={user.photo}/>
                                    <div class="client-info">
                                        <h4>{user.name}</h4>
                                        <small>{user.user_mail}</small>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {user.Restaurants.length}
                            </td>
                    
                            <td>
                                {user.isAdmin? <><p>Admin</p></>:<><p>User</p></>}
                            </td>
                            <td>
                                {user.isBanned? <><p>Banned</p></>:<><p>No Banned</p></>}
                            </td>
                            <td>
                                {user.phone}
                            </td>
                            <td>
                            <button type="button" class="btn m-2 btn-primary btn-lg active" onClick={() => handleUpdateUserAdmin(user.id)}>User/Admin</button>
                            </td>
                            <td>
                            <button type="button" class="btn btn-danger btn-lg active" onClick={() => handleUpdateBanned(user.id)} >Banned/No Banned</button>
                            </td>
                            
                            <td>
                                <div class="actions">
                                    <span class="lab la-telegram-plane"></span>
                                    <span class="las la-eye"></span>
                                    <span class="las la-ellipsis-v"></span>
                                </div>
                            </td>
                        </tr>
                          )
                        })}         
                              
                                
                            </tbody>
                        </table>
                    </div>

                </div>
            
            </div>
            
        </main>
        
    </div>
</body>
{/* <div class="d-flex" id="wrapper">
  <div id="page-content-wrapper">
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4"/>
          <div class="d-flex align-items-center justify-content-center ">
              <i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
              <h2 class="fs-2 m-0 text-dark ">Dashboard Admin</h2>
          </div>
          <div id="page-content-wrapper">
          <div class="row g-3 my-2">
                      <div class="col-md-4 justify-content-center">
                        <h4 class="text-center">Usuarios</h4>
                        <p class="text-center">Baneados/No Baneados</p>
                      <DonutChart
                        data={dataBanned}
                        category="value"
                        dataKey="name"
                        colors={[ "red", "green" ]}
                        variant="pie"
                        valueFormatter={undefined}
                        label={undefined}
                        showLabel={true}
                        showTooltip={true}
                        showAnimation={true}
                        height="h-44"
                        marginTop="mt-0"
                    />
                      </div>

                      <div class="col-md-4 justify-content-center">
                      <h4 class="text-center">Usuarios</h4>
                        <p class="text-center">Admin/User</p>
                      <DonutChart
                        data={dataAdmin}
                        category="value"
                        dataKey="name"
                        colors={[ "blue" ]}
                        variant="pie"
                        valueFormatter={undefined}
                        label={undefined}
                        showLabel={true}
                        showTooltip={true}
                        showAnimation={true}
                        height="h-44"
                        marginTop="mt-0"
                    />
                      </div>
                      <div class="col-md-4 justify-content-center">
                      <h4 class="text-center">Restaurantes</h4>
                        <p class="text-center">Productos/Restaurantes</p>
                      <DonutChart
                        data={dataProducts}
                        category="value"
                        dataKey="name"
                        colors={[ "yellow", "orange" ]}
                        variant="pie"
                        valueFormatter={undefined}
                        label={undefined}
                        showLabel={true}
                        showTooltip={true}
                        showAnimation={true}
                        height="h-44"
                        marginTop="mt-0"
                    />
                      </div>
          </div>
              <div class="container-fluid px-4">
          <div class="row my-5">
              <h3 class="fs-4 mb-3 text-dark text-center">Informacion de Usuarios</h3>
              <div class="col ">
                  <table class="table bg-white rounded shadow-sm  text-center ">
                      <thead>
                          <tr>
                              <th scope="col" width="50">#</th>
                              <th scope="col">Usuario</th>
                              <th scope="col">Email</th>
                              <th scope="col">Rol</th>
                              <th scope="col">Estado</th>
                          </tr>
                      </thead>
                      <tbody>
                      {users?.map((user,index)=>{
                          return(
                              <tr key={user.id}>
                              <th scope="row ">{index + 1}</th>
                              <td>{user.name}</td>
                              <td>{user.user_mail}</td>
                              <td>{user.isAdmin? <><p>Admin</p></>:<><p>User</p></>}</td>
                              <td>{user.isBanned? <><p>Banned</p></>:<><p>No Banned</p></>}</td>
                              <button type="button" class="btn m-2 btn-primary btn-lg active" onClick={() => handleUpdateUserAdmin(user.id)}>User/Admin</button>
                             <button type="button" class="btn btn-danger btn-lg active" onClick={() => handleUpdateBanned(user.id)}>Banned/No Banned</button>
                              </tr>
                          )
                        })}          
                      </tbody>
                  </table>
              </div>
          </div>  
          </div>
      </div>
</div>
</div> */}
</>
    )
}
export default Admin1