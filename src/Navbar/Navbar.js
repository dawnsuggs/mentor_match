import React from "react";
import Mentor from '../Mentor/Mentor';

const Navbar = () => (
  <div>

<div>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title> Mentor Page</title>
    <link rel="stylesheet" href="bootstrap.min.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" />
    <link rel="stylesheet" href="user.css" />
</div>

<div>
    <div>
        <nav class="navbar navbar-default">
            <div class="container">
                <div class="navbar-header"><a class="navbar-brand" href="#"><i class="glyphicon glyphicon-camera"></i><span class="text-title"> Mentor Page </span></a><button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only"> Nice - to - Have Navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div>
                <div
                    class="collapse navbar-collapse" id="navcol-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="active" role="presentation"><a href="#"> Home </a></li>
                        <li role="presentation"><a href="#"> Portfolio </a></li>
                        <li role="presentation"><a href="#">Matchs</a></li>
                    </ul>
            </div>
            </div>
        </nav>
    </div>
   <div>
   <img src="http://ak0.picdn.net/shutterstock/videos/7907950/thumb/2.jpg" alt="Night Stars" />
   </div>
 
  
</div>

</div>
);

export default Navbar;
