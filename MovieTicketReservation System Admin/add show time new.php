<!DOCTYPE html>
<html>

<head>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="css/admminStyleTheatre.css">
    <link rel="stylesheet" type="text/css" href="css/add show time.css">

</head>

<body>

    <div class="container-fluid topClass" style="   background-color: #3382B9;height: 100px;width: 100%;">
        <div class=" row ">
            <div class="col">
                <h2>Royal Cinema</h2>

            </div>
            <div class="col">
                when admin login then display her/his Name
                <p></p>
                <a href="">
                    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                    <b>LogOut</b>
                </a>
            </div>

        </div>
    </div>


    <ul>
            <li>
                <a href="#home"></a>
            </li>
            <li>
                <a href="Dashboad1.html">
                   
                    <img class="imgdsh" src="images/home.png " align="left">&nbsp;Dashboard</a>
            </li>
            <li>
                <a href="add theatre.html">
                        
                    <img class="imgdsh" src="images/movieTheater.png " align="left">&nbsp;Movie Theatres</a>
            </li>
            <li>
                <a href="addmovie.html">
                   
                    <img class="imgdsh" src="images/movie.png " align="left">&nbsp;Movies</a>
            </li>
            <li>
                <a href="add show time new.html">
                    
                    <img class="imgdsh" src="images/clock.png " align="left">&nbsp;Show Timings</a>
            </li>
            <li>
                <a href="Booking.html">
                    <img class="imgdsh" src="images/bookings.png " align="left">&nbsp;Bookings</a>
            </li>
            <li>
                <a href="add user.html">
                    <img class="imgdsh" src="images/users-group.png " align="left">Manage Admins</a>
            </li>
    
        </ul>

    <div class="centerdiv">

        <h1>Show Time</h1>
        <button type="button" class=" button  " id="myBtn">Add Show Time</button>

        <br/>

        <div class="container-fluid">
            
            <table class="user">
                <tr>
                  <th>ID</th>
                  <th>Theatre</th>
                  <th>Movie</th>
                  <th>Start/end Date</th>
                  <th>Start/end Time</th>
                  <th>ODC</th>
                  <th>Gallery</th>
                  <th>Delete</th>
                  <th>Update</th>
                </tr>
                <tr>
                  <td>01</td>
                  <td>AAA</td>
                  <td>00000</td>
                  <td>000</td>
                  <td>00000</td>
                  <td>00000</td>
                  <td>00000</td>
                  <td>00000</td>
                  <td>00000</td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>ooooo</td>
                  <td>00000</td>
                  <td>@</td>
                  <td>00000</td>
                  <td>00000</td>
                  <td>00000</td>
                  <td>00000</td>
                  <td>00000</td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>0000</td>
                  <td>00000</td>
                  <td>  @    </td>
                  <td>00000</td>
                  <td>00000</td>0
                  <td>00000</td>
                  <td>00000</td>
                  <td>00000</td>
                </tr>
                
              </table>
         
              
              <div>

                <p><br><strong></strong></p>
                <p><br><strong></strong></p>

                <h2>Update Show Time</h2>
                

                <form class="Update">
                    <label>
                        <b> Select Theater &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</b>
                    </label>
                    <input type="text" value="" placeholder="Theater" class="name" id="box1">
                    <br/>

                    <label >
                        <b>Select Movie &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</b>
                    </label>
                    <input type="text" value="" placeholder="Movie" class="name" id="box2">
                    <br/>

                    <div class="modform"> 

                    <lable>
                        <b>Show Start Date:</b>
                    </lable>
                    <input type="text" value="" placeholder="Start Date" class="box3">
                    

                    <lable>
                        <b>Show End Date :</b>
                       </lable>
                    <input type="text" placeholder="End Date" class="box3" >
                    <br/>

                    <lable>
                        <b>Show Start Time :</b>
                    </lable>
                    <input type="text" placeholder="Start Time"  class="box3">
                    

                    <lable>
                        <b>Show End Time :</b>
                        </lable>
                    <input type="text" placeholder="End Time" class="box3" >
                    <br/>

                    </div>

                    <input type="submit" value="Update" id="Add">
                    <br/>
 
                </form>
        

        <div id="addTheatre" class="modal">

            <div class="modal-content">
                
                <div class="rows">
                    <div class="modelcol" >

                        <span class="close">&times;</span>

                    </div>
                    <div class="modelcol" >
                        <h2>
                            <b>Add User</b>
                        </h2>
                    </div>

                </div>

                <div>

                <form class="modelFrame form2">
                    <label>
                        <b> Select Theater &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</b>
                    </label>
                    <input type="text" value="" placeholder="Theater" class="name" id="box1">
                    <br/>

                    <label >
                        <b>Select Movie &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</b>
                    </label>
                    <input type="text" value="" placeholder="Movie" class="name" id="box2">
                    <br/>

                    <div class="modform"> 

                    <lable>
                        <b>Show Start Date:</b>
                    </lable>
                    <input type="text" value="" placeholder="Start Date" class="box3">
                    

                    <lable>
                        <b>Show End Date :</b>
                       </lable>
                    <input type="text" placeholder="End Date" class="box3" >
                    <br/>

                    <lable>
                        <b>Show Start Time :</b>
                    </lable>
                    <input type="text" placeholder="Start Time"  class="box3">
                    

                    <lable>
                        <b>Show End Time :</b>
                        </lable>
                    <input type="text" placeholder="End Time" class="box3" >
                    <br/>

                    </div>

                    <input type="submit" value="Add" id="Add">
                    <br/>



                </form>
            </div>


        </div>

    </div>


    <script>

        
        var theatremodal = document.getElementById('addTheatre');

        
        var btn = document.getElementById("myBtn");

       

        var span = document.getElementsByClassName("close")[0];

       
        btn.onclick = function () {

            theatremodal.style.display = "block";
        }
        span.onclick = function () {
            theatremodal.style.display = "none";
        }

        
        window.onclick = function (event) {
            if (event.target == modal) {
                theatremodal.style.display = "none";
            }
        }
    </script>
</body>


</html>