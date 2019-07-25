<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Canvas\Tag;
use Canvas\Post;
use Canvas\Topic;

Route::get('/', function () {
    $posts = Post::with('topic', 'user')->published()->orderByDesc('published_at')->limit(6)->get();
    $topics = Topic::withCount('posts')->limit(5)->orderByDesc('posts_count')->get(['name', 'slug']);
    $tags   = Tag::withCount('posts')->limit(5)->orderByDesc('posts_count')->get(['name', 'slug']);
    return view('welcome', compact('posts', 'topics', 'tags'));
})->name('home');

Auth::routes();

Route::prefix('blog')->group(function () {
    Route::get('/', 'BlogController@getPosts')->name('blog.index');
    Route::middleware('Canvas\Http\Middleware\ViewThrottle')
        ->get('{slug}', 'BlogController@findPostBySlug')->name('blog.post');
    Route::get('tag/{slug}', 'BlogController@getPostsByTag')->name('blog.tag');
    Route::get('topic/{slug}', 'BlogController@getPostsByTopic')->name('blog.topic');
});
