<?php

namespace App\Http\Controllers;


use App\Models\MerchantModel;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class Merchants extends Controller
{
    public function index(Request $request){

        if ($request->filled('search')) {
            $data = MerchantModel::search($request->get('search'))->get();

            // Manually load the 'info' relationship after search
            $data->load('info');

            // Manually paginate (since `search()->get()` doesn't paginate)
            $currentPage = LengthAwarePaginator::resolveCurrentPage();
            $perPage = 10;
            $data = new LengthAwarePaginator(
                $data->forPage($currentPage, $perPage),
                $data->count(),
                $perPage,
                $currentPage,
                ['path' => request()->url(), 'query' => request()->query()]
            );


        }
        else{
            $data = MerchantModel::orderBy('id','desc')->where('type', 'merchant')->with('info')->paginate(10);
        }
        return Inertia::render('AdminPages/Merchants', ['data' => $data]);
    }



    public function store(Request $request){

        $request->validate([
            'userName' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
        ]);

        $userName = $request->input('userName');
        $email = $request->input('email');
        $password = "marchant123"; // Default password



        $response = Http::withToken('iuaoysndfa8q34n3490fhariuykhsdjfhsdfhf')
            ->post('https://marketcafee.com/api/register', [
                'name' => $userName,
                'email' => $email,
                'password' => $password,
            ]);


        if ($response->successful()) {
            $responseData = $response->json(); // Get all returned data as array
            return response()->json([
                'success' => true,
                'data' => $responseData,
            ]);
        } else {
            // Handle API error
            return response()->json([
                'success' => false,
                'data' => $response->json()
            ]);
        }


    }



    public function show($id){
        return Inertia::render('AdminPages/UserPage',[
            'id'=>$id,
        ]);
    }



}
