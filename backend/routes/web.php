<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/


// --------- MEMBERS LIST ---------

$router->get(
    'members', // my endpoint list
    [
        'as' => 'member-list',
        'uses' => 'MemberController@list'
    ]
);

// --------- CREATION OF A NEW MEMBER ---------

$router->post(
    'members',
    [
        'as' => 'member-create',
        'uses' => 'MemberController@create'
    ]
);
