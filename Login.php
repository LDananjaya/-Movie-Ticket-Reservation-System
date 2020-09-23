<!Doctype html>
<html>

<head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- <link rel="stylesheet" type="text/css" href="css/homecss.css"> -->
        <link rel="stylesheet" type="text/css" href="css/myNewAboutUs.css">
        <link type="text/css" rel="stylesheet" href="css/login.css" / >

</head>

<body>
        <header>
                <img class="backImg" src="images/banner1.jpeg">
                <ul>
                        <li id="name">Royal Cinema&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;</li>
                        <li class="main">
                                <a href="Home.html">Home</a>
                        </li>
                        <li class="main">
                                <a href="Movie.html">Movies</a>
                        </li>
                        <li class="main">
                                <a href="Rates.html">Rates&ShowTimes</a>
                        </li>
                        <li class="main">
                                <a href="#about">News</a>
                        </li>
                        <li class="main">
                                <a href="BuyTicket.html">Buy Tickets</a>
                        </li>
                        <li class="main">
                                <a href="contacts.html">Contac Us</a>
                        </li>
                        <li>
                                <a></a>
                        </li>
                        <li>
                                <a></a>
                        </li>
                        <li>
                                <a></a>
                        </li>
                        <li>
                                <a></a>
                        </li>
                        <li>
                                <a></a>
                        </li>
                        <li>
                                <a></a>
                        </li>
                        <li>
                                <a></a>
                        </li>
                        <li>
                                <a></a>
                        </li>
                        <li>
                                <a></a>
                        </li>


                        <li class="main">
                                <a href="Login.html">Login</a>
                        </li>
                </ul>
        </header>
        <br/>
        <br/>
        
        <p>
            <b>Returning users please enter your login details to proceed to book your tickets online. New users can sign up and
                proceed with booking tickets.</b>
        </p>
        
            <form name="MyForm" action="UserDetails.html" method="GET">
                <h1><b>Login</b></h1>
            <label>User Name :</label><br/>

            <input type="text"   name="Uname" value=""id="txt_Uname"/><br/>
    
            <label>Password :</label><br/>
            <input type="password"   name="pw" value=""id="txt_pw"/><br/>
    
            <button type="button" onclick="validation();">Login</button>
    
            </form>
            </body>


        <footer>
                <div class="container-fluid" id="foot">

                        <div id="links">

                                <a class="mouse" href="Home.html">
                                        <b>Home</b>
                                </a> |
                                <a class="mouse" href="Terms of use.html">
                                        <b>Terms of use</b>
                                </a> |
                                <a class="mouse" href="privacy policy.html">
                                        <b>Privacy Policy</b>
                                </a> |
                                <a class="mouse" href="AboutUs.html">
                                        <b>About Us</b>
                                </a>
                                <br/>
                                <a class="mouse" href="Login.html">
                                        <b>Login</b>
                                </a> |
                                <a class="mouse" href="#signup.html">
                                        <b>Register</b>
                                </a> |
                                <a class="mouse" href="contactus.html">
                                        <b>Contac Us</b>
                                </a>

                        </div>

                </div>

        </footer>
        <script src="js/loginVali.js"></script>
</body>

</html>