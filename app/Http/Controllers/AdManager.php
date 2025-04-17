<?php

namespace App\Http\Controllers;

use App\Models\AdManagerData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use function Termwind\render;
use Carbon\Carbon;

class AdManager extends Controller
{
    public function index(){
         $data = AdManagerData::orderBy('id', 'desc')->paginate(7);
        return Inertia::render('AdminPages/AdManager',['data'=>$data]);
    }

    public function create(Request $request){

        $request->validate([
            "accessToken" => "",
        ], [
            "accessToken.unique" => "Wrong Access Token",
        ]);

        $tokenDate = Carbon::now()->addDays(60)->format('d/m/Y');
        $adManagerId = $request->input('adManagerId');
        $appID = $request->input('appId');
        $accessToken = $request->input('accessToken');


        AdManagerData::create([
            'ad_manager' => $adManagerId,
            'user_id' => 1,
            'app_id' => $appID,
            'access_token' => $accessToken,
            'token_expired_on' => $tokenDate,
            'limit' => 0,
            'current_spend' => 0,
            'latest_fund_request' => 0,
        ]);



        return Redirect::back()->with([
            'message' => "New AD manager added successfully",
            'status' => 200
        ]);
    }

    public function update(Request $request){
        return $request;
    }

}
