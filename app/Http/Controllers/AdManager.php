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
        $data = AdManagerData::with("user")->orderBy('id', 'desc')->paginate(7);
        return Inertia::render('AdminPages/AdManager',['data'=>$data]);
    }

    public function create(Request $request){
        $tokenDate = Carbon::now()->addDays(60);
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

        $adManager = AdManagerData::find($request->input('id'));


        if ($adManager->access_token === $request->input('accessToken')) {

            return response()->json(['status' => 'not_updated', 'message' => 'Access token is the same. No update performed.'],304);
        }

        else{
            $adManager->access_token = $request->input('accessToken');
            $adManager->token_expired_on = Carbon::now()->addDays(60)->format('d/m/Y');
            $adManager->save();
            return response()->json(['status' => 'updated', 'message' => 'Access token updated successfully.']);
        }

    }


    public function expiredSoon(Request $request){

        $today = Carbon::today()->format('d/m/Y');
        $next7Days = Carbon::today()->addDays(7);

        $data = AdManagerData::with("user")
            ->whereDate('token_expired_on', '>=', $today)
            ->whereDate('token_expired_on', '<=', $next7Days)
            ->orderBy('id', 'desc')
            ->paginate(7);

        return Inertia::render('AdminPages/AdManagerClasses',
            [
                'data'=>$data,
                'pageTitle'=>'Expired Soon',
                'color'=>'bg-danger'
                ]
        );
    }

    public function wellLife(){
        $next7Days = Carbon::today()->addDays(7);

        $data = AdManagerData::with("user")
            ->whereDate('token_expired_on', '>=', $next7Days)
            ->orderBy('id', 'desc')
            ->paginate(7);

        return Inertia::render('AdminPages/AdManagerClasses',
            [
                'data'=>$data,
                'pageTitle'=>'Well Life Span',
                'color'=>'bg-success']);
    }


    public function used(){
        $data = AdManagerData::with("user")
            ->whereNot('user_id', 1)
            ->orderBy('id', 'desc')
            ->paginate(7);

        return Inertia::render('AdminPages/AdManagerClasses',
            [
                'data'=>$data,
                'pageTitle'=>'Used AD manager',
                'color'=>'bg-secondary'
                ]);
    }


    public function unused(Request $request){
        $data = AdManagerData::with('user')
            ->where('user_id', 1)
            ->orderBy('id', 'desc')
            ->paginate(7);

        return Inertia::render('AdminPages/AdManagerClasses',
            [
                'data'=>$data,
                'pageTitle'=>'Unused AD manager',
                'color'=>'bg-info'
                ]);
    }




}
