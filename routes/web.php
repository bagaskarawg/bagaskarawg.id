<?php

/*
 * feat: style ci config
 */

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::prefix('blog')->group(function () {
    Route::get('/', 'BlogController@getPosts')->name('blog.index');
    Route::middleware('Canvas\Http\Middleware\ViewThrottle')
        ->get('{slug}', 'BlogController@findPostBySlug')->name('blog.post');
    Route::get('tag/{slug}', 'BlogController@getPostsByTag')->name('blog.tag');
    Route::get('topic/{slug}', 'BlogController@getPostsByTopic')->name('blog.topic');
});
