<!Doctype html>
<html>

<head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- <link rel="stylesheet" type="text/css" href="css/homecss.css"> -->
        <link rel="stylesheet" type="text/css" href="css/myNewAboutUs.css">
        <link type="text/css" rel="stylesheet" href="css/rates.css">

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
                                <a href="contactus.html">Contac Us</a>
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
                                <a href=" Login.html">Login</a>
                        </li>
                </ul>
        </header>

        <br/>
        <br/>
 
        <form  name="MyForm" action="GetRatesbotton.html" method="GET">

        <h1><b>Rates</b></h1>

        <label>Date :</label><br/>
        <input type="date" name="Date" id="txt_Date"> <br/>

        <label>Theater :</label><br/><select name="the" id="the">
                <option value="">Please choose</option>
                <option value="theater1">Theater1</opstion>
                <option value="theater2">Theater2</option>
                <option value="theater3">Theater3</option>
        </select>

        

        <label>ShowTime :</label><br/><select name="sho" id="sho">
                <option value="">Please choose</option>
                <option value="10:30">10:30</option>
                <option value="01:30">01:30</option>
                <option value="04:30">04:30</option>       
        </select>
        

        <label>Movie :</label><br/><select name="mov" id="mov">
                <option value="">Please choose</option>
                <option value="brave">Brave</option>
                <option value="mission:impossible">Mission:Impossible</option>
                <option value="skyscraper">Skyscraper</option> 
                <option value="hotel transylvania">Hotel Transylvania 3</option> 
        </select>
        

        <button type="button" onclick="validation();">Get Prices</button>

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
                                <a class="mouse" href="signup.html">
                                        <b>Register</b>
                                </a> |
                                <a class="mouse" href="contactus.html">
                                        <b>Contac Us</b>
                                </a>

                        </div>

                </div>

        </footer>
        
<script src="js/RatesVali.js"></script>

</body>

</html>