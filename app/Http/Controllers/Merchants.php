<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class Merchants extends Controller
{
    public function index(Request $request){
        $data = User::where('type', 'merchant')
            ->where(function ($query) use ($request) {
                if ($request->search) {
                    $query->where('name', 'like', '%' . $request->search . '%')
                        ->orWhere('email', 'like', '%' . $request->search . '%');
                }
            })
            ->paginate(10);
        return Inertia::render('AdminPages/Merchants',[
            'data'=>$data
        ]);
    }
}
