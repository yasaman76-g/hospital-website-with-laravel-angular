{{-- https://codepen.io/smhtb/pen/gzgxzB --}}
<!DOCTYPE html>
<html lang="en" dir="rtl">
    @extends('homepage')
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ url('assets/css/login.css') }}">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <title>Document</title>
</head>
<body>
    @section('content')
    <div class="container" id="log-in-form">
            <div class="heading">
              <h1>وارد حساب کاربری خود شوید</h1>
            </div>
            <form>
              <div class="form-group">
                <input type="text" class="form-control" id="username" placeholder="نام کاربری را وارد کنید">
              </div>
              <div class="form-group">
                <input type="password" class="form-control" id="pwd" placeholder="کلمه عبور را وارد کنید">
              </div>
              <div class="form-group form-group-btn">
                <button type="submit" class="btn btn-success btn-lg">ورود</button>
              </div>
              <div class="clearfix"></div>
              <div class="checkbox">
                <label>
                  <input type="checkbox"> مرا به خاطر بسپار</label>
              </div>
              <div class="clearfix"></div>
            </form>
          </div>
    @endsection
    
</body>
</html>