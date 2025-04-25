<?php

namespace App\Http\Controllers;


use App\Models\MerchantModel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class Merchants extends Controller
{
    public function index(Request $request){

        $data = MerchantModel::orderBy('id','desc')->where('type', 'merchant')->with('info')->paginate(10);
        return Inertia::render('AdminPages/Merchants', ['data' => $data]);
    }
}
