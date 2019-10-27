<?php

/*
 * feat: style ci config
 */

use Canvas\Post;
use Canvas\Tag;
use Canvas\Topic;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Index');

    $posts = Post::with('topic', 'user')->published()->orderByDesc('published_at')->limit(6)->get();
    $topics = Topic::withCount('posts')->limit(5)->orderByDesc('posts_count')->get(['name', 'slug']);
    $tags = Tag::withCount('posts')->limit(5)->orderByDesc('posts_count')->get(['name', 'slug']);

    return view('welcome', compact('posts', 'topics', 'tags'));
})->name('home');

Auth::routes();
Route::resource('contacts', 'ContactsController')->only('store');

Route::prefix('blog')->group(function () {
    Route::get('/', 'BlogController@getPosts')->name('blog.index');
    Route::middleware('Canvas\Http\Middleware\ViewThrottle')
        ->get('{slug}', 'BlogController@findPostBySlug')->name('blog.post');
    Route::get('tag/{slug}', 'BlogController@getPostsByTag')->name('blog.tag');
    Route::get('topic/{slug}', 'BlogController@getPostsByTopic')->name('blog.topic');
});
