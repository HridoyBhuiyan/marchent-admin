<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class Dashboard extends Controller
{
    function index()
    {
        return Inertia::render('AdminPages/Dashboard');
    }
}
