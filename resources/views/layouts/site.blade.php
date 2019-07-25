<!DOCTYPE html>
<html lang="en">
<head>
    <title>{{ config('app.name', 'Laravel') }}</title>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700" rel="stylesheet">

    <link rel="stylesheet" href="/landing/css/open-iconic-bootstrap.min.css">
    <link rel="stylesheet" href="/landing/css/animate.css">

    <link rel="stylesheet" href="/landing/css/owl.carousel.min.css">
    <link rel="stylesheet" href="/landing/css/owl.theme.default.min.css">
    <link rel="stylesheet" href="/landing/css/magnific-popup.css">

    <link rel="stylesheet" href="/landing/css/aos.css">

    <link rel="stylesheet" href="/landing/css/ionicons.min.css">

    <link rel="stylesheet" href="/landing/css/bootstrap-datepicker.css">
    <link rel="stylesheet" href="/landing/css/jquery.timepicker.css">

    <link rel="stylesheet" href="/landing/css/flaticon.css">
    <link rel="stylesheet" href="/landing/css/icomoon.css">
    <link rel="stylesheet" href="/landing/css/style.css">
</head>
<body>
    <div id="colorlib-page">
        <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
        <aside id="colorlib-aside" role="complementary" class="js-fullheight text-center">
            <h1 id="colorlib-logo"><a href="{{ route('home') }}">bwg<span>.</span></a></h1>
            <nav id="colorlib-main-menu" role="navigation">
                <ul>
                    <li class="colorlib-active"><a href="{{ route('home') }}">Home</a></li>
                    <li><a href="{{ route('blog.index') }}">Blog</a></li>
                </ul>
            </nav>
            <div class="colorlib-footer">
            <p>
                Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved.<br />
                This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            <ul>
                <li><a href="#"><i class="icon-facebook"></i></a></li>
                <li><a href="#"><i class="icon-twitter"></i></a></li>
                <li><a href="#"><i class="icon-instagram"></i></a></li>
                <li><a href="#"><i class="icon-linkedin"></i></a></li>
            </ul>
        </div>
    </aside>
    <div id="colorlib-main">
        <div class="hero-wrap js-fullheight" style="background-image: url(/landing/images/bg_1.jpg);" data-stellar-background-ratio="0.5">
            <div class="overlay"></div>
            <div class="js-fullheight d-flex justify-content-center align-items-center">
                <div class="col-md-8 text text-center">
                    <div class="img mb-4" style="background-image: url({{ sprintf('%s%s%s', 'https://secure.gravatar.com/avatar/', md5('me@bagaskarawg.id'), '?s=200') }});"></div>
                        <div class="desc">
                            <h2 class="subheading">Hello I'm</h2>
                            <h1 class="mb-4">Bagaskara Wisnu Gunawan</h1>
                            <p>I am a full-stack web developer. With 4 years of experience in <b>PHP/Laravel 5, HTML, CSS, JS, etc</b>, 2 years of experience in <b>Ruby on Rails 3</b>, 1 year of experience in <b>Vue.js</b>.</p>
                            <p><a href="https://bagaskarawg.id/blog/post-2a9fc8cb-0e52-4aed-8f89-ff5363656102" class="btn-custom">More About Me <span class="ion-ios-arrow-forward"></span></a></p>
                        </div>
                    </div>
                </div>
            </div>
            <section class="ftco-section">
                <div class="container">
                    <div class="row justify-content-center mb-5 pb-2">
                        <div class="col-md-7 heading-section text-center ftco-animate">
                            <h2 class="mb-4">Articles</h2>
                            <p>some curated articles aspired by a lot of different places in my head, a number of different great authors, etc.</p>
                        </div>
                    </div>
                    <div class="row">
                        @foreach($posts as $post)
                            <div class="col-md-6">
                                <div class="blog-entry ftco-animate">
                                    @if(!empty($post->featured_image))
                                        <a href="{{ route('blog.post', $post->slug) }}" class="img img-2" style="background-image: url({{ $post->featured_image }});"></a>
                                    @endif
                                    <div class="text text-2 pt-2 mt-3">
                                        <span class="category mb-3 d-block">
                                            @if($post->topic)
                                                <a href="#">{{ $post->topic->first()->name }}</a>
                                            @endif
                                        </span>
                                        <h3 class="mb-4"><a href="{{ route('blog.post', $post->slug) }}">{{ $post->title }}</a></h3>
                                        <p class="mb-4">{{ $post->summary }}</p>
                                        <div class="author mb-4 d-flex align-items-center">
                                            <a href="#" class="img" style="background-image: url({{ sprintf('%s%s%s', 'https://secure.gravatar.com/avatar/', md5(strtolower(trim($post->user->email))), '?s=200') }});"></a>
                                            <div class="ml-3 info">
                                                <span>Written by</span>
                                                <h3><a href="#">{{ $post->user->name }}</a></h3>
                                                <h3><span>on {{ $post->published_at->format('M d, Y') }}</span> - <span>{{ $post->read_time }}</span></h3>
                                            </div>
                                        </div>
                                        {{-- <div class="meta-wrap align-items-center">
                                            <div class="half order-md-last">
                                                <p class="meta">
                                                    <span><i class="icon-heart"></i>3</span>
                                                    <span><i class="icon-eye"></i>100</span>
                                                    <span><i class="icon-comment"></i>5</span>
                                                </p>
                                            </div>
                                            <div class="half">
                                                <p><a href="#" class="btn py-2">Continue Reading <span class="ion-ios-arrow-forward"></span></a></p>
                                            </div>
                                        </div> --}}
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </section>
            <footer class="ftco-footer ftco-bg-dark ftco-section">
                <div class="container px-md-5">
                    <div class="row mb-5">
                        <div class="col-md">
                            <div class="ftco-footer-widget mb-4 ml-md-4">
                                <h2 class="ftco-heading-2">Topics</h2>
                                <ul class="list-unstyled categories">
                                    @foreach($topics as $topic)
                                        <li><a href="{{ route('blog.topic', $topic->slug) }}">{{ $topic->name }} <span>({{ number_format($topic->posts_count) }})</span></a></li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="ftco-footer-widget mb-4">
                                <h2 class="ftco-heading-2">Tags</h2>
                                <ul class="list-unstyled categories">
                                    @foreach($tags as $tag)
                                        <li><a href="{{ route('blog.tag', $tag->slug) }}">{{ $tag->name }} <span>({{ number_format($tag->posts_count) }})</span></a></li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="ftco-footer-widget mb-4">
                                <h2 class="ftco-heading-2">Have a Question?</h2>
                                <div class="block-23 mb-3">
                                    <ul>
                                        <li>
                                            <span class="icon icon-map-marker"></span>
                                            <span class="text">
                                                Perumahan Muslim Tasnim Leles No. 41, Sukamanah, Karangtengah, Kabupaten Cianjur, Jawa Barat, Indonesia 43281
                                            </span>
                                        </li>
                                        <li><a href="tel:+6287781805651"><span class="icon icon-phone"></span><span class="text">+62 877 8180 5651</span></a></li>
                                        <li><a href="mailto:me@bagaskarawg.id"><span class="icon icon-envelope"></span><span class="text">me@bagaskarawg.id</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <p>
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved.<br/>
                                This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
    <div id="ftco-loader" class="show fullscreen">
        <svg class="circular" width="48px" height="48px">
            <circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/>
            <circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/>
        </svg>
    </div>
    <script src="/landing/js/jquery.min.js"></script>
    <script src="/landing/js/jquery-migrate-3.0.1.min.js"></script>
    <script src="/landing/js/popper.min.js"></script>
    <script src="/landing/js/bootstrap.min.js"></script>
    <script src="/landing/js/jquery.easing.1.3.js"></script>
    <script src="/landing/js/jquery.waypoints.min.js"></script>
    <script src="/landing/js/jquery.stellar.min.js"></script>
    <script src="/landing/js/owl.carousel.min.js"></script>
    <script src="/landing/js/jquery.magnific-popup.min.js"></script>
    <script src="/landing/js/aos.js"></script>
    <script src="/landing/js/jquery.animateNumber.min.js"></script>
    <script src="/landing/js/bootstrap-datepicker.js"></script>
    <script src="/landing/js/jquery.timepicker.min.js"></script>
    <script src="/landing/js/scrollax.min.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
    <script src="/landing/js/google-map.js"></script>
    <script src="/landing/js/main.js"></script>
</body>
</html>